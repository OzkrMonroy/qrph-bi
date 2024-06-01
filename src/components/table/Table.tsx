import './Table.css'
import { UserFormData } from "@/interfaces/user"

interface TableProps {
	usersData: UserFormData[]
}

export const Table = ({ usersData }: TableProps) => {
	return (
		<table>
			<thead>
				<tr>
					<th>Código</th>
					<th>Usuario</th>
					<th>Contraseña</th>
				</tr>
			</thead>
			<tbody>
				{usersData.map(user => (
					<tr key={user.id}>
						<td data-column="code">{user.code}</td>
						<td data-column="name">{user.userName}</td>
						<td data-column="password">{user.password}</td>
					</tr>

				))}
			</tbody>
		</table>
	)
}