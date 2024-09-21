import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export default function ProductForm(){
    return <>
    <div className="flex flex-col gap-2 mt-4 px-5">
      <div className="grid w-full items-center gap-1.5">
        <Label htmlFor="title">Title</Label>
        <Input type="text" id="title" placeholder="Black Oversized Tshirt" />
      </div>
      <div className="grid w-full items-center gap-1.5">
        <Label htmlFor="price">Price</Label>
        <Input type="number" id="price" placeholder="299" />
      </div>
      <div className="grid w-full items-center gap-1.5">
        <Label htmlFor="description">Description</Label>
        <Input type="text" id="description" placeholder="description..." />
      </div>
      <div className="grid w-full items-center gap-1.5">
        <Label htmlFor="fabric">Fabric</Label>
        <Input type="text" id="fabric" placeholder="Cotton" />
      </div>
      <div className="grid w-full items-center gap-1.5">
        <Label htmlFor="color">Color</Label>
        <Input type="text" id="color" placeholder="Black" />
      </div>
      <div className="grid w-full items-center gap-1.5">
        <Label>Group</Label>
        <Select>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Select a group" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Select a group</SelectLabel>
              <SelectItem value="male">Male</SelectItem>
              <SelectItem value="female">Female</SelectItem>
              <SelectItem value="kids">Kids</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
      <div className="grid w-full items-center gap-1.5">
        <Label>Category</Label>
        <Select>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Select a category" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Select a category</SelectLabel>
              <SelectItem value="oversized">Oversized</SelectItem>
              <SelectItem value="tshirt">Tshirt</SelectItem>
              <SelectItem value="pajama">Pajama</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
      <div className="grid w-full max-w-sm items-center gap-1.5">
        <Label htmlFor="picture">Picture</Label>
        <Input id="picture" type="file" placeholder=""/>
      </div>
      <Button className="mt-2">Submit</Button>

    </div></>
}