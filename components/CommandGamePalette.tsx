"use client"

import { useState, useRef, useEffect } from "react"
import { motion } from "framer-motion"
import { Command, CommandInput, CommandList, CommandEmpty } from "@/components/ui/command"
import { CommandGameSection } from "./CommandGameSection"
import { CommandGameItem } from "./CommandGameItem"
import {
  Home,
  Info,
  CreditCard,
  FileText,
  Zap,
  Settings,
  BarChart3,
  UserPlus,
} from "lucide-react"

interface CommandGamePaletteProps {
  onClose: () => void
  onSelect: (id: string) => void
}

const SMOOTH_SPRING = { type: "spring", stiffness: 400, damping: 35, mass: 0.8 } as const

const commands = [
  {
    id: "/",
    label: "Go to Home",
    icon: Home,
    shortcut: ["⌘", "H"],
  },
  {
    id: "/about",
    label: "About GyraLabs",
    icon: Info,
    shortcut: ["⌘", "A"],
  },
  {
    id: "/pricing",
    label: "View Pricing",
    icon: CreditCard,
    shortcut: ["⌘", "P"],
  },
  {
    id: "/docs",
    label: "Read Documentation",
    icon: FileText,
    shortcut: ["⌘", "D"],
  },
  {
    id: "/signup",
    label: "Start for Free",
    icon: Zap,
    shortcut: ["⌘", "S"],
  },
  {
    id: "settings",
    label: "Settings",
    icon: Settings,
    shortcut: ["⌘", ","],
  },
  {
    id: "analytics",
    label: "Analytics",
    icon: BarChart3,
    shortcut: ["⌘", "Y"],
  },
  {
    id: "invite",
    label: "Invite Team",
    icon: UserPlus,
    shortcut: ["⌘", "I"],
  },
]

export function CommandGamePalette({ onClose, onSelect }: CommandGamePaletteProps) {
  const [search, setSearch] = useState("")
  const inputRef = useRef<HTMLInputElement>(null)
  const commandRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    inputRef.current?.focus()
  }, [])

  const handleMouseLeave = () => {
    // Clear the cmdk selection by setting value to empty
    const commandElement = commandRef.current?.querySelector("[cmdk-root]") as any
    if (commandElement && commandElement.__cmdk_state) {
      commandElement.__cmdk_state.value = ""
    }

    // Also try to blur any focused elements
    const activeElement = document.activeElement as HTMLElement
    if (activeElement && activeElement.blur) {
      activeElement.blur()
    }
  }

  return (
    <>
      <div className="fixed inset-0 z-40" onClick={onClose} />

      <motion.div
        layoutId="commandMenu"
        className="absolute top-0 left-1/2 z-50 w-[calc(100vw-2rem)] sm:w-[640px] -translate-x-1/2 mx-4 sm:mx-0"
        transition={{ ...SMOOTH_SPRING, duration: 0.15 }}
        onMouseLeave={handleMouseLeave}
      >
        <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden max-h-[600px] flex flex-col relative">
          <div className="absolute top-0 left-0 right-0 h-8 bg-gradient-to-b from-white to-transparent pointer-events-none rounded-t-3xl z-30" />

          <Command ref={commandRef} className="rounded-3xl border-0 flex-1 flex flex-col">
            <div className="px-4 py-3 border-t border-gray-100 flex-shrink-0">
              <CommandInput
                ref={inputRef}
                placeholder="search commands…"
                value={search}
                onValueChange={setSearch}
                className="w-full bg-transparent border-0 outline-none text-sm placeholder:text-gray-400 focus:ring-0"
              />
            </div>

            <CommandList className="overflow-y-auto flex-1 relative">
              <CommandEmpty className="py-6 text-center text-sm text-gray-500">no results</CommandEmpty>

              <CommandGameSection title="Suggestions">
                {commands.map((command, index) => (
                  <CommandGameItem
                    key={command.id}
                    icon={command.icon}
                    label={command.label}
                    shortcut={command.shortcut}
                    onSelect={() => onSelect(command.id)}
                  />
                ))}
              </CommandGameSection>
            </CommandList>
          </Command>

          <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-white to-transparent pointer-events-none rounded-b-3xl z-30" />
        </div>
      </motion.div>
    </>
  )
}
