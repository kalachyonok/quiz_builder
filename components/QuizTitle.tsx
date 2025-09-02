import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Form from "next/form";

export const QuizTitle = () => {
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
        <Button className="bg-emerald-600">Save</Button>
        <Button className="bg-amber-600">Publish</Button>
      </div>
    </div>
  );
};
