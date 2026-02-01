import { renderHook, act } from "@testing-library/react";
import {useCepController} from './useCepController';
import { getPostalCodeData } from "../services/viaCep";
import { ValidatorCEP } from "../utils/validators";


jest.mock('../services/viaCep');
jest.mock('../utils/validators');

describe('useCepController', ()=>{

  test('Buscar o endereço com Sucesso e atualizar o estado', async ()=>{
    const mockAddress = {logradouro: 'Rua A', bairro: 'bairro B'};
    getPostalCodeData.mockResolvedValue(mockAddress);
    ValidatorCEP.mockReturnValue(true);

    const { result } = renderHook(()=> useCepController());

    await act(async ()=>{
      await result.current.handleZipCode({preventDefault: () => {}});
    })

    expect(result.current.address).toEqual(mockAddress);
    expect(result.current.loadingScreen).toBe('sucess');
    expect(result.current.error).toBeNull();
  });

  test('Exibir erro de CEP inválido pelo validador', async ()=>{
    ValidatorCEP.mockReturnValue(false);

    const {result} = renderHook(()=> useCepController());

    await act(async()=>{
      await result.current.handleZipCode({preventDefault: ()=>{}});
    });

    expect(result.current.error).toBe("CEP Inválido");
    expect(result.current.address).toBeNull();
  })
})
