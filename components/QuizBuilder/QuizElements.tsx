import { IconType } from "react-icons";
import { TextQuizFormElement } from "../fields/TextField";
import { TitleFieldFormElement } from "../fields/TitleField";
import { NumberFieldFormElement } from "../fields/NumberField";
import { SelectFieldFormElement } from "../fields/SelectField";
import { CheckboxFieldFormElement } from "../fields/CheckboxField";

export type ElementsType =
  | "TextField"
  | "TitleField"
  | "NumberField"
  | "SelectField"
  | "CheckboxField";

export type QuizElement = {
  type: ElementsType;

  construct: (id: string) => QuizElementInstance;

  quizBtnElement: {
    icon: IconType;
    label: string;
  };

  designerComponent: React.FC<{ elementInstance: QuizElementInstance }>;
  quizComponent: React.FC;
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
  TitleField: TitleFieldFormElement,
  NumberField: NumberFieldFormElement,
  SelectField: SelectFieldFormElement,
  CheckboxField: CheckboxFieldFormElement,
};
