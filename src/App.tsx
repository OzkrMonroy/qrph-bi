import './App.css'
import biLogo from './assets/logo_BI-blanco.png'

function App() {
  return (
    <>
      <header className='header'>
        <div className='header-logo-container'>
          <a href="/">
            <img src={biLogo} alt="Logo de la empresa" className='header-logo' />
          </a>
        </div>
        <ul className='header-options'>
          <li className="header-options-item">
            <a href="/" className='header-options-link active'>Productos</a>
          </li>
          <li className="header-options-item">
            <a href="/" className='header-options-link'>Agencia Virtual</a>
          </li>
          <li className="header-options-item">
            <a href="/" className='header-options-link'>Horarios</a>
          </li>
          <li className="header-options-item">
            <a href="/" className='header-options-link dropdown'>Español</a>
          </li>
        </ul>
      </header>
      <main>
        <section className='form-container bi-border-radious'>
          <h2 className='form-title'>Banca de Personas</h2>
          <form>
            <div>
              <label className='input-label'>
                Código
                <div className='input-container'>
                  <div className='input-icon'>
                    <span className="icon-grid"></span>
                  </div>
                  <input type="text" placeholder='Código' id='input-code' />
                </div>
              </label>
            </div>
            <div>
              <label className='input-label'>
                Usuario
                <div className='input-container'>
                  <div className='input-icon'>
                    <span className="icon-user"></span>
                  </div>
                  <input type="text" placeholder='Usuario' id='input-user' />
                </div>
              </label>
            </div>
            <div>
              <label className='input-label'>
                Contraseña
                <div className='input-container'>
                  <div className='input-icon'>
                    <span className="icon-lock"></span>
                  </div>
                  <input type="password" placeholder='Contraseña' id='input-password' />
                </div>
              </label>
            </div>
            <button type='submit' className='form-signin-button'>
              <div className='signin-button-icon'>
                <span className="icon-login"> </span>
              </div>
              {" "}Iniciar sesión
            </button>
          </form>
          <a href="/" className='forgot-password-link'>Olvidé mi contraseña</a>
        </section>
        <section className='tips-container bi-border-radious'>
          <h2 className='tips-title'>
            <span className='icon-shield'></span>
            {" "} Tips de Seguridad y ayuda
          </h2>
          <p className='tips-description'>Ingresa aquí para conocer tips de seguridad y ayuda con tu banca en línea.</p>
        </section>
      </main>
    </>
  )
}

export default App
