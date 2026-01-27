import { useState } from "react";
import { getPostalCodeData } from "../services/viaCep";
import { ValidatorCEP } from "../utils/validators";


export function useCepController(){
  const [cep, setCep] = useState('');
  const [address, setAddress] = useState(null);
  const [error, setError] = useState(null);
  const [loadingScreen, setLoadingScreen] = useState('search');


  async function handleZipCode(e){
    e.preventDefault();
    const validCep = ValidatorCEP(Number(cep));
    if(!validCep){
      setError("CEP Inválido");
      return;
    }

    setLoadingScreen('loading')

    try{
      const addressData = await getPostalCodeData(cep);
      setAddress(addressData);
      setLoadingScreen('sucess');

    }catch(err){
      setError(err.message);
      setLoadingScreen('search');
    }
  }

  function reset(){
    setCep('');
    setAddress(null);
    setError(null);
    setLoadingScreen('search');
  }

  return{
    cep,
    setCep,
    address,
    handleZipCode,
    error,
    loadingScreen,
    reset
  };
}
