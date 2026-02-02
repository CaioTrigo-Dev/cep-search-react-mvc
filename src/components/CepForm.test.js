import { fireEvent, render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import CepForm from "./CepForm";

describe('Teste do CepForm', ()=>{
  const mockSetCep = jest.fn();
  const mockHandleZipCode = jest.fn();

  test('Atualizar o valor do input e disparar o Envio', ()=>{
    render(
    <CepForm
      cep=""
      setCep={mockSetCep}
      handleZipCode={mockHandleZipCode}
      error={null}
    />)

    const input = screen.getByPlaceholderText('00000-000');
    fireEvent.change(input, {target: {value: '12345678'}});

    expect(mockSetCep).toHaveBeenCalledWith('12345678');

    const button = screen.getByRole('button', {name: /enviar/i});
    fireEvent.click(button);

    expect(mockHandleZipCode).toHaveBeenCalled();
  })
  test('Exibir erro do CEP', ()=>{
    render(
      <CepForm
      cep=""
      setCep={()=>{}}
      handleZipCode={()=>{}}
      error={"CEP Inválido"}
      />
    );

    expect(screen.getByText('CEP Inválido')).toBeInTheDocument();
  })
})
