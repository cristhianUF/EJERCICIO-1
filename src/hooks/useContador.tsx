import {useState} from "react"

export const useContador = () => {

  const [contador, setContador]= useState(20);

  const aumentarValor =(valor: number)=>{
    const nuevoValor = contador + valor;
    if(nuevoValor>= 10 && nuevoValor<=30){
      setContador(nuevoValor)
    }
  }
  
  return {
    contador, aumentarValor
  }
}