import { StaticImageData } from "next/image";

import photo1 from './photos/ERD3.png'
import photo2 from './photos/Untitled.png'
import photo3 from './photos/Untitled1.png'


const  WondersImages = [
  {
    id: "1",
    name: "Great Wall of China",
    src: photo1,
    photographer: "Photo by Max van den Oetelaar on Unsplash",
    location: "China",
  },
  {
    id: "2",
    name: "Petra",
    src: photo2,
    photographer: "Photo by Reiseuhu on Unsplash",
    location: "Jordan",
  },
  {
    id: "3",
    name: "Christ the Redeemer",
    src: photo3,
    photographer: "Photo by Andrea Leopardi on Unsplash",
    location: "Brazil",
  }
];

export default WondersImages;