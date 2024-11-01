import Image from 'next/image';

import { Button } from './ui/button';

type ProductCardProps = {
  productName: string;
  productPrice: number;
  productImage: string;
};

export const ProductCard = ({
  productImage,
  productName,
  productPrice,
}: ProductCardProps) => {
  return (
    <div className="productCardContainer">
      <Image src={productImage} alt="Product image" width={1000} height={1000} className="" />
      <h2>{productName}</h2>
      <p>
        R$
        {productPrice}
      </p>
      <Button>Add to Cart</Button>
    </div>
  );
};
