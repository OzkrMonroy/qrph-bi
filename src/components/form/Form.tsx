import './Form.css'

export const Form = () => {
	return (
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
	)
}