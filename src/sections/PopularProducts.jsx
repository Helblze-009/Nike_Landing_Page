import { products } from "../constants/index";
import { PopularProductCard  } from "../sections/index";


const PopularProducts = () => {
  return (
    <section
      id="products"
      className="max-container
    max-sm:mt-12"
    >
      <div className="flex flex-col justify-start gap-5">
        <h2 className="text-4xl font-palanquin font-bold
        ">Our <span className="text-coral-red
        ">Popular</span> Products</h2>
        <p className="lg:max-w-lg mt-2 font-montserrat text-slate-gray">
          "Elevate Your Wardrobe with Our Nike-Inspired Collection! From Classic
          Kicks to Modern Must-Haves – Unleash Your Inner Athlete with
          Top-Quality Sportswear and Footwear. Experience Unrivaled Comfort and
          Style, Just a Click Away!"
        </p>
      </div>

      <div className="mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-6 gap-14 cursor-pointer">
      {
        products.map((product)=>(
          <PopularProductCard key={product.name} {...product}/>
        ))
      }
      </div>
    </section>
  );
};

export default PopularProducts;
