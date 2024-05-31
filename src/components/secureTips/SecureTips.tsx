import './SecureTips.css'

export const SecureTips = () => {
	return (
		<section className='tips-container bi-border-radious'>
			<h2 className='tips-title'>
				<span className='icon-shield'></span>
				{" "} Tips de Seguridad y ayuda
			</h2>
			<p className='tips-description'>Ingresa aquí para conocer tips de seguridad y ayuda con tu banca en línea.</p>
		</section>
	)
}