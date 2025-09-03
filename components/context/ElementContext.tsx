"use client";

import { createContext, useState } from "react";
import { QuizElementInstance } from "../QuizBuilder/QuizElements";

type ElementContextType = {
  elements: QuizElementInstance[];
  addElements: (index: number, element: QuizElementInstance) => void;
};

export const ElementContext = createContext<ElementContextType | null>(null);

export const ElementProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [elements, setElements] = useState<QuizElementInstance[]>([]);

  const addElements = (index: number, element: QuizElementInstance) => {
    setElements((prevElements) => {
      const newElements = [...prevElements];
      newElements.splice(index, 0, element);
      return newElements;
    });
  };

  return (
    <ElementContext.Provider value={{ elements, addElements }}>
      {children}
    </ElementContext.Provider>
  );
};
