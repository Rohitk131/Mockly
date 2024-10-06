import * as React from "react"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,

  CardFooter,

} from "@/components/ui/card"

import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"


export default function CardWithForm() {
  return (
    <Card className="w-[350px]">
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4 pt-7">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="framework">Select Device</Label>
              <Select>
                <SelectTrigger id="framework">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent position="popper">
                  <SelectItem value="next">iPhone 15 Pro</SelectItem>
                  <SelectItem value="sveltekit">iPhone SE</SelectItem>
                  <SelectItem value="astro">iPad Pro</SelectItem>
                  <SelectItem value="nuxt">iPhone 14 Pro</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline">Cancel</Button>
        <Button className="bg-blue-500">Save Mockup</Button>
      </CardFooter>
    </Card>
  )
}
