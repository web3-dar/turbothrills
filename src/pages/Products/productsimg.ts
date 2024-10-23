import may1 from "./productImg/Mercedez_s580_maybach1.jpg"
import may2 from "./productImg/Mercedez_s580_maybach2.jpg"
import may3 from "./productImg/Mercedez_s580_maybach3.jpg"
import may4 from "./productImg/Mercedez_s580_maybach4.jpg"
import may5 from "./productImg/Mercedez_s580_maybach5.jpg"
import may6 from "./productImg/Mercedez_s580_maybach6.jpg"
import may7 from "./productImg/Mercedez_s580_maybach7.jpg"
import may8 from "./productImg/Mercedez_s580_maybach8.jpg"
import may9 from "./productImg/Mercedez_s580_maybach9.jpg"
import may10 from "./productImg/Mercedez_s580_maybach10.jpg"
import may11 from "./productImg/Mercedez_s580_maybach11.jpg"
import may12 from "./productImg/Mercedez_s580_maybach12.jpg"
import may13 from "./productImg/Mercedez_s580_maybach13.jpg"
import may14 from "./productImg/Mercedez_s580_maybach14.jpg"
import may15 from "./productImg/Mercedez_s580_maybach15.jpg"


// #BMW


import bmw1 from "./productImg/BMW_2018_6.jpg"
import bmw2 from "./productImg/BMW_2018_1.jpg"
import bmw3 from "./productImg/BMW_2018_2.jpg"
import bmw4 from "./productImg/BMW_2018_3.jpg"
import bmw5 from "./productImg/BMW_2018_4.jpg"
import bmw6 from "./productImg/BMW_2018_5.jpg"
import bmw7 from "./productImg/BMW_2018_7.jpg"

//RollsRoyce 

import rr1 from "./productImg/Rolls_Royce_Phantom_2021_1.jpg"
import rr2 from "./productImg/Rolls_Royce_Phantom_2021_2.jpg"
import rr3 from "./productImg/Rolls_Royce_Phantom_2021_3.jpeg"
import rr4 from "./productImg/Rolls_Royce_Phantom_2021_4.jpeg"
import rr5 from "./productImg/Rolls_Royce_Phantom_2021_5.jpeg"




///Land rover 

import lr1 from "./productImg/Land_Rover_Range_Rover_Sports_2021_1.jpg"
import lr2 from "./productImg/Land_Rover_Range_Rover_Sports_2021_2.jpg"
import lr3 from "./productImg/Land_Rover_Range_Rover_Sports_2021_3.jpg"
import lr4 from "./productImg/Land_Rover_Range_Rover_Sports_2021_4.jpg"
import lr5 from "./productImg/Land_Rover_Range_Rover_Sports_2021_5.jpg"
import lr6 from "./productImg/Land_Rover_Range_Rover_Sports_2021_6.jpg"
import lr7 from "./productImg/Land_Rover_Range_Rover_Sports_2021_7.jpg"
import lr8 from "./productImg/Land_Rover_Range_Rover_Sports_2021_8.jpg"
import lr9 from "./productImg/Land_Rover_Range_Rover_Sports_2021_9.jpg"
import lr10 from "./productImg/Land_Rover_Range_Rover_Sports_2021_10.jpg"
import lr11 from "./productImg/Land_Rover_Range_Rover_Sports_2021_11.jpg"



///2018 Honda CR-V

import cr1 from "./productImg/Honda_CR-V_2018_1.jpg"
import cr2 from "./productImg/Honda_CR-V_2018_2.jpg"
import cr3 from "./productImg/Honda_CR-V_2018_3.jpg"
import cr4 from "./productImg/Honda_CR-V_2018_4.jpg"
import  cr6 from "./productImg/Honda_CR-V_2018_6.jpg"
import  cr7 from "./productImg/Honda_CR-V_2018_7.jpg"
import  cr8 from "./productImg/Honda_CR-V_2018_8.jpg"
import  cr9 from "./productImg/Honda_CR-V_2018_9.jpg"
import  cr10 from "./productImg/Honda_CR-V_2018_10.jpg"
import  cr11 from "./productImg/Honda_CR-V_2018_11.jpg"
import  cr12 from "./productImg/Honda_CR-V_2018_12.jpg"


//2024 Mercedes-Benz GLE-Class

import gle1 from "./productImg/2024-GLE-SUV-MLP_1.png"
import gle2 from "./productImg/2024-GLE-SUV-MLP_2.png"
import gle3 from "./productImg/2024-GLE-SUV-MLP_3.png"
import gle4 from "./productImg/2024-GLE-SUV-MLP_4.png"
import gle5 from "./productImg/2024-GLE-SUV-MLP_5.png"
import gle6 from "./productImg/2024-GLE-SUV-MLP_6.png"
import gle7 from "./productImg/2024-GLE-SUV-MLP_7.png"
import gle8 from "./productImg/2024-GLE-SUV-MLP_8.png"





