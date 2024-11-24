import { BannerSlider } from "@/components/BannerSlider";
import { ProductItemV1 } from "@/components/ProductItemV1";
import Image from "next/image";

export default function Home() {
  return (
    <>
    <BannerSlider/>


    <section className="filterProducts py-6">
      <div className="list-products">
      
      
      <ul className="list list-inline text-center flex justify-center mb-6">
          <li className="list-inline-item cursor-pointer">
            <Image src  ="/hair1.png" alt="icon-1" width={"55"} height={"55"} className="" />
            <h4 className="text-lg py-2 mb-0 font-bold"> Hair</h4>
          </li>

          <li className="list-inline-item text-center cursor-pointer">
            <Image src  ="/cream1.png" alt="icon-2" width={"55"} height={"55"} className="m-auto" />
            <h4 className="text-lg py-2 mb-0 font-bold">Face</h4>
          </li>

          <li className="list-inline-item text-center cursor-pointer">
            <Image src  ="/lotion1.png" alt="icon-3" width={"55"} height={"55"} className="m-auto" />
            <h4 className="text-lg py-2 mb-0 font-bold">Body</h4>
          </li>

          <li className="list-inline-item text-center cursor-pointer">
            <Image src  ="/cream2.png" alt="icon-4" width={"55"} height={"55"} className="m-auto" />
            <h4 className="text-lg py-2 mb-0 font-bold">Skin</h4>
          </li>
        </ul>
          
      <div className="productsList">
        <div className="contain px-24 flex items-center gap-8 justify-between">
        <ProductItemV1 />
         <ProductItemV1 />
         <ProductItemV1 />
         <ProductItemV1 />
        
        </div> 
      </div>
    </div>  

      
      </section>

    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    </>
  );
}
