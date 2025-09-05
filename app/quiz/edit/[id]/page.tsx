"use client";
import { Container } from "@/components/container";
import { QuizBuilder } from "@/components/QuizBuilder/QuizBuilder";
import { useParams } from "next/navigation";
import { QUIZES } from "@/constants/quizes";

export default function IndividualQuizPage() {
  const { id } = useParams();

  const quiz = QUIZES.find((quiz) => quiz.id === Number(id));
  return (
    <Container>
      <div className="container mx-auto">Edit existing quiz</div>
      <QuizBuilder buildElements={quiz?.shape} />
    </Container>
  );
}
