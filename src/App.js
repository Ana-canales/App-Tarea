//import logo from './logo.svg';
//import './App.css';
import {AlertSB} from "./Components/Alertas"

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <AlertSB altura="60px" ancho="300px" colorFondo="magenta" colorFuente="white" texto="DefaultAlert"></AlertSB>
       <AlertSB altura="60px" ancho="300px" colorFondo="magenta" colorFuente="white" texto="Def"></AlertSB>
      </header>
    </div>
  );
}

export default App;
