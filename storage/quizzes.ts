"use client";

import { Quizzes } from "@/constants/quizes";
import { toast } from "sonner";

const STORAGE_KEY = "quizbuilder.quizzes";
const INIT_KEY = "quizbuilder.initialized";

function safeParse(json: string | null): Quizzes[] {
  if (!json) return [];
  try {
    const parsed = JSON.parse(json);
    if (Array.isArray(parsed)) return parsed as Quizzes[];
    return [];
  } catch {
    toast.error("Stored quizzes are corrupted. Resetting.");
    return [];
  }
}

function safeStringify(value: unknown): string | null {
  try {
    return JSON.stringify(value);
  } catch {
    toast.error("Failed to serialize quizzes.");
    return null;
  }
}

export function getQuizzes(): Quizzes[] {
  if (typeof window === "undefined") return [];
  const raw = window.localStorage.getItem(STORAGE_KEY);
  return safeParse(raw);
}

export function setQuizzes(quizzes: Quizzes[]): void {
  if (typeof window === "undefined") return;
  const json = safeStringify(quizzes);
  if (!json) return;
  try {
    window.localStorage.setItem(STORAGE_KEY, json);
  } catch {
    toast.error("Failed to save quizzes");
  }
}

export function seedQuizzesIfNeeded(seed: Quizzes[]): void {
  if (typeof window === "undefined") return;
  try {
    const initialized = window.localStorage.getItem(INIT_KEY);
    if (initialized) return;
    const existing = getQuizzes();
    if (existing.length === 0) {
      setQuizzes(seed);
    }
    window.localStorage.setItem(INIT_KEY, "true");
  } catch {
    // ignore
  }
}

export function upsertQuiz(newQuiz: Quizzes): void {
  const quizzes = getQuizzes();
  const index = quizzes.findIndex((q) => q.id === newQuiz.id);
  if (index === -1) quizzes.push(newQuiz);
  else quizzes[index] = newQuiz;
  setQuizzes(quizzes);
}

export function publishQuizById(id: number): void {
  const quizzes = getQuizzes();
  const index = quizzes.findIndex((q) => q.id === id);
  if (index === -1) return;
  quizzes[index].published = true;
  quizzes[index].updatedAt = new Date().toISOString();
  setQuizzes(quizzes);
}

export function removeQuizById(id: number): void {
  const quizzes = getQuizzes().filter((q) => q.id !== id);
  setQuizzes(quizzes);
}
