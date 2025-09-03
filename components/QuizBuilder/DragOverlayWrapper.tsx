"use client";

import { Active, DragOverlay, useDndMonitor } from "@dnd-kit/core";
import { useState } from "react";
import { SidebarBtnElementDragOverlay } from "./SidebarBtnElement";
import { ElementsType, QuizElements } from "./QuizElements";

export const DragOverlayWrapper = () => {
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

  return <DragOverlay>{node}</DragOverlay>;
};
