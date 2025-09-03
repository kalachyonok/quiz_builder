"use client";

import { MdTextFields } from "react-icons/md";
import {
  ElementsType,
  QuizElement,
  QuizElementInstance,
} from "../QuizBuilder/QuizElements";
import { Label } from "../ui/label";
import { Input } from "../ui/input";

const type: ElementsType = "TextField";

const extraAttributes = {
  label: "Text field",
  helperText: "Input the text above",
  required: false,
  placeHolder: "Value here...",
};

export const TextQuizFormElement: QuizElement = {
  type,
  construct: (id: string) => ({
    id,
    type,
    extraAttributes,
  }),
  quizBtnElement: {
    icon: MdTextFields,
    label: "Text Field",
  },
  designerComponent: DesignerComponent,
  quizComponent: () => <div>Quiz Component</div>,
  propertiesComponent: () => <div>Properties Component</div>,
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
  const { label, placeHolder, helperText, required } = element.extraAttributes;
  return (
    <div className="flex flex-col gap-2 w-full text-amber-950">
      <Label>{label}</Label>
      <Input placeholder={placeHolder} />
      {helperText && (
        <p className="text-muted-foreground text-[0.8rem]">{helperText}</p>
      )}
    </div>
  );
}
