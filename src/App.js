//import logo from './logo.svg';
//import './App.css';
import {AlertSB} from "./Components/Alertas"
import {Avatar} from "./Components/Avatar"

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <AlertSB 
      altura="60px" ancho="300px" colorFondo="magenta" colorFuente="white" texto="Exito">

      </AlertSB>
       <AlertSB 
       altura="60px" ancho="300px" colorFondo="magenta" colorFuente="white" texto="Denegado"></AlertSB>
       
       <Avatar 
         imagen= " 500px"
         >

         </Avatar>
      </header>
    </div>
  );
}

export default App;
