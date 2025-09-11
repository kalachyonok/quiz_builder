"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Form from "next/form";
import PreviewQuiz from "./QuizBuilder/PreviewQuiz";
import { useElementContext } from "@/hooks/useElementContext";
import { useState, useEffect } from "react";
import { useQuizContext } from "@/hooks/useQuizContext";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { QuizIdentificationProps } from "@/types/common";

type QuizTitleProps = QuizIdentificationProps;

export const QuizTitle = ({ quizId, viewMode }: QuizTitleProps) => {
  const { elements, setElements } = useElementContext();
  const { addQuiz, updateQuiz, publishQuiz, quizzes } = useQuizContext();
  const [currentQuizId, setCurrentQuizId] = useState<number | null>(
    quizId || null
  );
  const [isPublished, setIsPublished] = useState<boolean>(false);
  const router = useRouter();

  const existingQuiz = quizId ? quizzes.find((q) => q.id === quizId) : null;
  const [title, setTitle] = useState<string>(existingQuiz?.title || "");

  useEffect(() => {
    if (quizId && existingQuiz) {
      setTitle(existingQuiz.title);
      setCurrentQuizId(quizId);
      setElements(existingQuiz.shape);
      setIsPublished(existingQuiz.published);
    }
  }, [quizId, existingQuiz, setElements]);

  // Reset state when switching between new quiz creation and editing
  useEffect(() => {
    if (!quizId) {
      setIsPublished(false);
      setCurrentQuizId(null);
      setTitle("");
      setElements([]);
    }
  }, [quizId, setElements]);

  const onSaveHandler = (): void => {
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
        updateQuiz(currentQuizId, updatedQuiz);
        toast.success("Quiz is updated!");
      } else {
        // Create new quiz
        const currentId = Date.now();
        const newQuiz = {
          id: currentId,
          title: title,
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

  const onPublishHandler = (): void => {
    if (!currentQuizId) {
      toast.error("No quiz to publish");
      return;
    }

    if (isPublished || existingQuiz?.published) {
      // Unpublish the quiz
      const updatedQuiz = {
        ...existingQuiz!,
        id: currentQuizId,
        title: title,
        published: false,
        updatedAt: new Date().toISOString(),
        shape: elements,
      };
      updateQuiz(currentQuizId, updatedQuiz);
      setIsPublished(false);
      toast.success("Quiz is unpublished!");
    } else {
      // Publish the quiz
      publishQuiz(currentQuizId);
      setIsPublished(true);
      toast.success("Quiz is published!");
      router.push("/");
    }
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
        <PreviewQuiz />
        <Button className="bg-emerald-600" onClick={onSaveHandler}>
          Save
        </Button>
        <Button
          className={
            isPublished || existingQuiz?.published ? "" : "bg-amber-600"
          }
          variant={
            isPublished || existingQuiz?.published ? "destructive" : "default"
          }
          disabled={
            !currentQuizId ||
            (elements.length === 0 && title.trim().length === 0)
          }
          onClick={onPublishHandler}
        >
          {isPublished || existingQuiz?.published ? "Unpublish" : "Publish"}
        </Button>
      </div>
    </div>
  );
};
