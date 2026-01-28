import { ValidatorCEP } from "./validators"

describe('Validators CEP', ()=>{

  test('retornar True com Cep Valido', ()=>{
    const result = ValidatorCEP(21721011);
    expect(result).toBe(true);
  });

  test('retornar False Cep sendo String', ()=>{
    const result = ValidatorCEP('21721011');
    expect(result).toBe(false);
  });

  test('retornar False Cep com menos de 8 números', ()=>{
    const result = ValidatorCEP(2172100);
    expect(result).toBe(false);
  })
})
