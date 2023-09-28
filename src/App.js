import logo from './imagenes/fcc_secondary_small.png';
import './App.css';
import ListaDeTareas from './componentes/ListaDeTareas';


function App() {
  return (
    <div className="aplicacion-tareas">
      <div className="freecodecamp-logo-contenedor">
        <img
          src={logo}
          className="freecodecamp-logo"
          alt="logo"
        />
      </div>
      <div className="tareas-lista-principal">
        <h1>Mis tareas</h1>
        <ListaDeTareas />
      </div>
      

  
    </div>
  );
}

export default App;
