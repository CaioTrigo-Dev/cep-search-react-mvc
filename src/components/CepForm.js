import React from "react";
import { useState } from "react";

export default function CepForm(){
    return(
          <form className="form">
          <h1>CEP</h1>
          <input type="text"></input>
          <button  type="submit">Enviar</button>
          </form>
    )
}
