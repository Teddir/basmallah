'use client';

import { useRouter } from "next/navigation";

export default function Index(){
  const router = useRouter()
  return router.push('/ngaji')
}