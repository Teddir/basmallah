'use client';

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { useQuery } from "@tanstack/react-query";
import { RocketIcon } from "lucide-react";
import { useEffect, useState } from "react";

interface Ayat {
  id: string,
  sura: string,
  aya: string,
  arabic_text: string,
  translation: string,
  footnotes: string
}

export default function AlertMarkAya() {
  const { data: markAya } = useQuery({
    queryKey: ["mark_aya"],
    queryFn: () => {
      const oldMarkAya = JSON.parse(
        localStorage.getItem('mark_aya') ?? '{}'
      )
      if (!oldMarkAya) return {}
      return oldMarkAya
    },
  });

  return (
    <Alert hidden={!markAya?.id}>
      <RocketIcon className="h-4 w-4" />
      <AlertTitle>Assalamualaikum, sahabat!</AlertTitle>
      <AlertDescription>
        Do you want to continue the last aya you read? <a href={`/${markAya?.sura}#${markAya?.aya}`}>click here</a>
      </AlertDescription>
    </Alert>
  )
}