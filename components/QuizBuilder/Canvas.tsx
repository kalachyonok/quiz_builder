"use client";

import { useElementContext } from "@/app/hooks/useElementContext";
import { cn } from "@/lib/utils";
import { useDndMonitor, useDraggable, useDroppable } from "@dnd-kit/core";
import {
  ElementsType,
  QuizElementInstance,
  QuizElements,
} from "./QuizElements";
import { idGenerator } from "@/utils/idGenerator";
import { useState } from "react";
import { Button } from "../ui/button";
import { BiSolidTrash } from "react-icons/bi";

export const Canvas = () => {
  const { elements, addElements } = useElementContext();
  const droppable = useDroppable({
    id: "drop-area",
    data: {
      isdropArea: true,
    },
  });

  useDndMonitor({
    onDragEnd: (event) => {
      const { over, active } = event;
      if (!active || !over) return;

      const isDesignerBtnElement = active.data?.current?.isDesignerBtnElement;

      if (isDesignerBtnElement) {
        const type = active.data?.current?.type;
        const newElement = QuizElements[type as ElementsType].construct(
          idGenerator()
        );

        addElements(0, newElement);
      }
    },
  });

  return (
    <div
      ref={droppable.setNodeRef}
      className={cn(
        "bg-background max-w-[920px] min-h-[750px] w-full border border-gray-500 rounded-xl flex flex-col items-center justify-start overflow-y-auto p-6",
        droppable.isOver && "bg-green-100 border-green-500"
      )}
    >
      <p className="text-3xl text-muted-foreground items-center font-bold">
        Drop here
      </p>
      {droppable.isOver && elements.length === 0 && (
        <div className="p-4 w-full">
          <div className="h-32 w-full border border-dashed border-gray-400 rounded-lg"></div>
        </div>
      )}
      {elements.length > 0 && (
        <div className="flex flex-col w-full gap-2 p-4">
          {elements.map((el) => (
            <DesignerElementWrapper key={el.id} element={el} />
          ))}
        </div>
      )}
    </div>
  );
};

function DesignerElementWrapper({ element }: { element: QuizElementInstance }) {
  const [mouseIsOver, setMouseIsOver] = useState<boolean>(false);
  const { removeElement } = useElementContext();

  const topHalf = useDroppable({
    id: element.id + "-top",
    data: {
      type: element.type,
      elementId: element.id,
      isTopHalfDesignerElement: true,
    },
  });

  const bottomHalf = useDroppable({
    id: element.id + "-bottom",
    data: {
      type: element.type,
      elementId: element.id,
      isBottomHalfDesignerElement: true,
    },
  });

  const draggable = useDraggable({
    id: element.id + "-drag-handler",
    data: {
      type: element.type,
      elementId: element.id,
      isDesignerElement: true,
    },
  });

  if (draggable.isDragging) return null;

  const DesignerComponent = QuizElements[element.type].designerComponent;

  return (
    <div className="flex">
      <div
        className="relative h-[120px] flex flex-col text-foreground hover:cursor-pointer rounded-md ring-1 ring-accent ring-inset w-full"
        ref={draggable.setNodeRef}
        {...draggable.listeners}
        {...draggable.attributes}
        onMouseEnter={() => {
          setMouseIsOver(true);
        }}
        onMouseLeave={() => {
          setMouseIsOver(false);
        }}
      >
        <div
          ref={topHalf.setNodeRef}
          className="absolute w-full h-1/2 rounded-t-md"
        />
        <div
          ref={bottomHalf.setNodeRef}
          className="absolute w-full bottom-0 h-1/2 rounded-b-md"
        />
        {mouseIsOver && (
          <div className="absolute flex items-center justify-center inset-0 bg-black opacity-50 rounded-md animate-pulse pointer-events-none">
            <p className="text-white text-center">
              Click for properties or drag to move
            </p>
          </div>
        )}
        <div
          className={cn(
            "flex w-full h-[120px] items-center rounded-md bg-accent/40 px-4 py-2",
            topHalf.isOver && "border-t-4 border-green-600",
            bottomHalf.isOver && "border-b-4 border-green-600"
          )}
        >
          <DesignerComponent elementInstance={element} />
        </div>
      </div>
      <Button
        draggable={false}
        variant="outline"
        className="flex justify-center h-full border rounded-md rounded-l-none bg-red-200 hover:bg-red-600 hover:border-red-600"
        onClick={() => {
          removeElement(element.id);
        }}
      >
        <BiSolidTrash className="text-white" />
      </Button>
    </div>
  );
}
