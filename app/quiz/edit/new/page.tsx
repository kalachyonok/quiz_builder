"use client";
import { Container } from "@/components/container";
import { QuizBuilder } from "@/components/QuizBuilder/QuizBuilder";
import { Header } from "@/components/header";
import { ElementProvider } from "@/components/context/ElementContext";

export default function NewQuizPage() {
  return (
    <ElementProvider initialElements={[]}>
      <Container>
        <Header />
        <QuizBuilder />
      </Container>
    </ElementProvider>
  );
}
