"use client";

import {
  createContext,
  Dispatch,
  SetStateAction,
  useState,
  useMemo,
  useCallback,
} from "react";
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
}: {
  children: React.ReactNode;
}) => {
  const [elements, setElements] = useState<QuizElementInstance[]>([]);
  const [selectedElement, setSelectedElement] =
    useState<QuizElementInstance | null>(null);

  const addElements = useCallback(
    (index: number, element: QuizElementInstance) => {
      setElements((prevElements) => {
        const newElements = [...prevElements];
        newElements.splice(index, 0, element);
        return newElements;
      });
    },
    []
  );

  const removeElement = useCallback((id: string) => {
    setElements((prevElements) =>
      prevElements.filter((element) => element.id !== id)
    );
  }, []);

  const updateElement = useCallback(
    (id: string, element: QuizElementInstance) => {
      setElements((prev) => {
        const newElements = [...prev];
        const index = newElements.findIndex((el) => el.id === id);
        newElements[index] = element;
        return newElements;
      });
    },
    []
  );

  const contextValue = useMemo(
    () => ({
      elements,
      setElements,
      addElements,
      removeElement,
      selectedElement,
      setSelectedElement,
      updateElement,
    }),
    [elements, selectedElement, addElements, removeElement, updateElement]
  );

  return (
    <ElementContext.Provider value={contextValue}>
      {children}
    </ElementContext.Provider>
  );
};
