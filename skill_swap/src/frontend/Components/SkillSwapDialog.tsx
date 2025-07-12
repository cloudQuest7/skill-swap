"use client"

import * as React from "react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/frontend/Components/ui/dialog"
import { Button } from "@/frontend/Components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/frontend/Components/ui/select"
import { Textarea } from "@/frontend/Components/ui/textarea"
import { toast } from "sonner"

interface SkillSwapDialogProps {
  userSkills: string[]
  targetSkills: string[]
  onRequestSent: () => void
}

export function SkillSwapDialog({ userSkills, targetSkills, onRequestSent }: SkillSwapDialogProps) {
  const [open, setOpen] = React.useState(false)
  const [offeredSkill, setOfferedSkill] = React.useState("")
  const [wantedSkill, setWantedSkill] = React.useState("")
  const [message, setMessage] = React.useState("")
  const [isLoading, setIsLoading] = React.useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!offeredSkill || !wantedSkill) {
      toast.error("Please select both skills")
      return
    }

    setIsLoading(true)
    try {
      // Here you would make an API call to submit the swap request
      await new Promise(resolve => setTimeout(resolve, 1000)) // Simulated delay
      toast.success("Skill swap request sent successfully!")
      setOpen(false)
      onRequestSent()
    } catch (error) {
      toast.error("Failed to send request. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="bg-gray-700 text-gray-200 hover:bg-gray-600 transition-colors shadow">
          Request Skill Swap
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Request Skill Swap</DialogTitle>
          <DialogDescription>
            Choose the skills you want to exchange and send a message to start the swap.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <label className="text-sm font-medium">Skill You're Offering</label>
            <Select value={offeredSkill} onValueChange={setOfferedSkill}>
              <SelectTrigger>
                <SelectValue placeholder="Select a skill to offer" />
              </SelectTrigger>
              <SelectContent>
                {userSkills.map(skill => (
                  <SelectItem key={skill} value={skill}>
                    {skill}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          
          <div className="space-y-2">
            <label className="text-sm font-medium">Skill You Want</label>
            <Select value={wantedSkill} onValueChange={setWantedSkill}>
              <SelectTrigger>
                <SelectValue placeholder="Select a skill you want" />
              </SelectTrigger>
              <SelectContent>
                {targetSkills.map(skill => (
                  <SelectItem key={skill} value={skill}>
                    {skill}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          
          <div className="space-y-2">
            <label className="text-sm font-medium">Message</label>
            <Textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Write a brief message about your swap request..."
              className="h-24"
            />
          </div>
          
          <DialogFooter>
            <Button
              type="submit"
              disabled={isLoading || !offeredSkill || !wantedSkill}
              className="w-full"
            >
              {isLoading ? "Sending Request..." : "Send Request"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}
