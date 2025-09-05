"use client";

import { Container } from "@/components/container";
import { QuizElements } from "@/components/QuizBuilder/QuizElements";
import { useParams } from "next/navigation";
import { QUIZES } from "@/constants/quizes";
import { Header } from "@/components/header";

export default function QuizPage() {
  const { id } = useParams();

  const quiz = QUIZES.find((quiz) => quiz.id === Number(id));

  return (
    <Container>
      <Header />
      <div className="bg-accent min-h-screen flex flex-col items-center justify-center p-4 bg-[url(/paper.svg)] overflow-y-auto">
        <div className="max-w-[620px] flex flex-col gap-4 bg-background h-full w-full rounded-2xl p-8 overflow-y-auto">
          {quiz?.shape.map((element) => {
            const QuizComponent = QuizElements[element.type].quizComponent;
            return <QuizComponent key={quiz?.id} elementInstance={element} />;
          })}
        </div>
      </div>
    </Container>
  );
}
