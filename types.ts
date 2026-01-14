export interface Product {
  id: string;
  name: string;
  description: string;
  longDescription: string;
  price: number;
  image: string;
  scentProfile: string[];
  sizes: string[];
}

export interface Workshop {
  id: string;
  title: string;
  description: string;
  duration: string;
  location: string;
  image: string;
}

export interface CartItem extends Product {
  quantity: number;
  selectedSize: string;
}