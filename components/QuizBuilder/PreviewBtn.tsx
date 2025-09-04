"use client";
import React from "react";

import { MdPreview } from "react-icons/md";
import { useElementContext } from "@/app/hooks/useElementContext";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { QuizElements } from "../QuizBuilder/QuizElements";
import { Button } from "../ui/button";

function PreviewBtn() {
  const { elements } = useElementContext();

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant={"outline"} className="gap-2">
          <MdPreview className="h-6 w-6" />
          Preview
        </Button>
      </DialogTrigger>
      <DialogContent className="w-screen h-screen max-h-screen max-w-full flex flex-col flex-grow p-0 gap-0">
        <DialogHeader className="px-4 py-2 border-b">
          <DialogTitle className="text-lg font-bold text-muted-foreground">
            Quiz preview
          </DialogTitle>
          <DialogDescription className="text-sm text-muted-foreground">
            This is how your quiz will look like
          </DialogDescription>
        </DialogHeader>
        <div className="bg-accent flex flex-col flex-grow items-center justify-center p-4 bg-[url(/paper.svg)] overflow-y-auto">
          <div className="max-w-[620px] flex flex-col gap-4 flex-grow bg-background h-full w-full rounded-2xl p-8 overflow-y-auto">
            {elements.map((element) => {
              const QuizComponent = QuizElements[element.type].quizComponent;
              return (
                <QuizComponent key={element.id} elementInstance={element} />
              );
            })}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default PreviewBtn;
