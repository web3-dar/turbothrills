// src/react-slick.d.ts
declare module 'react-slick' {
    import { Component } from 'react';
  
    export interface SliderProps {
      dots?: boolean;
      infinite?: boolean;
      speed?: number;
      slidesToShow?: number;
      slidesToScroll?: number;
      autoplay?: boolean;
      autoplaySpeed?: number;
      // Add any additional props you might need
    }
  
    export default class Slider extends Component<SliderProps> {}
  }