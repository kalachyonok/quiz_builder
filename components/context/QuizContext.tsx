"use client";

import { createContext, useEffect, useState } from "react";
import { Quizzes, QUIZZES } from "@/constants/quizes";
import {
  getQuizzes,
  publishQuizById,
  removeQuizById,
  seedQuizzesIfNeeded,
  upsertQuiz,
} from "@/storage/quizzes";

type QuizContextType = {
  quizzes: Quizzes[];
  addQuiz: (newQuiz: Quizzes) => void;
  updateQuiz: (id: number, newQuiz: Quizzes) => void;
  removeQuiz: (id: number) => void;
  publishQuiz: (id: number) => void;
};

export const QuizContext = createContext<QuizContextType>({
  quizzes: [],
  addQuiz: () => {},
  updateQuiz: () => {},
  removeQuiz: () => {},
  publishQuiz: () => {},
});

export const QuizProvider = ({ children }: { children: React.ReactNode }) => {
  const [quizzes, setQuizzesState] = useState<Quizzes[]>([]);

  useEffect(() => {
    seedQuizzesIfNeeded(QUIZZES);
    const loaded = getQuizzes();
    setQuizzesState(loaded.length ? loaded : QUIZZES);
  }, []);

  const addQuiz = (newQuiz: Quizzes) => {
    setQuizzesState((prev) => {
      const updated = [...prev, newQuiz];
      upsertQuiz(newQuiz, QUIZZES);
      return updated;
    });
  };

  const updateQuiz = (id: number, newQuiz: Quizzes) => {
    setQuizzesState((prev) => {
      const updated = prev.map((q) => (q.id === id ? newQuiz : q));
      upsertQuiz(newQuiz, QUIZZES);
      return updated;
    });
  };

  const removeQuiz = (id: number) => {
    setQuizzesState((prev) => {
      const updated = prev.filter((element) => element.id !== id);
      removeQuizById(id, QUIZZES);
      return updated;
    });
  };

  const publishQuiz = (id: number) => {
    setQuizzesState((prev) => {
      const updated = prev.map((q) =>
        q.id === id
          ? { ...q, published: true, updatedAt: new Date().toISOString() }
          : q
      );
      publishQuizById(id, QUIZZES);
      return updated;
    });
  };

  return (
    <QuizContext.Provider
      value={{
        quizzes,
        updateQuiz,
        addQuiz,
        removeQuiz,
        publishQuiz,
      }}
    >
      {children}
    </QuizContext.Provider>
  );
};
