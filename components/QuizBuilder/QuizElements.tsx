import { IconType } from "react-icons";
import { TextQuizFormElement } from "../fields/TextField";
import { CheckboxFieldFormElement } from "../fields/CheckboxField";
import { RadioFieldFormElement } from "../fields/RadioField";
import { HeadingFieldFormElement } from "../fields/HeadingField";
import { FooterFieldFormElement } from "../fields/FooterField";

export type ElementsType =
  | "TextField"
  | "CheckboxField"
  | "RadioField"
  | "HeadingField"
  | "FooterField";

export type SubmitFunction = (key: string, value: string) => void;

export type QuizElement = {
  type: ElementsType;

  construct: (id: string) => QuizElementInstance;

  quizBtnElement: {
    icon: IconType;
    label: string;
  };

  designerComponent: React.FC<{ elementInstance: QuizElementInstance }>;
  quizComponent: React.FC<{
    elementInstance: QuizElementInstance;
    submitValue?: SubmitFunction;
    isInvalid?: boolean;
    defaultValue?: string;
  }>;
  propertiesComponent: React.FC<{ elementInstance: QuizElementInstance }>;
  validate: (formElement: QuizElementInstance, currentValue: string) => boolean;
};

export type QuizElementInstance = {
  id: string;
  type: ElementsType;
  extraAttributes?: Record<string, unknown>;
};

type QuizElementsType = {
  [key in ElementsType]: QuizElement;
};
export const QuizElements: QuizElementsType = {
  TextField: TextQuizFormElement,
  CheckboxField: CheckboxFieldFormElement,
  RadioField: RadioFieldFormElement,
  HeadingField: HeadingFieldFormElement,
  FooterField: FooterFieldFormElement,
};
