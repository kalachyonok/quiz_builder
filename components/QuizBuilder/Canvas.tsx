"use client";

import { useElementContext } from "@/app/hooks/useElementContext";
import { cn } from "@/lib/utils";
import { useDndMonitor, useDroppable } from "@dnd-kit/core";
import {
  ElementsType,
  QuizElementInstance,
  QuizElements,
} from "./QuizElements";
import { idGenerator } from "@/utils/idGenerator";

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
      {droppable.isOver && (
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
  const DesignerComponent = QuizElements[element.type].designerComponent;

  return <DesignerComponent elementInstance={element} />;
}
