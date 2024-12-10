import { BrandsLogo } from "./components/brandsLogo/BrandLogo";
import { Hero } from "./components/hero/Hero";
import NewArrival from "./components/newarrival/NewArrival";

export default function Home() {
  return (
    <>
      <div>
        <Hero />
        <BrandsLogo />

        <NewArrival />
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
