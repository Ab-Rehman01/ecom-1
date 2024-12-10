import { BrandsLogo } from "./components/brandsLogo/BrandLogo";
import { Hero } from "./components/hero/Hero";
import NewArrival from "./components/newarrival/NewArrival";
import StyleBrows from "./components/stylebrows/StyleBrows";
import TopSelling from "./components/topSelling/TopSelling";

export default function Home() {
  return (
    <>
      <div>
        <Hero />
        <BrandsLogo />
        <NewArrival />
        <TopSelling />
        <StyleBrows />
      </div>
    </>
  );
}

// import { Hero } from "./components/hero/hero";

// export default function Home() {
//   return (
//     <>

//       <div>
//         <Hero />

//       </div>
//     </>

//   );
// }
