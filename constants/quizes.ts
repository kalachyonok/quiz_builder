import { QuizElementInstance } from "@/components/QuizBuilder/QuizElements";

export type Quizzes = {
  id: number;
  title: string;
  tags: string[];
  saved: boolean;
  published: boolean;
  createdAt: string;
  updatedAt: string;
  shape: QuizElementInstance[];
};

export const QUIZZES: Quizzes[] = [
  {
    id: 1234,
    title: "General Knowledge Quiz",
    tags: ["knowledge", "general", "trivia"],
    saved: true,
    published: true,
    createdAt: "2024-05-12T10:30:00Z",
    updatedAt: "2024-06-01T14:20:00Z",
    shape: [      
      {
        id: "2455",
        type: "TextField",
        extraAttributes: {
          label: "First Question - What your name?",
          helperText: "Input the text above",
          placeHolder: "Value here...",
          required: false,
        },
      },      
    ],
  },
  {
    id: 2345,
    title: "Science & Nature Challenge",
    tags: ["science", "nature", "biology"],
    saved: true,
    published: false,
    createdAt: "2023-08-21T09:15:00Z",
    updatedAt: "2023-09-02T11:40:00Z",
    shape: [
      {
        id: "2455",
        type: "TextField",
        extraAttributes: {
          label: "First Question - What your name?",
          helperText: "Input the text above",
          placeHolder: "Value here...",
          required: false,
        },
      },
    ],
  },
  {
    id: 3456,
    title: "History Facts Test",
    tags: ["history", "world", "events"],
    saved: true,
    published: true,
    createdAt: "2024-01-05T12:00:00Z",
    updatedAt: "2024-02-18T08:45:00Z",
    shape: [
      {
        id: "2455",
        type: "TextField",
        extraAttributes: {
          label: "First Question - What your name?",
          helperText: "Input the text above",
          placeHolder: "Value here...",
          required: false,
        },
      },
    ],
  },
  {
    id: 4567,
    title: "Pop Culture Trivia",
    tags: ["movies", "music", "celebs"],
    saved: true,
    published: true,
    createdAt: "2023-07-11T15:25:00Z",
    updatedAt: "2023-08-02T16:55:00Z",
    shape: [
      {
        id: "2455",
        type: "TextField",
        extraAttributes: {
          label: "First Question - What your name?",
          helperText: "Input the text above",
          placeHolder: "Value here...",
          required: false,
        },
      },
    ],
  },
  {
    id: 5678,
    title: "Geography Master Quiz",
    tags: ["geography", "maps", "countries"],
    saved: true,
    published: false,
    createdAt: "2022-12-19T18:40:00Z",
    updatedAt: "2023-01-10T09:10:00Z",
    shape: [
      {
        id: "2455",
        type: "TextField",
        extraAttributes: {
          label: "First Question - What your name?",
          helperText: "Input the text above",
          placeHolder: "Value here...",
          required: false,
        },
      },
    ],
  },
  {
    id: 6789,
    title: "Sports Challenge",
    tags: ["sports", "football", "basketball"],
    saved: true,
    published: true,
    createdAt: "2024-03-03T07:50:00Z",
    updatedAt: "2024-04-12T19:05:00Z",
    shape: [
      {
        id: "2455",
        type: "TextField",
        extraAttributes: {
          label: "First Question - What your name?",
          helperText: "Input the text above",
          placeHolder: "Value here...",
          required: false,
        },
      },
    ],
  },
  {
    id: 7890,
    title: "Mathematics Quiz",
    tags: ["math", "logic", "numbers"],
    saved: true,
    published: false,
    createdAt: "2023-05-15T13:20:00Z",
    updatedAt: "2023-06-01T21:30:00Z",
    shape: [
      {
        id: "2455",
        type: "TextField",
        extraAttributes: {
          label: "First Question - What your name?",
          helperText: "Input the text above",
          placeHolder: "Value here...",
          required: false,
        },
      },
    ],
  },
  {
    id: 8901,
    title: "Technology & Gadgets",
    tags: ["technology", "gadgets", "IT"],
    saved: true,
    published: true,
    createdAt: "2023-02-08T10:05:00Z",
    updatedAt: "2023-03-12T12:15:00Z",
    shape: [
      {
        id: "2455",
        type: "TextField",
        extraAttributes: {
          label: "First Question - What your name?",
          helperText: "Input the text above",
          placeHolder: "Value here...",
          required: false,
        },
      },
    ],
  }, 
];