// products.ts
export interface Product {
    id : string;
    name: string;
    price: number;
    description: string;
    images: string[];
  }
  
  export const products : Product[] = [
    {
        id: "0",
      name: "Mercedezs 580 Maybach",
      price: 200000,
      description: "The Mercedes-Maybach S580 4MATIC is powered by a 4.0-liter V8 biturbo engine paired with a mild hybrid system, producing around 496 horsepower and 516 lb-ft of torque. It comes with 4MATIC all-wheel drive and is designed to deliver a smooth, luxurious ride. The interior boasts hand-crafted materials, premium Nappa leather upholstery, and high-tech features such as a 12.8-inch OLED touchscreen, ambient lighting, and advanced driver-assistance systems. Passengers enjoy spacious seating with reclining rear seats and a focus on comfort, privacy, and entertainment.",
      images: [
        may1,
        may2,
        may3,
        may4,
        may5,
        may6,
        may7,
        may8,
        may9,
        may10,
        may11,
        may12,
        may13,
        may14,
        may15,
        // add more images here as needed...

      ]
    },
    {
        id: "1",
      name: " 2018 BMW X6",
      price: 60000,
      description: "The 2018 BMW X6 is a luxury midsize SUV that combines sporty performance with a distinctive coupe-like design. It features a powerful lineup of engines, including a turbocharged inline-6 and a robust V8 option, delivering impressive acceleration and handling. The X6 is equipped with BMW’s xDrive all-wheel-drive system for enhanced traction and stability. Inside, it offers a driver-focused cockpit with high-quality materials, a spacious and comfortable interior, and advanced technology features, including the iDrive infotainment system, navigation, and premium audio options. The rear seating is slightly compromised due to the sloping roofline, but the cargo space remains practical for daily use.",
      images: [
        bmw1,
        bmw2,
        bmw3,
        bmw4,
        bmw5,
        bmw6,
        bmw7,
        // add more images here as needed...
      ]
    },
    {
        id: "2",
      name: "2016 Rolls-Royce Wraith Coupe 2D",
      price: 250000,
      description: "The 2016 Rolls-Royce Wraith is a luxury grand tourer that epitomizes elegance and performance. It features a 6.6-liter V12 twin-turbocharged engine, producing around 624 horsepower and 605 lb-ft of torque, allowing it to accelerate from 0 to 60 mph in just 4.4 seconds. The Wraith combines classic Rolls-Royce styling with a modern, sporty design, characterized by its fastback silhouette and iconic grille. Inside, the Wraith is a haven of luxury, featuring sumptuous leather upholstery, handcrafted wood accents, and a state-of-the-art infotainment system. The interior can be highly customized, allowing owners to create a unique and personal driving experience. Its smooth ride and refined handling make it an exceptional choice for those seeking a blend of performance and luxury.",
      images: [
        rr1,
        rr2,
        rr3,
        rr4,
        rr5
        // add more images here as needed...
      ]
    }

    ,
    {
        id: "3",
      name: "2013 Land Rover Range Rover Evoque Dynamic",
      price: 20000,
      description: "The 2013 Land Rover Range Rover Evoque Dynamic is a compact luxury SUV that combines striking design with off-road capability. Powered by a 2.0-liter turbocharged four-cylinder engine, it delivers 240 horsepower and is available with either a six-speed manual or a nine-speed automatic transmission. The Evoque features a sophisticated all-wheel-drive system, ensuring excellent traction in various conditions. Inside, the cabin is stylishly designed, offering premium materials, comfortable seating, and advanced technology, including an infotainment system with navigation and Bluetooth connectivity. The rear seats and cargo space are slightly limited, but the Evoque is known for its upscale interior and sporty driving dynamics.",
      images: [
        lr1,
        lr2,
        lr3,
        lr4,
        lr5,
        lr6,
        lr7,
        lr8,
        lr9,
        lr10,
        lr11,
      ]
    }
    ,
    {
        id: "4",
      name: "2018 Honda CR-V",
      price: 25000,
      description: "The 2018 Honda CR-V is a versatile and spacious compact SUV known for its reliability, practicality, and comfort. It comes with a choice of two engines: a 2.4-liter inline-4 producing 184 horsepower and a turbocharged 1.5-liter inline-4 generating 190 horsepower. The CR-V features a continuously variable transmission (CVT) that contributes to smooth acceleration and good fuel efficiency. Inside, it offers a well-designed interior with high-quality materials, generous cargo space, and a user-friendly infotainment system. The rear seats provide ample legroom and can fold flat for additional storage options. The 2018 CR-V also comes equipped with advanced safety features, including Honda Sensing, which adds adaptive cruise control, lane-keeping assist, and collision mitigation braking.",
      images: [
        cr1,
        cr2,
        cr3,
        cr4,
        
        cr6,
        cr7,
        cr8,
        cr9,
        cr10,
        cr11,
        cr12
      ]
    }

    
,
   {
        id: "5",
      name: "2024 Mercedes-Benz GLE SUV",
      price: 70650,
      description: "The 2024 Mercedes-Benz GLE SUV is a luxury midsize SUV that offers a blend of advanced technology, performance, and premium features. It comes in several powertrain options, including mild hybrids and a plug-in hybrid model",
      images: [
       gle1,
       gle2,
       gle3,
       gle4,
       gle5,
       gle6,
       gle7,
       gle8
      ]
    },
    // {
    //     id: "6",
    //   name: "",
    //   price: 25000,
    //   description: "",
    //   images: [
    //    img,
    //    img
    //   ]
    // }
,
    // {
    //     id: "7",
    //   name: "",
    //   price: 25000,
    //   description: "",
    //   images: [
    //    img,
    //    img
    //   ]
    // }
,
    // {
    //     id: "8",
    //   name: "",
    //   price: 25000,
    //   description: "",
    //   images: [
    //    img,
    //    img
    //   ]
    // }
,
    // {
    //     id: "9",
    //   name: "",
    //   price: 25000,
    //   description: "",
    //   images: [
    //    img,
    //    img
    //   ]
    // }
,
    // {
    //     id: "10",
    //   name: "",
    //   price: 25000,
    //   description: "",
    //   images: [
    //    img,
    //    img
    //   ]
    // }
,
    // {
    //     id: "",
    //   name: "",
    //   price: 25000,
    //   description: "",
    //   images: [
    //    img,
    //    img
    //   ]
    // }
,
    // {
    //     id: "",
    //   name: "",
    //   price: 25000,
    //   description: "",
    //   images: [
    //    img,
    //    img
    //   ]
    // }
  ];
  