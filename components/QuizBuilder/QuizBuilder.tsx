"use client";

import { DndContext } from "@dnd-kit/core";
import { Canvas } from "./Canvas";
import { LeftSidebar } from "./LeftSidebar";
import { DragOverlayWrapper } from "./DragOverlayWrapper";

export const QuizBuilder = () => {
  return (
    <DndContext>
      <main className="flex flex-col w-full mt-24">
        <h2>Buid your quiz</h2>

        <div className="flex w-full min-h-screen p-10 justify-around bg-accent bg-[url(/paper.svg)]">
          <LeftSidebar />
          <Canvas />
        </div>
      </main>
      <DragOverlayWrapper />
    </DndContext>
  );
};
