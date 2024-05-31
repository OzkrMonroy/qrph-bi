import './App.css'
import { Form } from './components/form/Form'
import { Header } from './components/header/Header'


function App() {
	return (
		<>
			<Header />
			<main>
				<Form />

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
