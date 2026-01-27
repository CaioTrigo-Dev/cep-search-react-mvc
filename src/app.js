import CepForm from "./components/CepForm";
import { useCepController } from "./hooks/useCepController";

export default function App(){

  const controller = useCepController();

    return(
        <main>
          <CepForm
          cep={controller.cep}
          setCep={controller.setCep}
          address={controller.address}
          handleZipCode={controller.handleZipCode}/>
        </main>
    )
}
