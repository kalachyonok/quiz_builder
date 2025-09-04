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
import { LuHeading1 } from "react-icons/lu";
import { useElementContext } from "@/app/hooks/useElementContext";
import {
  ElementsType,
  QuizElement,
  QuizElementInstance,
} from "../QuizBuilder/QuizElements";

const type: ElementsType = "TitleField";

const extraAttributes = {
  title: "Title field",
};

const propertiesSchema = z.object({
  title: z.string().min(2).max(50),
});

export const TitleFieldFormElement: QuizElement = {
  type,
  construct: (id: string) => ({
    id,
    type,
    extraAttributes,
  }),
  quizBtnElement: {
    icon: LuHeading1,
    label: "Title field",
  },
  designerComponent: DesignerComponent,
  quizComponent: () => <div>Title Component</div>,
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
  const { title } = element.extraAttributes;
  return (
    <div className="flex flex-col gap-2 w-full">
      <Label className="text-muted-foreground">Title field</Label>
      <p className="text-xl">{title}</p>
    </div>
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
      title: element.extraAttributes.title,
    },
  });

  useEffect(() => {
    form.reset(element.extraAttributes);
  }, [element, form]);

  function applyChanges(values: propertiesFormSchemaType) {
    const { title } = values;
    updateElement(element.id, {
      ...element,
      extraAttributes: {
        title,
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
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Title</FormLabel>
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
      </form>
    </Form>
  );
}
