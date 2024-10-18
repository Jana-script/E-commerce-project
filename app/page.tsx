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
                name: "Pizza Margherita",
                imageUrl: "https://media.dodostatic.net/image/r:584x584/11EE7D6105EF6690B86FBDE6150B5B0C.avif",
                price: 120,
                items: [{price: 120}],
              },
              {
                id: 2,
                name: "Pizza Margherita",
                imageUrl: "https://media.dodostatic.net/image/r:584x584/11EE7D6105EF6690B86FBDE6150B5B0C.avif",
                price: 120,
                items: [{price: 120}],
              },
              {
                id: 3,
                name: "Pizza Margherita",
                imageUrl: "https://media.dodostatic.net/image/r:584x584/11EE7D6105EF6690B86FBDE6150B5B0C.avif",
                price: 120,
                items: [{price: 120}],
              },
              {
                id: 4,
                name: "Pizza Margherita",
                imageUrl: "https://media.dodostatic.net/image/r:584x584/11EE7D6105EF6690B86FBDE6150B5B0C.avif",
                price: 120,
                items: [{price: 120}],
              },
              {
                id: 5,
                name: "Pizza Margherita",
                imageUrl: "https://media.dodostatic.net/image/r:584x584/11EE7D6105EF6690B86FBDE6150B5B0C.avif",
                price: 120,
                items: [{price: 120}],
              },
              {
                id: 6,
                name: "Pizza Margherita",
                imageUrl: "https://media.dodostatic.net/image/r:584x584/11EE7D6105EF6690B86FBDE6150B5B0C.avif",
                price: 120,
                items: [{price: 120}],
              },
              ]} categoryId={1}
              />

              <ProductsGroupList  title="Kawaii" items={[
                {
                id: 7,
                name: "Pizza Margherita",
                imageUrl: "https://media.dodostatic.net/image/r:584x584/11EE7D6105EF6690B86FBDE6150B5B0C.avif",
                price: 120,
                items: [{price: 120}],
              },
              {
                id: 8,
                name: "Pizza Margherita",
                imageUrl: "https://media.dodostatic.net/image/r:584x584/11EE7D6105EF6690B86FBDE6150B5B0C.avif",
                price: 120,
                items: [{price: 120}],
              },
              {
                id: 9,
                name: "Pizza Margherita",
                imageUrl: "https://media.dodostatic.net/image/r:584x584/11EE7D6105EF6690B86FBDE6150B5B0C.avif",
                price: 120,
                items: [{price: 120}],
              },
              {
                id: 10,
                name: "Pizza Margherita",
                imageUrl: "https://media.dodostatic.net/image/r:584x584/11EE7D6105EF6690B86FBDE6150B5B0C.avif",
                price: 120,
                items: [{price: 120}],
              },
              {
                id: 11,
                name: "Pizza Margherita",
                imageUrl: "https://media.dodostatic.net/image/r:584x584/11EE7D6105EF6690B86FBDE6150B5B0C.avif",
                price: 120,
                items: [{price: 120}],
              },
              {
                id: 12,
                name: "Pizza Margherita",
                imageUrl: "https://media.dodostatic.net/image/r:584x584/11EE7D6105EF6690B86FBDE6150B5B0C.avif",
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
