"use client";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { LuMousePointerClick } from "react-icons/lu";
import { useElementContext } from "@/app/hooks/useElementContext";
import {
  ElementsType,
  QuizElement,
  QuizElementInstance,
} from "../QuizBuilder/QuizElements";
import { Button } from "../ui/button";

const type: ElementsType = "ButtonField";

const extraAttributes = {
  text: "Next",
  variant: "next" as "next" | "submit",
};

const propertiesSchema = z.object({
  text: z.string().min(1).max(50),
  variant: z.enum(["next", "submit"]),
});

export const ButtonFieldFormElement: QuizElement = {
  type,
  construct: (id: string) => ({
    id,
    type,
    extraAttributes,
  }),
  quizBtnElement: {
    icon: LuMousePointerClick,
    label: "Button",
  },
  designerComponent: DesignerComponent,
  quizComponent: FormComponent,
  propertiesComponent: PropertiesComponent,

  validate: () => true,
};

type CustomInstance = QuizElementInstance & {
  extraAttributes: typeof extraAttributes;
};

function DesignerComponent({
  elementInstance,
}: {
  elementInstance: QuizElementInstance;
}) {
  const element = elementInstance as CustomInstance;
  const { text, variant } = element.extraAttributes;
  return (
    <div className="flex flex-col gap-2 w-full">
      <Label className="text-muted-foreground">Button</Label>
      <Button variant={variant} className="w-fit">
        {text}
      </Button>
    </div>
  );
}

function FormComponent({
  elementInstance,
}: {
  elementInstance: QuizElementInstance;
}) {
  const element = elementInstance as CustomInstance;

  const { text, variant } = element.extraAttributes;
  return (
    <Button
      variant={variant}
      className="w-fit"
      onClick={() => {
        console.log(`Button clicked: ${text}`);
      }}
    >
      {text}
    </Button>
  );
}

type propertiesFormSchemaType = z.infer<typeof propertiesSchema>;

function PropertiesComponent({
  elementInstance,
}: {
  elementInstance: QuizElementInstance;
}) {
  const element = elementInstance as CustomInstance;
  const { updateElement } = useElementContext();
  const form = useForm<propertiesFormSchemaType>({
    resolver: zodResolver(propertiesSchema),
    mode: "onBlur",
    defaultValues: {
      text: element.extraAttributes.text,
      variant: element.extraAttributes.variant,
    },
  });

  useEffect(() => {
    form.reset(element.extraAttributes);
  }, [element, form]);

  function applyChanges(values: propertiesFormSchemaType) {
    const { text, variant } = values;
    updateElement(element.id, {
      ...element,
      extraAttributes: {
        text,
        variant,
      },
    });
  }

  return (
    <Form {...form}>
      <form
        onBlur={form.handleSubmit(applyChanges)}
        onSubmit={(e) => {
          e.preventDefault();
        }}
        className="space-y-3"
      >
        <FormField
          control={form.control}
          name="text"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Button Text</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") e.currentTarget.blur();
                  }}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="variant"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Button Style</FormLabel>
              <Select
                onValueChange={(value) => {
                  field.onChange(value);
                  const newText = value === "submit" ? "Submit" : "Next";
                  form.setValue("text", newText);
                  applyChanges({
                    text: newText,
                    variant: value as "next" | "submit",
                  });
                }}
                defaultValue={field.value}
              >
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select button style" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="next">Next</SelectItem>
                  <SelectItem value="submit">Submit</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
      </form>
    </Form>
  );
}
