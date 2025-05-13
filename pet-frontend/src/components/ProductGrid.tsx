import { Product } from "../types/Products"
import { ProductCard } from "./ProductCard"

export const ProductGrid = ({ products }: { products: Product[] }) => {

  const limitedProducts = products.slice(0, 8);

  return (

    <div style={{
        padding: "100px",
        paddingTop: "30px",
        display: "grid",
        gridTemplateColumns: "1fr 1fr 1fr 1fr",
        gap: "20px"
        }}>

      {limitedProducts.map(product => (
        <ProductCard key={product.sku} product={product} />
      ))}

    </div>

  )

}