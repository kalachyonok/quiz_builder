"use client";

import { createContext, useState } from "react";
import { QUIZES, Quizes } from "@/constants/quizes";

type QuizContextType = {
  quizzes: Quizes[];
  addQuiz: (newQuiz: Quizes) => void;
  removeQuiz: (id: number) => void;
  publishQuiz: (id: number) => void;
};

export const QuizContext = createContext<QuizContextType>({
  quizzes: [],
  addQuiz: () => {},
  removeQuiz: () => {},
  publishQuiz: () => {},
});

export const QuizProvider = ({ children }: { children: React.ReactNode }) => {
  const [quizzes, setQuizzes] = useState<Quizes[]>(QUIZES);

  const addQuiz = (newQuiz: Quizes) => {
    setQuizzes((prevElements) => {
      const newElements = [...prevElements, newQuiz];

      return newElements;
    });
  };

  const removeQuiz = (id: number) => {
    setQuizzes((prevElements) =>
      prevElements.filter((element) => element.id !== id)
    );
  };

  const publishQuiz = (id: number) => {
    setQuizzes((prev) => {
      const newQuizzes = [...prev];
      const index = newQuizzes.findIndex((el) => el.id === id);
      newQuizzes[index].published = true;

      return newQuizzes;
    });
  };

  return (
    <QuizContext.Provider
      value={{
        quizzes,
        addQuiz,
        removeQuiz,
        publishQuiz,
      }}
    >
      {children}
    </QuizContext.Provider>
  );
};
