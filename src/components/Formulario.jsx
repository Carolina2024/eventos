import { useState } from "react"; /* se agrega en forma automatica */

/* componente Formulario recibe una prop */
/* useState devuelve un arreglo, con dos posiciones, el valor y funcion */
const Formulario = ({ onReg }) => {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmarPassword, setConfirmarPassword] = useState("");
  const [error, setError] = useState("");

  /* funcion validar despues de enviar el formulario */
  const validar = (e) => {
    e.preventDefault();

    /* Para validar que campos no esten vacios */
    if (
      nombre === "" ||
      email === "" ||
      password === "" ||
      confirmarPassword === ""
    ) {
      setError("Completa todos los campos!");
      onReg({
        success: false,
        message: "Completa todos los campos!",
      });
      return;
    }

    /* validar formato email con expresion regular y password que sean iguales */
    if (!/^\S+@\S+\.\S+/.test(email)) {
      setError("Email escrito incorrecto");
      onReg({ success: false, message: "Email escrito incorrecto" });
      return;
    }
    if (password != confirmarPassword) {
      setError("Password no son iguales");
      onReg({ success: false, message: "Password no son iguales" });
      return;
    }

    /* validar password expresion regular 8 caracteres, al menos una letra, al menos un numero y al menos un simbolo */
    const passwordRegex =
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&_])[A-Za-z\d@$!%*?&_]{8,}$/;

    if (!passwordRegex.test(password)) {
      setError(
        "Password debe tener minimo 8 caracteres, con letras, numeros y minimo un simbolo"
      );
      onReg({
        success: false,
        message:
          "Password debe tener minimo 8 caracteres, con letras, numeros y minimo un simbolo",
      });
      return;
    }
    setError("");

    /* si se cumple sera exitoso y luego se limpia los campos */
    onReg({ success: true, message: "Registro realizado" });

    setNombre("");
    setEmail("");
    setPassword("");
    setConfirmarPassword("");
  };

  /* formulario, validaciones se realizan con funcion validar con evento onSubmit al enviar el formulario */
  /* onChange para actualizar el estado con valor ingresado */
  return (
    <form className="form-inner h-100 d-flex flex-column gap-2" onSubmit={validar}>
      <div className="form-group">
        <input
          className="form-control mb-3"
          type="text"
          name="nombre"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          placeholder="Nombre"
      />
    </div>
    <div className="form-group">
        <input
          className="form-control mb-3"
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="tuemail@ejemplo.com"
      />
    </div>
    <div className="form-group">
        <input
          className="form-control mb-3"
          type="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Contraseña"
      />
    </div>
    <div className="form-group">
        <input
          className="form-control mb-3"
          type="password"
          name="confirmarPassword"
          value={confirmarPassword}
          onChange={(e) => setConfirmarPassword(e.target.value)}
          placeholder="Confirme su contraseña"
      />
      </div>
        <button
          className="rounded-3 btn btn-success mt-2 mb-2"
          type="submit"
        >
          Registrarse
        </button>
    </form>
);
}

export default Formulario;

