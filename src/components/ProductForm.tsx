"use client"
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
import { useState } from "react"
import { db } from "@/lib/firebase"
import { collection, addDoc } from "firebase/firestore";
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';

export default function ProductForm(){
const [formData, setFormData] = useState({
    title: '',
    price: '',
    description: '',
    fabric: '',
    type: '',
    color: '',
    group: '',
    category: '',
    images: '',
  });
  const [selectedFile, setSelectedFile] = useState<any>(null);
  const storage = getStorage();

  const handleFileChange = (event: any) => {
    setSelectedFile(event.target.files[0]);
  };


  const handleUpload = async () => { 
    if (!selectedFile) {
      alert('Please select an image file.');
      return;
    }else{
      const storageRef = ref(storage, selectedFile.name);
      const uploadTask = uploadBytesResumable(storageRef, selectedFile);  
      uploadTask.on(
      'state_changed',
      () => {
        // No need to track progress here
      },
      (error) => {
        console.error('Upload failed:', error);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL: any) => {
        const newURL = downloadURL.substring(downloadURL.lastIndexOf('/') + 1);
        const finalURL = newURL.substring(0, newURL.lastIndexOf('?'));
          setFormData({ ...formData, ["images"]: finalURL });
        });
      }
    );
    }
  }

  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }
  const handleSubmit = (e: any) => {
    e.preventDefault();
    handleUpload();
    const docRef = addDoc(collection(db, formData.category), formData);
    console.log(docRef);
    setFormData({
      title: '',
      price: '',
      description: '',
      fabric: '',
      type: '',
      color: '',
      group: '',
      category: '',
      images: '',
    })
  }

    return <>
    <form className="flex flex-col gap-2 mx-5 mt-4 px-5">
      <div className="grid w-full items-center gap-1.5">
        <Label htmlFor="title">Title</Label>
        <Input type="text" id="title" placeholder="Black Oversized Tshirt" name="title" value={formData.title} onChange={handleChange}/>
      </div>
      <div className="grid w-full items-center gap-1.5">
        <Label htmlFor="price">Price</Label>
        <Input type="number" id="price" placeholder="299" name="price" value={formData.price} onChange={handleChange}/>
      </div>
      <div className="grid w-full items-center gap-1.5">
        <Label htmlFor="description">Description</Label>
        <Input type="text" id="description" placeholder="description..." name="description" value={formData.description} onChange={handleChange}/>
      </div>
      <div className="grid w-full items-center gap-1.5">
        <Label htmlFor="fabric">Fabric</Label>
        <Input type="text" id="fabric" placeholder="Cotton" name="fabric" value={formData.fabric} onChange={handleChange}/>
      </div>
      <div className="grid w-full items-center gap-1.5">
        <Label htmlFor="type">Type</Label>
        <Input type="text" id="type" placeholder="Oversized Men Tshirt" name="type" value={formData.type} onChange={handleChange}/>
      </div>
      <div className="grid w-full items-center gap-1.5">
        <Label htmlFor="color">Color</Label>
        <Input type="text" id="color" placeholder="Black" name="color" value={formData.color} onChange={handleChange}/>
      </div>
      <div className="grid w-full items-center gap-1.5">
        <Label>Group</Label>
        <Select name="group" value={formData.group} onValueChange={(e) => {setFormData({ ...formData, ["group"]: e });}}>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Select a group" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Select a group</SelectLabel>
              <SelectItem value="mens">Mens</SelectItem>
              <SelectItem value="womens">Womens</SelectItem>
              <SelectItem value="kids">Kids</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
      <div className="grid w-full items-center gap-1.5">
        <Label>Category</Label>
        <Select name="category" value={formData.category}  onValueChange={(e) => {setFormData({ ...formData, ["category"]: e });}}>
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
        <Input id="picture" type="file" accept="image/*"  onChange={handleFileChange} placeholder=""/>
      </div>
      <Button className="mt-2" type="submit" onClick={handleSubmit}>Submit</Button>

    </form></>
}