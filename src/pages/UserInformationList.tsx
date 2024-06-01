import { Table } from "@/components/table/Table"
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
		<div className="align-content-center">
			<h1>Información recopilada:</h1>
			<Table usersData={usersData} />
		</div>
	)
}