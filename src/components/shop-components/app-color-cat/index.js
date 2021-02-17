import React from 'react'

import './index.css'

export default function Index(props) {
  const capitalizeFirstLetter = (string)  => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  return (
    <div className={"sorting-option-category d-flex justify-content-between " + (props.handleActiveClass(props.color, props.colorArr) ? 'active' : '')}>
        <div className="custom-control custom-checkbox">  
            <input type="checkbox" className={'custom-control-input ' + props.color} id={props.color} onClick={() => props.handleColor(props.color, props.colorArr, "color")}/>  
            <label className={'custom-control-label pl-1 ' + props.color} htmlFor={props.color}>{ capitalizeFirstLetter(props.color) }</label>  
        </div>
      <span className="sorting-option-qnt">18</span>
    </div>
  )
}
