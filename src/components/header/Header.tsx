import './Header.css'
import biLogo from '../../assets/logo_BI-blanco.png'

export const Header = () => {
	return (
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
	)
}