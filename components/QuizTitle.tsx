import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Form from "next/form";
import PreviewBtn from "./QuizBuilder/PreviewBtn";
import { useElementContext } from "@/app/hooks/useElementContext";
import { toast } from "sonner";
import { useTransition } from "react";

export const QuizTitle = () => {
  const { elements } = useElementContext();
  const [loading, startTransition] = useTransition();

  const saveQuizBtn = (id: number) => {
    startTransition(() => updateQuizContent(id, JSON.stringify(elements)));
  };

  const updateQuizContent = (id: number, jsonContent: string) => {
    try {
      const jsonElements = JSON.stringify(elements);
      // add to storage
      toast.success("Your quiz has been saved!");
    } catch {
      toast("Something went wrong", {
        description: "Please try again later.",
      });
    }
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
        <Input id="quiz-title" placeholder="Quiz title" className="peer" />
      </Form>

      <div className="flex gap-2">
        <PreviewBtn />
        <Button
          className="bg-emerald-600"
          // disabled={loading}
          onClick={() => console.log(elements)}
        >
          Save
        </Button>
        <Button className="bg-amber-600">Publish</Button>
      </div>
    </div>
  );
};
