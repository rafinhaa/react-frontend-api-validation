import { UsersForm } from "./components/UsersForm";
import { UsersTable } from "./components/UsersTable";
import { UsersProvider } from "./hooks/useUsers"
import { ToastContainer } from 'react-toastify';
import {GlobalStyle} from './styles/globals';
import { Header } from "./components/Header";

export default function App() {

	return (
		<UsersProvider>
			<Header/>
			<UsersForm/>
			<UsersTable/>
			<GlobalStyle/>
			<ToastContainer autoClose={3000} />
		</UsersProvider>
	);
}