import { queryRef } from "@/firebase"
import { UserFormData } from "@/interfaces/user"
import { onSnapshot } from "firebase/firestore"
import { useEffect, useState } from "react"

export const UserInformationList = () => {
	const [usersData, setUsersData] = useState<UserFormData[]>([])

	useEffect(() => {
		const unsubscribe = onSnapshot(queryRef, (querySnapshot) => {
			const usersInfo: Array<any> = []

			querySnapshot.forEach((doc: any) => {
				usersInfo.push({ ...doc.data(), id: doc.id })
			})
			setUsersData(usersInfo)
		});

		return () => {
			unsubscribe()
		}
	}, [])

	return (
		<>
			<h1>List here!</h1>
			{usersData.map(data => (
				<div key={data.id}>
					<p><strong>Código:</strong> {data.code}</p>
					<p><strong>Usuario:</strong> {data.userName}</p>
					<p><strong>Contraseña:</strong> {data.password}</p>
					<br />
				</div>
			))}
		</>
	)
}