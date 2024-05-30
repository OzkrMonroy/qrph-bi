import './App.css'
import biLogo from './assets/logo_BI-blanco.png'

function App() {
  return (
    <>
      <header className='header'>
        <div className='header-logo-container'>
          <a href="/">
            <img src={biLogo } alt="Logo de la empresa" className='header-logo'/>
          </a>
        </div>
      </header>
      <main></main>
    </>
  )
}

export default App
