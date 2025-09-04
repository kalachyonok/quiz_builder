"use client";

import { Active, DragOverlay, useDndMonitor } from "@dnd-kit/core";
import { useState } from "react";
import { SidebarBtnElementDragOverlay } from "./SidebarBtnElement";
import { ElementsType, QuizElements } from "./QuizElements";
import { useElementContext } from "@/app/hooks/useElementContext";

export const DragOverlayWrapper = () => {
  const { elements } = useElementContext();
  const [draggedItem, setDraggedItem] = useState<Active | null>(null);

  useDndMonitor({
    onDragStart: (event) => {
      setDraggedItem(event.active);
    },
    onDragCancel: () => {
      setDraggedItem(null);
    },
    onDragEnd: () => {
      setDraggedItem(null);
    },
  });

  if (!draggedItem) {
    return null;
  }

  let node = <div>No drag overlay</div>;
  const isSidebarBtnElement = draggedItem?.data.current?.isDesignerBtnElement;

  if (isSidebarBtnElement) {
    const type = draggedItem?.data.current?.type as ElementsType;
    node = <SidebarBtnElementDragOverlay quizElement={QuizElements[type]} />;
  }

  const isDesignerElement = draggedItem.data.current?.isDesignerElement;
  if (isDesignerElement) {
    const elementId = draggedItem.data?.current?.elementId;
    const element = elements.find((el) => el.id === elementId);
    if (!element) {
      node = <div>No element found</div>;
    } else {
      const DesignerElementComponent =
        QuizElements[element.type].designerComponent;

      node = (
        <div className="flex bg-accent border rounded-md h-[120px] w-full py-2 px-4 opacity-75">
          <DesignerElementComponent elementInstance={element} />
        </div>
      );
    }
  }

  return <DragOverlay>{node}</DragOverlay>;
};
