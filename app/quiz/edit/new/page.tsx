"use client";
import { QuizContainer } from "@/components/QuizContainer";
import { QuizBuilder } from "@/components/QuizBuilder/QuizBuilder";
import { QuizHeader } from "@/components/QuizHeader";

export default function NewQuizPage() {
  return (
    <QuizContainer>
      <QuizHeader />
      <QuizBuilder />
    </QuizContainer>
  );
}
