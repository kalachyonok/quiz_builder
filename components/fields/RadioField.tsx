"use client";

import { useEffect, useState } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  ElementsType,
  QuizElement,
  QuizElementInstance,
  SubmitFunction,
} from "../QuizBuilder/QuizElements";
import { Label } from "../ui/label";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { Separator } from "../ui/separator";
import { Button } from "../ui/button";
import { AiOutlineClose, AiOutlinePlus } from "react-icons/ai";
import { useElementContext } from "@/hooks/useElementContext";
import { cn } from "@/lib/utils";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { MdRadioButtonChecked } from "react-icons/md";
import { handleEnterKeyDown } from "@/utils/enterKeyDown";

const type: ElementsType = "RadioField" as ElementsType;

const extraAttributes = {
  label: "Radio field",
  helperText: "Helper text",
  options: ["Option 1", "Option 2"],
};

const propertiesSchema = z.object({
  label: z.string().min(2).max(50),
  helperText: z.string().max(200),
  options: z.array(z.string().min(1)).default([]).optional(),
});

export const RadioFieldFormElement: QuizElement = {
  type,
  construct: (id: string) => ({
    id,
    type,
    extraAttributes,
  }),
  quizBtnElement: {
    icon: MdRadioButtonChecked,
    label: "Radio Field",
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
  const { label, helperText, options } = element.extraAttributes;
  return (
    <div className="flex flex-col gap-2 w-full">
      <Label>{label}</Label>
      <RadioGroup>
        {options.map((opt) => (
          <div key={opt} className="flex items-center space-x-2">
            <RadioGroupItem value={opt} id={`${element.id}-${opt}`} disabled />
            <Label htmlFor={`${element.id}-${opt}`}>{opt}</Label>
          </div>
        ))}
      </RadioGroup>
      {helperText && (
        <p className="text-muted-foreground text-[0.8rem]">{helperText}</p>
      )}
    </div>
  );
}

function FormComponent({
  elementInstance,
  submitValue,
  isInvalid,
  defaultValue,
}: {
  elementInstance: QuizElementInstance;
  submitValue?: SubmitFunction;
  isInvalid?: boolean;
  defaultValue?: string;
}) {
  const element = elementInstance as CustomInstance;
  const [value, setValue] = useState(defaultValue || "");
  const [error, setError] = useState(false);

  useEffect(() => {
    setError(isInvalid === true);
  }, [isInvalid]);

  const { label, helperText, options } = element.extraAttributes;
  return (
    <div className="flex flex-col gap-2 w-full">
      <Label className={cn(error && "text-red-500")}>{label}</Label>
      <RadioGroup
        value={value}
        onValueChange={(val) => {
          setValue(val);
          if (!submitValue) return;
          const valid = RadioFieldFormElement.validate(element, val);
          setError(!valid);
          submitValue(element.id, val);
        }}
        className={cn(error && "border-red-500/50 rounded-md p-1")}
      >
        {options.map((opt) => (
          <div key={opt} className="flex items-center space-x-2">
            <RadioGroupItem value={opt} id={`${element.id}-${opt}`} />
            <Label htmlFor={`${element.id}-${opt}`}>{opt}</Label>
          </div>
        ))}
      </RadioGroup>
      {helperText && (
        <p
          className={cn(
            "text-muted-foreground text-[0.8rem]",
            error && "text-red-500"
          )}
        >
          {helperText}
        </p>
      )}
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
  const { updateElement, setSelectedElement } = useElementContext();
  const form = useForm<propertiesFormSchemaType>({
    resolver: zodResolver(propertiesSchema),
    mode: "onSubmit",
    defaultValues: {
      label: element.extraAttributes.label,
      helperText: element.extraAttributes.helperText,
      options: element.extraAttributes.options,
    },
  });

  useEffect(() => {
    form.reset(element.extraAttributes);
  }, [element, form]);

  function applyChanges(values: propertiesFormSchemaType) {
    const { label, helperText, options } = values;
    updateElement(element.id, {
      ...element,
      extraAttributes: {
        label,
        helperText,
        options,
      },
    });
    setSelectedElement?.(null);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(applyChanges)} className="space-y-3">
        <FormField
          control={form.control}
          name="label"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Label</FormLabel>
              <FormControl>
                <Input {...field} onKeyDown={handleEnterKeyDown} />
              </FormControl>
              <FormDescription>
                The label of the field. <br /> It will be displayed above the
                field
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="helperText"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Helper text</FormLabel>
              <FormControl>
                <Input {...field} onKeyDown={handleEnterKeyDown} />
              </FormControl>
              <FormDescription>
                The helper text of the field. <br />
                It will be displayed below the field.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Separator />
        <FormField
          control={form.control}
          name="options"
          render={({ field }) => (
            <FormItem>
              <div className="flex justify-between items-center">
                <FormLabel>Options</FormLabel>
                <Button
                  variant={"outline"}
                  className="gap-2"
                  onClick={(e) => {
                    e.preventDefault();
                    form.setValue("options", field.value?.concat("New option"));
                  }}
                >
                  <AiOutlinePlus />
                  Add
                </Button>
              </div>
              <div className="flex flex-col gap-2">
                {form.watch("options")?.map((option, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between gap-1"
                  >
                    <Input
                      placeholder=""
                      value={option}
                      onChange={(e) => {
                        (field.value || [])[index] = e.target.value;
                        field.onChange(field.value);
                      }}
                    />
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={(e) => {
                        e.preventDefault();
                        const newOptions = [...(field.value || [])];
                        newOptions.splice(index, 1);
                        field.onChange(newOptions);
                      }}
                    >
                      <AiOutlineClose />
                    </Button>
                  </div>
                ))}
              </div>

              <FormDescription>
                Define the radio options displayed to the user.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Separator />
        <Button className="w-full" type="submit">
          Save
        </Button>
      </form>
    </Form>
  );
}
