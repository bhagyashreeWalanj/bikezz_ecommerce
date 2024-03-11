import React from "react";
import { useShoppingCart } from "use-shopping-cart";
import { useToast } from "../ui/use-toast";

interface ICart {
  btnStyles: string;
  text?: string;
  icon?: React.ReactNode;
  id?: string;
  name?: string;
  currency?: string;
  description?: string;
  price?: number;
  price_id?: string;
  images?: any[];
  imgpath?: string;
}

const AddToCartBtn = ({
  btnStyles,
  text,
  icon,
  id,
  name,
  currency,
  description,
  price,
  price_id,
  images,
  imgpath,
}: ICart) => {
  const { addItem } = useShoppingCart();
  const { toast } = useToast();

  const bike = {
    sku: id || "", // Assuming 'id' is equivalent to 'sku'
    name: name || "",
    description: description || "",
    image: images ? images[0] : "", // Assuming 'images' is an array and taking the first image
    imgpath: imgpath || "",
    price: price || 0, // Assuming 'price' is a number
    price_id: price_id || "",
    currency: currency || "USD", // Assuming default currency is USD
  };

  return (
    <button
      className={`${btnStyles}`}
      onClick={() => {
        addItem(bike);
        toast({
          title: `${name} has been added to the cart`,
        });
      }}
    >
      <div>{text}</div>
      <div>{icon}</div>
    </button>
  );
};

export default AddToCartBtn;
