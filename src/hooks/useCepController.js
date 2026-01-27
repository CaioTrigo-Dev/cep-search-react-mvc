import react, { useState } from "react";
import { getPostalCodeData } from "../services/viaCep";
import { ValidatorCEP } from "../utils/validators";


export function useCepController(){
  const [cep, setCep] = useState('');
  const [address, setAddress] = useState(null);
  const [error, setError] = useState(null);

  async function handleZipCode(e){
    e.preventDefault();
    const validCep = ValidatorCEP(Number(cep));
    console.log(validCep)
    if(!validCep){
      setError("CEP Inválido");
      return;
    }

    try{
      const addressData = await getPostalCodeData(cep);
      setAddress(addressData);
    }catch(err){
      setError(err.message);
    }

  }

  return{
    cep,
    setCep,
    address,
    handleZipCode,
    error
  };
}
