import Header from './components/Header';
import Nosotros from './components/Nosotros';
import Secction from './components/Secction';
import Servicios from './components/Servicios';
import Catalogo from './components/Catalogo';
import './index.js'
import Proyectos from './components/Proyectos';
import Contacto from './components/Contacto';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App" style={{position: 'relative'}}>
      <Header />
      <Secction>
          <Nosotros/>
        <Servicios />
        <Catalogo />
        <div style={{textAlign: 'center', fontSize: '30px', marginBottom: '20px', marginTop: '60px', fontWeight: 'bold'}}>Nuestros proyectos</div>
        <Proyectos />
        <Contacto></Contacto>
        <Footer />
      </Secction>
      
    </div>
  );
}

export default App;
