import React from "react"

export const Logo = (props) => (
  <figure className={props.parentClass}>
    <img src={props.src} alt={props.alt} width={props.width} height={props.height} />
    {props.children}
  </figure>
)