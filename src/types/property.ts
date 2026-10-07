export interface Property {
  id: string;
  title: string;
  location: string;
  price: string;
  rooms: number;
  kvm: number;
  type: 'Villa' | 'Lägenhet';
  image: string;
  featured: boolean;
}