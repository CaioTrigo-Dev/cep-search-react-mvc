import CepForm from "./components/CepForm";
import { useCepController } from "./hooks/useCepController";
import CepResult from "./components/CepResult";
import './assets/app.css';

export default function App(){

  const controller = useCepController();

    return(
        <main>
          {controller.loadingScreen === 'search' && (
            <CepForm
              cep={controller.cep}
              setCep={controller.setCep}
              handleZipCode={controller.handleZipCode}
              error={controller.error}
            />
          )
          }

          {controller.loadingScreen === 'loading' && (
            <div className="loading-screen">
              <div className="spinner"></div>
              <h2>Buscando Informações...</h2>
            </div>
          )
          }

          {controller.loadingScreen === 'sucess' &&(
            <div>
              <CepResult address={controller.address} reset={controller.reset}/>
            </div>
          )
          }
        </main>
    )
}
