"use client";
import { Container } from "@/components/container";
import { QuizBuilder } from "@/components/QuizBuilder/QuizBuilder";
import { useParams } from "next/navigation";
import { useQuizContext } from "@/hooks/useQuizContext";
import { Header } from "@/components/header";

export default function IndividualQuizPage() {
  const { id } = useParams();
  const { quizzes } = useQuizContext();
  const quiz = quizzes.find((quiz) => quiz.id === Number(id));
  return (
    <Container>
      <Header quizId={Number(id)} />
      <div className="container mx-auto">Edit existing quiz</div>

      <QuizBuilder buildElements={quiz?.shape} />
    </Container>
  );
}
