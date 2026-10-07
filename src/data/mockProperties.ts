import { type Property } from "../types/property";

import villa1Img from '../assets/House1.jpg';
import villa2Img from '../assets/House2.jpg';
import villa3Img from '../assets/House3.jpg';

export const mockProperties: Property[] =  [
  {
    id: "1",
    title: "Modern Premiumvilla",
    location: "Långedrag, Göteborg",
    price: "12 450 000 kr",
    rooms: 6,
    kvm: 185,
    type: "Villa" as 'Villa',
    image: villa1Img,
    featured: true
  },
  {
    id: "2",
    title: "Exklusiv Takvåning",
    location: "Inom Vallgraven, Göteborg",
    price: "8 900 000 kr",
    rooms: 3,
    kvm: 92,
    type: "Lägenhet" as 'Lägenhet',
    image: villa2Img,
    featured: true
  },
  {
    id: "3",
    title: "Skandinaviskt Arkitekthus",
    location: "Hovås, Göteborg",
    price: "14 200 000 kr",
    rooms: 7,
    kvm: 210,
    type: "Villa" as 'Villa',
    image: villa3Img,
    featured: false
  }
];