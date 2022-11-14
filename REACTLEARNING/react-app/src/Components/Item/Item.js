"use strict";
import { useState } from "react";
import "./Item.css"
import imgChiot from "../../assets/waw.jpg"

function Item() {
  const toggle = false;
  const styleCSS = { color: toggle ? "Crimson" : "Green" };

  return (
    <>
      <h1 style={styleCSS}>Hello from Item</h1>
      <img src={imgChiot} alt="" width={"500px"}/>
      {/* Pour préciser l'url avant de charger l'img et l'url sera l'url qu'on aura choisi a la fin */}
      {/* <img src={Process.env.PUBLIC_URL + `/images/imgChiot.jpg`} alt="" /> */}
    </>
  );
}
export default Item;
