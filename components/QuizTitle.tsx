"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Form from "next/form";
import PreviewBtn from "./QuizBuilder/PreviewBtn";
import { useElementContext } from "@/app/hooks/useElementContext";
import { useState, useEffect } from "react";
import { useQuizContext } from "@/app/hooks/useQuizContext";
import { toast } from "sonner";

export const QuizTitle = ({
  quizId,
  viewMode,
}: {
  quizId?: number;
  viewMode?: boolean;
}) => {
  const { elements, setElements } = useElementContext();
  const { addQuiz, publishQuiz, quizzes } = useQuizContext();
  const [currentQuizId, setCurrentQuizId] = useState<number | null>(
    quizId || null
  );

  const existingQuiz = quizId ? quizzes.find((q) => q.id === quizId) : null;
  const [title, setTitle] = useState<string>(existingQuiz?.title || "");

  useEffect(() => {
    if (quizId && existingQuiz) {
      setTitle(existingQuiz.title);
      setCurrentQuizId(quizId);
      setElements(existingQuiz.shape);
    }
  }, [quizId, existingQuiz, setElements]);

  const onSaveHandler = () => {
    if (title.trim().length === 0) {
      toast.error("Quiz is not saved - please enter a title");
      return;
    } else {
      if (currentQuizId) {
        // Update existing quiz
        const updatedQuiz = {
          ...existingQuiz!,
          id: currentQuizId,
          title: title,
          updatedAt: new Date().toISOString(),
          shape: elements,
        };
        addQuiz(updatedQuiz);
        toast.success("Quiz is updated!");
      } else {
        // Create new quiz
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
        toast.success("Quiz is saved! You can now publish it.");
      }
    }
  };

  const onPublishHandler = () => {
    if (!currentQuizId) {
      toast.error("No quiz to publish");
      return;
    }
    publishQuiz(currentQuizId);

    setElements([]);
    setCurrentQuizId(null);
    setTitle("");
    toast.success("Quiz is published!");
  };

  if (viewMode) {
    return (
      <div className="flex justify-center items-center">
        <h1 className="text-2xl font-bold text-gray-800">
          {existingQuiz?.title || "Quiz Title"}
        </h1>
      </div>
    );
  }

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
          onClick={onPublishHandler}
        >
          Publish
        </Button>
      </div>
    </div>
  );
};
