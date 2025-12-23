"use client"

import LoadingPage from "@/components/Home"
import CommandGameMenu from "@/components/CommandGameMenu"
import { useRouter } from "next/navigation"

export default function Home() {
  const router = useRouter()

  const handleSelect = (id: string) => {
    console.log(`Selected command: ${id}`)
    if (id.startsWith("/")) {
      router.push(id)
    }
  }

  return (
    <main>
      <LoadingPage />
      <div className="fixed bottom-4 right-4 z-50">
        <CommandGameMenu onSelect={handleSelect} />
      </div>
    </main>
  )
}
