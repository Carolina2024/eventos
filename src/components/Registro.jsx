import React from 'react'
import SocialButton from "./SocialButton"; 
import Formulario from "./Formulario"; 
import Alert from "./Alert"; 


const Registro = ({ onRegistro, estadoRegistro }) => {
  const { success, message } = estadoRegistro; 

  return (
    <main className="d-flex justify-content-center align-items-center">
      <div className="bg-white  align-items-center p-5 rounded-5">
        <h2 className="mt-3 mb-3 fw-bold">Crea una Cuenta</h2>

        <SocialButton icon="fa-facebook fa-2x" />
        <SocialButton icon="fa-github fa-2x" />
        <SocialButton icon="fa-linkedin-in fa-2x" />

        <p className="small mt-2">O usa tu email para registrarte</p>

        <Formulario onReg={onRegistro} />
        {message && (
          <Alert message={message} type={success ? "success" : "danger"} />
        )}
      </div>
    </main>
  );
};

export default Registro;