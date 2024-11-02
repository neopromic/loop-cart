import { Check } from 'lucide-react';
import Image from 'next/image';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';

type ProductCardProps = {
  productName: string;
  productPrice: number;
  productImage: string;
};

export const ProductCard = ({ productImage, productName, productPrice }: ProductCardProps) => {
  const formattedPrice = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(productPrice);

  return (
    <Card className="w-full basis-1/2 rounded-lg lg:w-96">
      <CardHeader className="p-0">
        <Image
          src={productImage}
          alt={productName}
          width={1000}
          height={1000}
          className="h-64 w-full rounded-lg object-cover"
        />
      </CardHeader>
      <CardContent className="pt-6">
        <CardTitle className=" truncate text-wrap text-base font-normal">
          {productName}
        </CardTitle>
        <CardDescription aria-label={`Preço: ${formattedPrice}`} className="text-xl font-medium text-foreground">
          {formattedPrice}
        </CardDescription>
        <p className="flex items-center gap-2 text-sm text-green-900">
          <Check />
          Entrega automática
        </p>
      </CardContent>
    </Card>
  );
};
