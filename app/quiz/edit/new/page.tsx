"use client";
import { Container } from "@/components/QuizContainer";
import { QuizBuilder } from "@/components/QuizBuilder/QuizBuilder";
import { Header } from "@/components/QuizHeader";

export default function NewQuizPage() {
  return (
    <Container>
      <Header />
      <QuizBuilder />
    </Container>
  );
}
