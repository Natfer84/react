import RegistrationForm from './componentes/registrationForm.js';
import './App.css';

function App() {
  return (
    <div className="App">
      <RegistrationForm 
      nombre="Nombre de usuario: " 
      correo="Correo de usuario: " />
    </div>
  );
}

export default App;
