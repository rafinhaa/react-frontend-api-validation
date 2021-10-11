import { UsersForm } from "./components/UsersForm";
import { UsersTable } from "./components/UsersTable";
import { UsersProvider } from "./hooks/useUsers"
import { ToastContainer } from 'react-toastify';
import GlobalStyles from './styles/globals';

export default function App() {

	return (
		<UsersProvider>
			<h1>Olá Mundo!</h1>
			<UsersForm/>
			<UsersTable/>
			<GlobalStyles/>
			<ToastContainer autoClose={3000} />
		</UsersProvider>
	);
}