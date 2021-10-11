import { createContext, useContext, useEffect, useState } from "react";
import { api } from "../services/api";

interface Users {
	id: number,
	username: string,
	email: string
}

type UsersInput = Omit<Users, "id">;

interface UsersContextData {
	users: Users[],
	createUser: (user: UsersInput) => void
	deleteUser: (id: Number) => void
}

interface UsersProviderProps {
	children: React.ReactNode
}

const UsersContext = createContext<UsersContextData>(
    {} as UsersContextData
);

export function UsersProvider({ children }: UsersProviderProps) {
	const [users, setUsers] = useState<Users[]>([]);
	
	async function createUser(user: UsersInput) {
		var bodyFormData = new FormData();
		bodyFormData.append('username',user.username);
		bodyFormData.append('email',user.email);

		const response = await api.post('add', bodyFormData);
		if (response.status === 201){
			api.get('list')		
				.then(response => setUsers(response.data.data));
		}
	}

	async function deleteUser(id: Number) {		
		const response = await api.delete(`delete/${id}`)
		if (response.status === 200){
			const index = users.findIndex(user => user.id === id);
			users.splice(index, 1);
			setUsers([...users]);
		}
	}

	useEffect(() => {
		api.get('list')		
		.then(response => setUsers(response.data.data));
	}, [users]);

	return (
		<UsersContext.Provider value={{users, createUser, deleteUser}}>
			{children}
		</UsersContext.Provider>
	);
}

export function useUsers() {
	const context = useContext(UsersContext);

	return context;
}