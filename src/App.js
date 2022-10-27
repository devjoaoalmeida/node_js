import FiladeEspera from './components/FiladeEspera';
import CadastroContextProvider from './contexts/CadastroContext';

function App() {
  return (
    <div className="container-xl">
	    <div className="table-responsive">
		    <div className="table-wrapper">
          <CadastroContextProvider>
            <FiladeEspera />
          </CadastroContextProvider>
        </div>
      </div>
    </div>
  );
}

export default App;
