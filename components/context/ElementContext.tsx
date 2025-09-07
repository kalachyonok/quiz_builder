"use client";

import { createContext, Dispatch, SetStateAction, useState } from "react";
import { QuizElementInstance } from "../QuizBuilder/QuizElements";

type ElementContextType = {
  elements: QuizElementInstance[];
  setElements: Dispatch<SetStateAction<QuizElementInstance[]>>;
  addElements: (index: number, element: QuizElementInstance) => void;
  removeElement: (id: string) => void;
  selectedElement: QuizElementInstance | null;

  setSelectedElement: Dispatch<SetStateAction<QuizElementInstance | null>>;
  updateElement: (id: string, element: QuizElementInstance) => void;
};

export const ElementContext = createContext<ElementContextType | null>(null);

export const ElementProvider = ({
  children,
  initialElements,
}: {
  children: React.ReactNode;
  initialElements?: QuizElementInstance[];
}) => {
  const [elements, setElements] = useState<QuizElementInstance[]>(
    initialElements || []
  );
  const [selectedElement, setSelectedElement] =
    useState<QuizElementInstance | null>(null);

  const addElements = (index: number, element: QuizElementInstance) => {
    setElements((prevElements) => {
      const newElements = [...prevElements];
      newElements.splice(index, 0, element);
      return newElements;
    });
  };

  const removeElement = (id: string) => {
    setElements((prevElements) =>
      prevElements.filter((element) => element.id !== id)
    );
  };

  const updateElement = (id: string, element: QuizElementInstance) => {
    setElements((prev) => {
      const newElements = [...prev];
      const index = newElements.findIndex((el) => el.id === id);
      newElements[index] = element;
      return newElements;
    });
  };

  return (
    <ElementContext.Provider
      value={{
        elements,
        setElements,
        addElements,
        removeElement,
        selectedElement,
        setSelectedElement,
        updateElement,
      }}
    >
      {children}
    </ElementContext.Provider>
  );
};
