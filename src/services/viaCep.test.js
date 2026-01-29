import { getPostalCodeData } from "./viaCep"

jest.mock('../services/viaCep');


describe('Mockando API', ()=>{
  test('retornando sucesso da API', async ()=>{
    const mockResponse = {
      logradouro: "praça da Fé",
      bairro: "Praça da Fé",
      localidade: "Praça",
      uf: "SP"
    }

    getPostalCodeData.mockResolvedValue(mockResponse);

    global.fetch = jest.fn(()=>{
      Promise.resolve({
        json: () => Promise.resolve(mockResponse)
      })
    })

    const functionMock = await getPostalCodeData(21721011);

    expect(functionMock).toEqual(mockResponse);
  })

  test('retornando Erro da API', async () =>{
    getPostalCodeData.mockRejectedValue(new Error("CEP não encontrado"));

    try{
      const result = await getPostalCodeData(21721011);

    }catch(error){
      expect(error).toBeInstanceOf(Error);
      expect(error.message).toBe("CEP não encontrado");
    }

  })
})
