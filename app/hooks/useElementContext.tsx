import { ElementContext } from "@/components/context/ElementContext";
import { useContext } from "react";

export const useElementContext = () => {
  const context = useContext(ElementContext);
  if (!context) {
    throw new Error("useElementContext must be used within an ElementProvider");
  }
  return context;
};
