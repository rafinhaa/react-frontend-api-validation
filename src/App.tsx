import { UsersTable } from "./components/UsersTable";
import { UsersProvider } from "./hooks/useUsers"

export default function App() {

	return (
		<UsersProvider>
			<h1>Olá Mundo!</h1>
			<UsersTable/>
		</UsersProvider>
	);
}