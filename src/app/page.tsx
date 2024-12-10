
import { BrandsLogo } from "./components/brandsLogo/page";
import { Hero } from "./components/hero/page"
import NewArrival from "./components/newarrival/page";

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
