// import Image from "next/image";

import { Container, TopBar, Title, Filters } from "@/components/shared";
import { ProductsGroupList } from "@/components/shared/products-group-list";
export default function Home() {
  return <>
    <Container>
      <Title text=""/>
    </Container>
    <TopBar />

    <Container className='mt-10 pb-14'>
    <div className='flex gap-[80px]'>
      <div className='w-[250px]'>
        <Filters />
      </div>

      <div className="flex-1">
            <div className="flex flex-col gap-16">
              <ProductsGroupList  title="Charakter" items={[
                {
                id: 1,
                name: "Toothless Customfury",
                imageUrl: "/1-Customfury3.png",
                price: 120,
                items: [{price: 120}],
              },
              {
                id: 2,
                name: "Light Fury",
                imageUrl: "/2lightfury1.png",
                price: 120,
                items: [{price: 120}],
              },
              {
                id: 3,
                name: "Toothless Leder",
                imageUrl: "/3Toothless leather1.png",
                price: 120,
                items: [{price: 150}],
              },
              {
                id: 4,
                name: "ToothFull",
                imageUrl: "/4toothfull1.png",
                price: 120,
                items: [{price: 120}],
              },
              {
                id: 5,
                name: "Light Fury Customised",
                imageUrl: "/5lightfury1.png",
                price: 120,
                items: [{price: 120}],
              },
              {
                id: 6,
                name: "Toothless groß",
                imageUrl: "/6Toothless large1.png",
                price: 120,
                items: [{price: 120}],
              },
              ]} categoryId={1}
              />

              <ProductsGroupList  title="Kawaii" items={[
                {
                id: 7,
                name: "Miko",
                imageUrl: "/kaw.png",
                price: 120,
                items: [{price: 120}],
              },
              {
                id: 8,
                name: "Neko",
                imageUrl: "/kaw.png",
                price: 120,
                items: [{price: 120}],
              },
              {
                id: 9,
                name: "Tanuki",
                imageUrl: "/kaw.png",
                price: 120,
                items: [{price: 120}],
              },
              ]} categoryId={2}
              />
            </div>
          </div>
    </div>
  </Container>

  </>;
}
