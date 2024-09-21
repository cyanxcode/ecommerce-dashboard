import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import ProductForm from "@/components/ProductForm"

export default function Home(){
  return <div className="grid w-full min-h-[100vh] place-content-center">
  <Tabs defaultValue="account" className="">
    <TabsList>
      <TabsTrigger className="px-16" value="account">Add Product</TabsTrigger>
      <TabsTrigger className="px-16" value="password">Add Categories</TabsTrigger>
    </TabsList>
    <TabsContent value="account">
      <ProductForm/>
    </TabsContent>
    <TabsContent value="password">Coming Soon...</TabsContent>
  </Tabs>
</div >
}