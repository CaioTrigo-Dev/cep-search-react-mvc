import {render, screen} from '@testing-library/react';
import CepResult from './CepResult';
import '@testing-library/jest-dom';

describe('Componente CepResult', ()=>{
  const mockAddress = {
    logradouro: "Rua teste",
    bairro: "Teste",
    localidade: "Teste Unitário",
    uf: "TS"
  }

  test('Exibição dos Dados na View', ()=>{
    render(<CepResult address={mockAddress} reset={()=>{}}/>)

    expect(screen.getByText("Teste")).toBeInTheDocument();
    expect(screen.getByText("Rua teste")).toBeInTheDocument();
  })

})
