"use client";

import { useDraggable } from "@dnd-kit/core";
import { Button } from "../ui/button";
import { QuizElement } from "./QuizElements";
import { cn } from "@/lib/utils";

export const SidebarBtnElement = ({
  quizElement,
}: {
  quizElement: QuizElement;
}) => {
  const { icon: Icon, label } = quizElement.quizBtnElement;

  const draggable = useDraggable({
    id: `designer-btn-${quizElement.type}`,
    data: {
      type: quizElement.type,
      isDesignerBtnElement: true,
    },
  });

  return (
    <Button
      ref={draggable.setNodeRef}
      className={cn(
        "flex flex-col gap-2 h-[120px] w-[120px] cursor-grab",
        draggable.isDragging && "ring-2 ring-primary"
      )}
      {...draggable.listeners}
      {...draggable.attributes}
    >
      <Icon className="h-8 w-8 cursor-grab" />
      <p className="text-xs">{label}</p>
    </Button>
  );
};

export const SidebarBtnElementDragOverlay = ({
  quizElement,
}: {
  quizElement: QuizElement;
}) => {
  const { icon: Icon, label } = quizElement.quizBtnElement;

  return (
    <Button className="flex flex-col gap-2 h-[120px] w-[120px] cursor-grab">
      <Icon className="h-8 w-8 cursor-grab" />
      <p className="text-xs">{label}</p>
    </Button>
  );
};
