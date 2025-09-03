import { IconType } from "react-icons";
import { TextQuizFormElement } from "../fields/TextField";

export type ElementsType = "TextField";

export type QuizElement = {
  type: ElementsType;

  construct: (id: string) => QuizElementInstance;

  quizBtnElement: {
    icon: IconType;
    label: string;
  };

  designerComponent: React.FC<{ elementInstance: QuizElementInstance }>;
  quizComponent: React.FC;
  propertiesComponent: React.FC;
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
};
