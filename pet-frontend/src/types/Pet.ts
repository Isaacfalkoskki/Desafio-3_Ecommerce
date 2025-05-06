export type Pet = {
  sku: number;
  gender: 'FEMALE' | 'MALE';
  age: number;
  size: 'SMALL' | 'MEDIUM' | 'LARGE';
  vaccinated: boolean;
  dewormed: boolean;
  cert: boolean;
  microchip: boolean;
  location: string;
  created_at: string;
  updated_at: string;
  additional_information?: string;
  name: string;
  price: number;
  product_type: 'CAT' | 'DOG';
  image_url: string;
};