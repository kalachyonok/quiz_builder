import { QuizContext } from "@/components/context/QuizContext";
import { useContext } from "react";

export const useQuizContext = () => {
  const context = useContext(QuizContext);
  if (!context) {
    throw new Error("useQuizContext must be used within a QuizProvider");
  }
  return context;
};
