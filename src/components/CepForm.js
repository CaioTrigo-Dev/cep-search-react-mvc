export default function CepForm({cep, setCep, handleZipCode, error}){
    return(
      <div className="div-form">
          <form className="form">
          <h1>CEP</h1>
          <input value={cep} onChange={(e)=> setCep(e.target.value)} placeholder="00000-000" type="text"></input>
          <button onClick={handleZipCode} type="submit">Enviar</button>
          </form>

          <div className="result-Error">
            {error}
          </div>

      </div>
    )
}
