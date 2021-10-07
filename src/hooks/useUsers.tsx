import { cloneElement, createContext, useContext, useEffect, useState } from "react";
import { api } from "../services/api";

interface Users {
	id: number,
	username: string,
	email: string
}

interface UsersContextData {
	users: Users[]
}

interface UsersProviderProps {
	children: React.ReactNode
}

const UsersContext = createContext<UsersContextData>(
    {} as UsersContextData
);

export function UsersProvider({ children }: UsersProviderProps) {
	const [users, setUsers] = useState<Users[]>([]);


	useEffect(() => {
		api.get('list')		
		.then(response => setUsers(response.data.data ));
	}, []);

	return (
		<UsersContext.Provider value={{users}}>
			{children}
		</UsersContext.Provider>
	);
}

export function useUsers() {
	const context = useContext(UsersContext);

	return context;
}