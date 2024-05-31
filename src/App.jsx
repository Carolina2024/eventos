import "bootstrap/dist/css/bootstrap.min.css"; /* se agrega para que funcione bootstrap */
import Registro from "./components/Registro"; /* se agrega este import */
import { useState } from "react"; /* se agrega en forma automatica */
import "./App.css";

const App = () => {
  /* hook useState para declarar variable de estado llamada estadoRegistro y una funcion setEstadoRegistro */
  const [estadoRegistro, setEstadoRegistro] = useState({
    /* estado inicial con dos propiedades con icicio null y vacio */
    success: null,
    message: "",
  });

  /* funcion formRegistro toma las dos propiedades y despues actualiza el estado con nuevos valores */
  const formRegistro = ({ success, message }) => {
    setEstadoRegistro({ success, message });
  };

  return (
    <div>
      {/* se le pasan dos props para actualizar y para mensaje */}
      <Registro onRegistro={formRegistro} estadoRegistro={estadoRegistro} />
    </div>
  );
};

export default App;