"use client";

import { Container } from "@/components/container";
import { DataTable } from "@/components/DataTable/DataTable";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useQuizContext } from "../../hooks/useQuizContext";
import { useElementContext } from "../../hooks/useElementContext";
import { useEffect } from "react";

export default function HomePage() {
  const { quizzes } = useQuizContext();
  const { setSelectedElement } = useElementContext();

  useEffect(() => {
    setSelectedElement(null);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container>
      <div className="container mx-auto">
        <Button asChild className="bg-red-700 cursor-pointer mb-8">
          <Link href="/quiz/edit/new">Create new Quiz</Link>
        </Button>
        <DataTable data={quizzes} />
      </div>
    </Container>
  );
}
