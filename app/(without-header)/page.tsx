"use client";

import { Container } from "@/components/container";
import { columns } from "@/components/DataTable/column";
import { DataTable } from "@/components/DataTable/DataTable";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useQuizContext } from "../hooks/useQuizContext";
import { useElementContext } from "../hooks/useElementContext";

export default function HomePage() {
  const { quizzes } = useQuizContext();
  const { setSelectedElement } = useElementContext();
  return (
    <Container>
      <div className="container mx-auto">
        <Button
          asChild
          className="bg-red-700 cursor-pointer mb-8"
          onClick={() => setSelectedElement(null)}
        >
          <Link href="/quiz/edit/new">Create new Quiz</Link>
        </Button>
        <DataTable columns={columns} data={quizzes} />
      </div>
    </Container>
  );
}
