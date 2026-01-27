import CepResult from "./CepResult";

export default function CepForm({cep, setCep, address, handleZipCode, error}){
    return(
      <div>
          <form className="form">
          <h1>CEP</h1>
          <input value={cep} onChange={(e)=> setCep(e.target.value)} placeholder="00000-000" type="text"></input>
          <button onClick={handleZipCode} type="submit">Enviar</button>
          </form>

          <CepResult
          error={error}
          address={address}
          />
      </div>
    )
}
