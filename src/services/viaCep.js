export async function getPostalCodeData(cep){
  const cleanCep = cep.replace(/\D/g, '');

  const response = await fetch(`https://viacep.com.br/ws/${cleanCep}/json/`);
  if(!response.ok){
  throw new Error('Erro ao conectar com o Serviço');
  }

  const data = await response.json();

  if(data.erro){
  throw new Error('CEP não encontrado');
  }

  return data;
}
