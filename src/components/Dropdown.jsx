import React from 'react';
import { SlideDown } from "react-slidedown";
import 'react-slidedown/lib/slidedown.css'
import Portfolio from './Portfolio'


export default function Dropdown(props) {


  return (
    <div>
    <SlideDown
        className={'my-dropdown-slidedown'}
      >
      </SlideDown>
      </div>
  )
}
