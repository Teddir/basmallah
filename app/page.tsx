"use client";
import { useModal } from "@/context/modal";
import { useEffect } from "react";

export default function Home() {
  const { showModal } = useModal();

  useEffect(() => showModal(""), []);
  return null;
}
