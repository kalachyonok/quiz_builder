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
        id: "779",
        type: "TitleField",
        extraAttributes: {
          title: "Let's start quiz",
        },
      },
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
      {
        id: "2799",
        type: "NumberField",
        extraAttributes: {
          label: "Second Question - What is your age?",
          helperText: "Helper text",
          placeHolder: "0",
          required: false,
        },
      },
      {
        id: "7026",
        type: "SelectField",
        extraAttributes: {
          label: "Select correct answers",
          helperText: "Helper text",
          placeHolder: "Value here...",
          required: false,
          options: ["PI", "PI-PI", "PI-PI-PI"],
        },
      },
      {
        id: "1281",
        type: "TextAreaField",
        extraAttributes: {
          label: "Type your vision on ...",
          helperText: "Helper text",
          placeHolder: "Value here...",
          required: false,
          rows: 3,
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
        id: "779",
        type: "TitleField",
        extraAttributes: {
          title: "Let's start quiz",
        },
      },
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
      {
        id: "2799",
        type: "NumberField",
        extraAttributes: {
          label: "Second Question - What is your age?",
          helperText: "Helper text",
          placeHolder: "0",
          required: false,
        },
      },
      {
        id: "7026",
        type: "SelectField",
        extraAttributes: {
          label: "Select correct answers",
          helperText: "Helper text",
          placeHolder: "Value here...",
          required: false,
          options: ["PI", "PI-PI", "PI-PI-PI"],
        },
      },
      {
        id: "1281",
        type: "TextAreaField",
        extraAttributes: {
          label: "Type your vision on ...",
          helperText: "Helper text",
          placeHolder: "Value here...",
          required: false,
          rows: 3,
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
        id: "779",
        type: "TitleField",
        extraAttributes: {
          title: "Let's start quiz",
        },
      },
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
      {
        id: "2799",
        type: "NumberField",
        extraAttributes: {
          label: "Second Question - What is your age?",
          helperText: "Helper text",
          placeHolder: "0",
          required: false,
        },
      },
      {
        id: "7026",
        type: "SelectField",
        extraAttributes: {
          label: "Select correct answers",
          helperText: "Helper text",
          placeHolder: "Value here...",
          required: false,
          options: ["PI", "PI-PI", "PI-PI-PI"],
        },
      },
      {
        id: "1281",
        type: "TextAreaField",
        extraAttributes: {
          label: "Type your vision on ...",
          helperText: "Helper text",
          placeHolder: "Value here...",
          required: false,
          rows: 3,
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
        id: "779",
        type: "TitleField",
        extraAttributes: {
          title: "Let's start quiz",
        },
      },
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
      {
        id: "2799",
        type: "NumberField",
        extraAttributes: {
          label: "Second Question - What is your age?",
          helperText: "Helper text",
          placeHolder: "0",
          required: false,
        },
      },
      {
        id: "7026",
        type: "SelectField",
        extraAttributes: {
          label: "Select correct answers",
          helperText: "Helper text",
          placeHolder: "Value here...",
          required: false,
          options: ["PI", "PI-PI", "PI-PI-PI"],
        },
      },
      {
        id: "1281",
        type: "TextAreaField",
        extraAttributes: {
          label: "Type your vision on ...",
          helperText: "Helper text",
          placeHolder: "Value here...",
          required: false,
          rows: 3,
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
        id: "779",
        type: "TitleField",
        extraAttributes: {
          title: "Let's start quiz",
        },
      },
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
      {
        id: "2799",
        type: "NumberField",
        extraAttributes: {
          label: "Second Question - What is your age?",
          helperText: "Helper text",
          placeHolder: "0",
          required: false,
        },
      },
      {
        id: "7026",
        type: "SelectField",
        extraAttributes: {
          label: "Select correct answers",
          helperText: "Helper text",
          placeHolder: "Value here...",
          required: false,
          options: ["PI", "PI-PI", "PI-PI-PI"],
        },
      },
      {
        id: "1281",
        type: "TextAreaField",
        extraAttributes: {
          label: "Type your vision on ...",
          helperText: "Helper text",
          placeHolder: "Value here...",
          required: false,
          rows: 3,
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
        id: "779",
        type: "TitleField",
        extraAttributes: {
          title: "Let's start quiz",
        },
      },
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
      {
        id: "2799",
        type: "NumberField",
        extraAttributes: {
          label: "Second Question - What is your age?",
          helperText: "Helper text",
          placeHolder: "0",
          required: false,
        },
      },
      {
        id: "7026",
        type: "SelectField",
        extraAttributes: {
          label: "Select correct answers",
          helperText: "Helper text",
          placeHolder: "Value here...",
          required: false,
          options: ["PI", "PI-PI", "PI-PI-PI"],
        },
      },
      {
        id: "1281",
        type: "TextAreaField",
        extraAttributes: {
          label: "Type your vision on ...",
          helperText: "Helper text",
          placeHolder: "Value here...",
          required: false,
          rows: 3,
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
        id: "779",
        type: "TitleField",
        extraAttributes: {
          title: "Let's start quiz",
        },
      },
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
      {
        id: "2799",
        type: "NumberField",
        extraAttributes: {
          label: "Second Question - What is your age?",
          helperText: "Helper text",
          placeHolder: "0",
          required: false,
        },
      },
      {
        id: "7026",
        type: "SelectField",
        extraAttributes: {
          label: "Select correct answers",
          helperText: "Helper text",
          placeHolder: "Value here...",
          required: false,
          options: ["PI", "PI-PI", "PI-PI-PI"],
        },
      },
      {
        id: "1281",
        type: "TextAreaField",
        extraAttributes: {
          label: "Type your vision on ...",
          helperText: "Helper text",
          placeHolder: "Value here...",
          required: false,
          rows: 3,
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
        id: "779",
        type: "TitleField",
        extraAttributes: {
          title: "Let's start quiz",
        },
      },
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
      {
        id: "2799",
        type: "NumberField",
        extraAttributes: {
          label: "Second Question - What is your age?",
          helperText: "Helper text",
          placeHolder: "0",
          required: false,
        },
      },
      {
        id: "7026",
        type: "SelectField",
        extraAttributes: {
          label: "Select correct answers",
          helperText: "Helper text",
          placeHolder: "Value here...",
          required: false,
          options: ["PI", "PI-PI", "PI-PI-PI"],
        },
      },
      {
        id: "1281",
        type: "TextAreaField",
        extraAttributes: {
          label: "Type your vision on ...",
          helperText: "Helper text",
          placeHolder: "Value here...",
          required: false,
          rows: 3,
        },
      },
    ],
  },
  {
    id: 9012,
    title: "Food & Cooking Trivia",
    tags: ["food", "cooking", "recipes"],
    saved: true,
    published: true,
    createdAt: "2024-04-22T09:55:00Z",
    updatedAt: "2024-05-14T17:45:00Z",
    shape: [
      {
        id: "779",
        type: "TitleField",
        extraAttributes: {
          title: "Let's start quiz",
        },
      },
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
      {
        id: "2799",
        type: "NumberField",
        extraAttributes: {
          label: "Second Question - What is your age?",
          helperText: "Helper text",
          placeHolder: "0",
          required: false,
        },
      },
      {
        id: "7026",
        type: "SelectField",
        extraAttributes: {
          label: "Select correct answers",
          helperText: "Helper text",
          placeHolder: "Value here...",
          required: false,
          options: ["PI", "PI-PI", "PI-PI-PI"],
        },
      },
      {
        id: "1281",
        type: "TextAreaField",
        extraAttributes: {
          label: "Type your vision on ...",
          helperText: "Helper text",
          placeHolder: "Value here...",
          required: false,
          rows: 3,
        },
      },
    ],
  },
  {
    id: 1012,
    title: "Literature & Books",
    tags: ["literature", "books", "authors"],
    saved: true,
    published: false,
    createdAt: "2023-09-10T14:35:00Z",
    updatedAt: "2023-10-04T16:00:00Z",
    shape: [
      {
        id: "779",
        type: "TitleField",
        extraAttributes: {
          title: "Let's start quiz",
        },
      },
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
      {
        id: "2799",
        type: "NumberField",
        extraAttributes: {
          label: "Second Question - What is your age?",
          helperText: "Helper text",
          placeHolder: "0",
          required: false,
        },
      },
      {
        id: "7026",
        type: "SelectField",
        extraAttributes: {
          label: "Select correct answers",
          helperText: "Helper text",
          placeHolder: "Value here...",
          required: false,
          options: ["PI", "PI-PI", "PI-PI-PI"],
        },
      },
      {
        id: "1281",
        type: "TextAreaField",
        extraAttributes: {
          label: "Type your vision on ...",
          helperText: "Helper text",
          placeHolder: "Value here...",
          required: false,
          rows: 3,
        },
      },
    ],
  },
  {
    id: 1123,
    title: "Space Exploration Quiz",
    tags: ["space", "astronomy", "planets"],
    saved: true,
    published: true,
    createdAt: "2022-11-29T11:45:00Z",
    updatedAt: "2023-01-12T08:20:00Z",
    shape: [
      {
        id: "779",
        type: "TitleField",
        extraAttributes: {
          title: "Let's start quiz",
        },
      },
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
      {
        id: "2799",
        type: "NumberField",
        extraAttributes: {
          label: "Second Question - What is your age?",
          helperText: "Helper text",
          placeHolder: "0",
          required: false,
        },
      },
      {
        id: "7026",
        type: "SelectField",
        extraAttributes: {
          label: "Select correct answers",
          helperText: "Helper text",
          placeHolder: "Value here...",
          required: false,
          options: ["PI", "PI-PI", "PI-PI-PI"],
        },
      },
      {
        id: "1281",
        type: "TextAreaField",
        extraAttributes: {
          label: "Type your vision on ...",
          helperText: "Helper text",
          placeHolder: "Value here...",
          required: false,
          rows: 3,
        },
      },
    ],
  },
  {
    id: 1234,
    title: "Art & Painting Challenge",
    tags: ["art", "painting", "artists"],
    saved: true,
    published: true,
    createdAt: "2024-02-15T20:10:00Z",
    updatedAt: "2024-03-18T09:25:00Z",
    shape: [
      {
        id: "779",
        type: "TitleField",
        extraAttributes: {
          title: "Let's start quiz",
        },
      },
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
      {
        id: "2799",
        type: "NumberField",
        extraAttributes: {
          label: "Second Question - What is your age?",
          helperText: "Helper text",
          placeHolder: "0",
          required: false,
        },
      },
      {
        id: "7026",
        type: "SelectField",
        extraAttributes: {
          label: "Select correct answers",
          helperText: "Helper text",
          placeHolder: "Value here...",
          required: false,
          options: ["PI", "PI-PI", "PI-PI-PI"],
        },
      },
      {
        id: "1281",
        type: "TextAreaField",
        extraAttributes: {
          label: "Type your vision on ...",
          helperText: "Helper text",
          placeHolder: "Value here...",
          required: false,
          rows: 3,
        },
      },
    ],
  },
  {
    id: 1345,
    title: "Animals & Wildlife Quiz",
    tags: ["animals", "wildlife", "zoology"],
    saved: true,
    published: false,
    createdAt: "2023-03-28T07:30:00Z",
    updatedAt: "2023-04-22T18:40:00Z",
    shape: [
      {
        id: "779",
        type: "TitleField",
        extraAttributes: {
          title: "Let's start quiz",
        },
      },
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
      {
        id: "2799",
        type: "NumberField",
        extraAttributes: {
          label: "Second Question - What is your age?",
          helperText: "Helper text",
          placeHolder: "0",
          required: false,
        },
      },
      {
        id: "7026",
        type: "SelectField",
        extraAttributes: {
          label: "Select correct answers",
          helperText: "Helper text",
          placeHolder: "Value here...",
          required: false,
          options: ["PI", "PI-PI", "PI-PI-PI"],
        },
      },
      {
        id: "1281",
        type: "TextAreaField",
        extraAttributes: {
          label: "Type your vision on ...",
          helperText: "Helper text",
          placeHolder: "Value here...",
          required: false,
          rows: 3,
        },
      },
    ],
  },
  {
    id: 1456,
    title: "Music Genres Test",
    tags: ["music", "genres", "songs"],
    saved: true,
    published: true,
    createdAt: "2023-12-01T09:00:00Z",
    updatedAt: "2024-01-09T13:15:00Z",
    shape: [
      {
        id: "779",
        type: "TitleField",
        extraAttributes: {
          title: "Let's start quiz",
        },
      },
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
      {
        id: "2799",
        type: "NumberField",
        extraAttributes: {
          label: "Second Question - What is your age?",
          helperText: "Helper text",
          placeHolder: "0",
          required: false,
        },
      },
      {
        id: "7026",
        type: "SelectField",
        extraAttributes: {
          label: "Select correct answers",
          helperText: "Helper text",
          placeHolder: "Value here...",
          required: false,
          options: ["PI", "PI-PI", "PI-PI-PI"],
        },
      },
      {
        id: "1281",
        type: "TextAreaField",
        extraAttributes: {
          label: "Type your vision on ...",
          helperText: "Helper text",
          placeHolder: "Value here...",
          required: false,
          rows: 3,
        },
      },
    ],
  },
  {
    id: 1567,
    title: "Movies & Directors Quiz",
    tags: ["movies", "directors", "cinema"],
    saved: true,
    published: false,
    createdAt: "2024-05-01T16:45:00Z",
    updatedAt: "2024-06-10T11:35:00Z",
    shape: [
      {
        id: "779",
        type: "TitleField",
        extraAttributes: {
          title: "Let's start quiz",
        },
      },
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
      {
        id: "2799",
        type: "NumberField",
        extraAttributes: {
          label: "Second Question - What is your age?",
          helperText: "Helper text",
          placeHolder: "0",
          required: false,
        },
      },
      {
        id: "7026",
        type: "SelectField",
        extraAttributes: {
          label: "Select correct answers",
          helperText: "Helper text",
          placeHolder: "Value here...",
          required: false,
          options: ["PI", "PI-PI", "PI-PI-PI"],
        },
      },
      {
        id: "1281",
        type: "TextAreaField",
        extraAttributes: {
          label: "Type your vision on ...",
          helperText: "Helper text",
          placeHolder: "Value here...",
          required: false,
          rows: 3,
        },
      },
    ],
  },
  {
    id: 1678,
    title: "Politics & Leaders",
    tags: ["politics", "leaders", "government"],
    saved: true,
    published: true,
    createdAt: "2023-01-19T12:50:00Z",
    updatedAt: "2023-02-23T10:20:00Z",
    shape: [
      {
        id: "779",
        type: "TitleField",
        extraAttributes: {
          title: "Let's start quiz",
        },
      },
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
      {
        id: "2799",
        type: "NumberField",
        extraAttributes: {
          label: "Second Question - What is your age?",
          helperText: "Helper text",
          placeHolder: "0",
          required: false,
        },
      },
      {
        id: "7026",
        type: "SelectField",
        extraAttributes: {
          label: "Select correct answers",
          helperText: "Helper text",
          placeHolder: "Value here...",
          required: false,
          options: ["PI", "PI-PI", "PI-PI-PI"],
        },
      },
      {
        id: "1281",
        type: "TextAreaField",
        extraAttributes: {
          label: "Type your vision on ...",
          helperText: "Helper text",
          placeHolder: "Value here...",
          required: false,
          rows: 3,
        },
      },
    ],
  },
  {
    id: 1789,
    title: "Language & Grammar Quiz",
    tags: ["language", "grammar", "words"],
    saved: true,
    published: true,
    createdAt: "2022-10-05T15:35:00Z",
    updatedAt: "2022-11-17T08:50:00Z",
    shape: [
      {
        id: "779",
        type: "TitleField",
        extraAttributes: {
          title: "Let's start quiz",
        },
      },
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
      {
        id: "2799",
        type: "NumberField",
        extraAttributes: {
          label: "Second Question - What is your age?",
          helperText: "Helper text",
          placeHolder: "0",
          required: false,
        },
      },
      {
        id: "7026",
        type: "SelectField",
        extraAttributes: {
          label: "Select correct answers",
          helperText: "Helper text",
          placeHolder: "Value here...",
          required: false,
          options: ["PI", "PI-PI", "PI-PI-PI"],
        },
      },
      {
        id: "1281",
        type: "TextAreaField",
        extraAttributes: {
          label: "Type your vision on ...",
          helperText: "Helper text",
          placeHolder: "Value here...",
          required: false,
          rows: 3,
        },
      },
    ],
  },
  {
    id: 1890,
    title: "Health & Fitness",
    tags: ["health", "fitness", "wellness"],
    saved: true,
    published: false,
    createdAt: "2023-06-12T10:20:00Z",
    updatedAt: "2023-07-09T19:10:00Z",
    shape: [
      {
        id: "779",
        type: "TitleField",
        extraAttributes: {
          title: "Let's start quiz",
        },
      },
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
      {
        id: "2799",
        type: "NumberField",
        extraAttributes: {
          label: "Second Question - What is your age?",
          helperText: "Helper text",
          placeHolder: "0",
          required: false,
        },
      },
      {
        id: "7026",
        type: "SelectField",
        extraAttributes: {
          label: "Select correct answers",
          helperText: "Helper text",
          placeHolder: "Value here...",
          required: false,
          options: ["PI", "PI-PI", "PI-PI-PI"],
        },
      },
      {
        id: "1281",
        type: "TextAreaField",
        extraAttributes: {
          label: "Type your vision on ...",
          helperText: "Helper text",
          placeHolder: "Value here...",
          required: false,
          rows: 3,
        },
      },
    ],
  },
  {
    id: 1901,
    title: "Mythology & Legends",
    tags: ["mythology", "legends", "stories"],
    saved: true,
    published: true,
    createdAt: "2024-03-25T18:55:00Z",
    updatedAt: "2024-04-20T22:15:00Z",
    shape: [
      {
        id: "779",
        type: "TitleField",
        extraAttributes: {
          title: "Let's start quiz",
        },
      },
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
      {
        id: "2799",
        type: "NumberField",
        extraAttributes: {
          label: "Second Question - What is your age?",
          helperText: "Helper text",
          placeHolder: "0",
          required: false,
        },
      },
      {
        id: "7026",
        type: "SelectField",
        extraAttributes: {
          label: "Select correct answers",
          helperText: "Helper text",
          placeHolder: "Value here...",
          required: false,
          options: ["PI", "PI-PI", "PI-PI-PI"],
        },
      },
      {
        id: "1281",
        type: "TextAreaField",
        extraAttributes: {
          label: "Type your vision on ...",
          helperText: "Helper text",
          placeHolder: "Value here...",
          required: false,
          rows: 3,
        },
      },
    ],
  },
  {
    id: 2012,
    title: "Business & Economics Quiz",
    tags: ["business", "economics", "finance"],
    saved: true,
    published: true,
    createdAt: "2023-04-14T07:40:00Z",
    updatedAt: "2023-05-19T15:30:00Z",
    shape: [
      {
        id: "779",
        type: "TitleField",
        extraAttributes: {
          title: "Let's start quiz",
        },
      },
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
      {
        id: "2799",
        type: "NumberField",
        extraAttributes: {
          label: "Second Question - What is your age?",
          helperText: "Helper text",
          placeHolder: "0",
          required: false,
        },
      },
      {
        id: "7026",
        type: "SelectField",
        extraAttributes: {
          label: "Select correct answers",
          helperText: "Helper text",
          placeHolder: "Value here...",
          required: false,
          options: ["PI", "PI-PI", "PI-PI-PI"],
        },
      },
      {
        id: "1281",
        type: "TextAreaField",
        extraAttributes: {
          label: "Type your vision on ...",
          helperText: "Helper text",
          placeHolder: "Value here...",
          required: false,
          rows: 3,
        },
      },
    ],
  },
];
