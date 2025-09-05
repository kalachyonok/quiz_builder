"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Form from "next/form";
import PreviewBtn from "./QuizBuilder/PreviewBtn";
import { useElementContext } from "@/app/hooks/useElementContext";
import { useState } from "react";
import { useQuizContext } from "@/app/hooks/useQuizContext";

export const QuizTitle = () => {
  const { elements, setElements } = useElementContext();
  const { addQuiz, publishQuiz } = useQuizContext();
  const [currentQuizId, setCurrentQuizId] = useState<number | null>(null);
  const [title, setTitle] = useState<string>("");

  const onSaveHandler = () => {
    const currentId = Date.now();
    const newQuiz = {
      id: currentId,
      title: title,
      tags: ["-"],
      saved: true,
      published: false,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      shape: elements,
    };
    addQuiz(newQuiz);
    setCurrentQuizId(currentId);
  };

  return (
    <div className="flex justify-end items-end gap-10">
      <Form action="/">
        <Label
          htmlFor="quiz-title"
          className="mb-1 peer-placeholder-shown:sr-only"
        >
          Quiz title
        </Label>
        <Input
          id="quiz-title"
          placeholder="Quiz title"
          className="peer"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </Form>

      <div className="flex gap-2">
        <PreviewBtn />
        <Button className="bg-emerald-600" onClick={onSaveHandler}>
          Save
        </Button>
        <Button
          className="bg-amber-600"
          disabled={elements.length === 0 && title.trim().length === 0}
          onClick={() => {
            publishQuiz(currentQuizId!);
            setElements([]);
          }}
        >
          Publish
        </Button>
      </div>
    </div>
  );
};
