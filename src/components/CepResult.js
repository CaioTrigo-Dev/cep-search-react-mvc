export default function CepResult({address, reset}){
    return(
      <div className="result-Sucess">
        <h2>Endereço Encontrado:</h2>
        <p><strong>Rua:</strong> {address.logradouro}</p>
        <p><strong>Bairro:</strong> {address.bairro}</p>
        <p><strong>Cidade:</strong> {address.localidade} - {address.uf}</p>
        <button onClick={reset}>Fazer uma Nova Busca</button>
      </div>
    )
}
