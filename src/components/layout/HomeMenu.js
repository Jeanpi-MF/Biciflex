'use client';
import SectionHeaders from "@/components/layout/SectionHeaders";
import MenuItem from "@/components/menu/MenuItem";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function HomeMenu() {
  const [bestSellers, setBestSellers] = useState([]);
  useEffect(() => {
    fetch('/api/menu-items').then(res => {
      res.json().then(menuItems => {
        setBestSellers(menuItems.slice(-3));
      });
    });
  }, []);

  return (
    <section className="">
      <div className="absolute left-0 right-0 w-full justify-start">
        <div className="absolute left-0 -top-[70px] text-left -z-10">
         
        </div>
        <div className="absolute -top-[100px] right-0 -z-10">
         
        </div>
      </div>
      <div className="text-center mt-8 mb-4">
        <SectionHeaders
          subHeader={'check out'}
          mainHeader={'Our Bicycle Collection'}
        />
      </div>
      <div className="grid sm:grid-cols-3 gap-4">
        <div className="border rounded-lg p-4 flex flex-col items-center">
          <Image src={'/bmx.jpg'} width={150} height={150} alt={'Bike 1'} className="mb-4" />
          <h3 className="text-xl font-semibold mb-2">Bicicleta BMX</h3>
          <button className="bg-red-500 text-white py-2 px-4 rounded-full">Buy</button>
        </div>
        <div className="border rounded-lg p-4 flex flex-col items-center">
          <Image src={'/montañera.jpg'} width={150} height={150} alt={'Bike 2'} className="mb-4" />
          <h3 className="text-xl font-semibold mb-2">Bicicleta Montañera</h3>
          <button className="bg-red-500 text-white py-2 px-4 rounded-full">Buy</button>
        </div>
        <div className="border rounded-lg p-4 flex flex-col items-center">
          <Image src={'/bmx1.jpg'} width={150} height={150} alt={'Bike 3'} className="mb-4" />
          <h3 className="text-xl font-semibold mb-2">Bicicleta BMX</h3>
          <button className="bg-red-500 text-white py-2 px-4 rounded-full">Buy</button>
        </div>
      </div>
    </section>
  );
}
