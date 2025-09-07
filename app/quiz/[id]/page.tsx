"use client";

import { Container } from "@/components/container";
import { QuizElements } from "@/components/QuizBuilder/QuizElements";
import { useParams } from "next/navigation";
import { Header } from "@/components/header";
import { useQuizContext } from "@/app/hooks/useQuizContext";

export default function QuizPage() {
  const { id } = useParams();
  const { quizzes } = useQuizContext();

  const quiz = quizzes.find((quiz) => quiz.id === Number(id));

  return (
    <Container>
      <Header />
      <div className="bg-accent min-h-screen flex flex-col items-center justify-center p-4 bg-[url(/paper.svg)] overflow-y-auto">
        <div className="max-w-[620px] flex flex-col gap-4 bg-background h-full w-full rounded-2xl p-8 overflow-y-auto">
          {!quiz && <p className="text-center">Quiz not found.</p>}
          {quiz && !quiz.published && (
            <p className="text-center">Not published yet.</p>
          )}
          {quiz?.published &&
            quiz.shape.map((element) => {
              const QuizComponent = QuizElements[element.type].quizComponent;
              return <QuizComponent key={quiz?.id} elementInstance={element} />;
            })}
        </div>
      </div>
    </Container>
  );
}
