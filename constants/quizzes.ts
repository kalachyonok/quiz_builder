import { QuizElementInstance } from "@/components/QuizBuilder/QuizElements";

export type Quizzes = {
  id: number;
  title: string;
  saved: boolean;
  published: boolean;
  createdAt: string;
  updatedAt: string;
  shape: QuizElementInstance[];
};

export const QUIZZES: Quizzes[] = [
  {
    id: 1757576238218,
    title: "Car Brands Quiz",
    saved: true,
    published: false,
    createdAt: "2025-09-11T07:37:18.218Z",
    updatedAt: "2025-09-11T07:37:18.219Z",
    shape: [
      {
        id: "5981",
        type: "RadioField",
        extraAttributes: {
          label: "Which car brand has a logo with four rings?",
          helperText: "",
          required: false,
          options: ["BMW", "Audi", "Toyota"],
        },
      },
      {
        id: "133",
        type: "CheckboxField",
        extraAttributes: {
          label: "Which of the following are Japanese car brands?",
          helperText: "",
          required: false,
          options: ["Toyota", "Ford", "Honda"],
        },
      },
      {
        id: "7101",
        type: "TextField",
        extraAttributes: {
          label:
            "Write the name of a car brand that starts with the letter “B”.",
          helperText: "Input the text above",
          placeHolder: "Value here...",
          required: false,
        },
      },
      {
        id: "9575",
        type: "ButtonField",
        extraAttributes: {
          text: "Submit",
          variant: "submit",
        },
      },
      {
        id: "4306",
        type: "FooterField",
        extraAttributes: {
          title: "© 2025 Quiz Builder. All rights reserved.",
        },
      },
    ],
  },
  {
    id: 1757576577426,
    title: "Famous Cars Quiz",
    saved: true,
    published: true,
    createdAt: "2025-09-11T07:42:57.426Z",
    updatedAt: "2025-09-11T07:43:00.911Z",
    shape: [
      {
        id: "5701",
        type: "HeadingField",
        extraAttributes: {
          title: "Let's start quiz!!!",
        },
      },
      {
        id: "6374",
        type: "RadioField",
        extraAttributes: {
          label: "Which car brand produces the Mustang?",
          helperText: "",
          required: false,
          options: ["Ford", "Chevrolet", "Dodge"],
        },
      },
      {
        id: "4035",
        type: "CheckboxField",
        extraAttributes: {
          label: "Which of the following are luxury car brands?",
          helperText: "",
          required: false,
          options: ["Lexus", "Lamborghini", "Hyundai"],
        },
      },
      {
        id: "6459",
        type: "ButtonField",
        extraAttributes: {
          text: "Next",
          variant: "next",
        },
      },
      {
        id: "7277",
        type: "FooterField",
        extraAttributes: {
          title: "© 2025 Quiz Builder. All rights reserved.",
        },
      },
    ],
  },
];
