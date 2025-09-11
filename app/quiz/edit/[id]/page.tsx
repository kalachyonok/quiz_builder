"use client";

import { Container } from "@/components/QuizContainer";
import { QuizBuilder } from "@/components/QuizBuilder/QuizBuilder";
import { useParams } from "next/navigation";
import { useQuizContext } from "@/hooks/useQuizContext";
import { useElementContext } from "@/hooks/useElementContext";
import { Header } from "@/components/QuizHeader";
import { useEffect } from "react";

export default function IndividualQuizPage() {
  const { id } = useParams();
  const { quizzes } = useQuizContext();
  const { setSelectedElement } = useElementContext();

  useEffect(() => {
    setSelectedElement(null);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const quiz = quizzes.find((quiz) => quiz.id === Number(id));
  return (
    <Container>
      <Header quizId={Number(id)} />
      <div className="container mx-auto">Edit existing quiz</div>

      <QuizBuilder buildElements={quiz?.shape} />
    </Container>
  );
}
