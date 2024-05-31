import { BrowserRouter, Route, Routes } from "react-router-dom"
import { LoginPage } from "@/pages/LoginPage"
import { UserInformationList } from "@/pages/UserInformationList"

export const AppRouter = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<LoginPage />}></Route>
				<Route path="/user-data" element={<UserInformationList />}></Route>
			</Routes>
		</BrowserRouter>
	)
}