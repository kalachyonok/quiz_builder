"use client";

import { MdTextFields } from "react-icons/md";
import { ElementsType, QuizElement } from "../QuizBuilder/QuizElements";

const type: ElementsType = "TextField";
export const TextQuizFormElement: QuizElement = {
  type,
  construct: (id: string) => ({
    id,
    type,
    extraAttributes: {
      label: "Text field",
      helperText: "Helper text",
      required: false,
      placeHoldare: "Value here...",
    },
  }),
  quizBtnElement: {
    icon: MdTextFields,
    label: "Text Field",
  },
  designerComponent: () => <div>Designer Component</div>,
  quizComponent: () => <div>Quiz Component</div>,
  propertiesComponent: () => <div>Properties Component</div>,
};
