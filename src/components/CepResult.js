export default function CepResult({error, address}){
  if(error){
    return(
      <div className="result-Error">
        {error}
      </div>
    )
  }

  if(address){
    return(
      <div className="result-Sucess">
        <h3>Endereço Encontrado:</h3>
        <p><strong>Rua:</strong> {address.logradouro}</p>
        <p><strong>Bairro:</strong> {address.bairro}</p>
        <p><strong>Cidade:</strong> {address.localidade} - {address.uf}</p>
      </div>
    )
  }
}
