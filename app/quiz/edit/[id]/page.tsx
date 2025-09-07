"use client";
import { Container } from "@/components/container";
import { QuizBuilder } from "@/components/QuizBuilder/QuizBuilder";
import { useParams } from "next/navigation";
import { useQuizContext } from "@/app/hooks/useQuizContext";
import { Header } from "@/components/header";
import { ElementProvider } from "@/components/context/ElementContext";

export default function IndividualQuizPage() {
  const { id } = useParams();
  const { quizzes } = useQuizContext();
  const quiz = quizzes.find((quiz) => quiz.id === Number(id));
  return (
    <Container>
      <Header quizId={Number(id)} />
      <div className="container mx-auto">Edit existing quiz</div>
      <ElementProvider initialElements={quiz?.shape}>
        <QuizBuilder buildElements={quiz?.shape} />
      </ElementProvider>
    </Container>
  );
}
