import { createContext, useContext, useEffect, useState } from "react";
import { api } from "../services/api";
import { toast } from 'react-toastify';
import { AxiosResponse } from "axios";

interface User {
	id: number,
	username: string,
	email: string
}

type UsersInput = Omit<User, "id">;

interface UsersContextData {
	users: User[],
	createUser: (user: UsersInput) => any
	deleteUser: (id: Number) => void
}

interface UsersProviderProps {
	children: React.ReactNode
}

const UsersContext = createContext<UsersContextData>(
	{} as UsersContextData
);

export function UsersProvider({ children }: UsersProviderProps) {
	const [users, setUsers] = useState<User[]>([]);

	async function createUser(user: UsersInput) {
		var bodyFormData = new FormData();
		bodyFormData.append('username', user.username);
		bodyFormData.append('email', user.email);

		return await api.post('add', bodyFormData).then(
			(response: AxiosResponse) => {
				if (response.status === 201) {
					toast.success(response.data.messages);
					const user = {
						id: response.data.data.id,
						username: response.data.data.username,
						email: response.data.data.email
					}
					setUsers([...users, user]);
					return response;
				}
			}
		).catch( (error) => {
			if (error.response) {
				const er = Object.entries(error.response.data.messages);
				er.map(([key, value]) => {
					toast.error(`${value}`);
				});
			} else if (error.request) {
				toast.error('Error in load data');
				console.log(error.request);
			} else {
				toast.error('Error in load data');
				console.log(error.message);				
			}	
			return error.response;
		});
	}

	async function deleteUser(id: Number) {
		await api.delete(`delete/${id}`).then(
			(response: AxiosResponse) => {
				if (response.status === 200) {
					const index = users.findIndex(user => user.id === id);
					users.splice(index, 1);			
					setUsers([...users]);
					toast.success(response.data.messages);
					return response;
				}
			}).catch( (error) => {
				if (error.response) {
					const er = Object.entries(error.response.data.messages);
					er.map(([key, value]) => {
						toast.error(`${value}`);
					});
				} else if (error.request) {
					toast.error('Error in load data');
					console.log(error.request);
				} else {
					toast.error('Error in load data');
					console.log(error.message);				
				}
			}			
		);
	}

	useEffect(() => {
		api.get('list')
			.then( (response: AxiosResponse) => {
				if (response.status === 200) {
					setUsers(response.data.data)
					toast.success(response.data.messages);
				}
			}).catch( (error) => {
				if (error.response) {
					const er = Object.entries(error.response.data.messages);
					er.map(([key, value]) => {
						toast.error(`${value}`);
					});
				} else if (error.request) {
					toast.error('Error in load data');
					console.log(error.request);
				} else {
					toast.error('Error in load data');
					console.log(error.message);				
				}
			});

		
	}, []);

	return (
		<UsersContext.Provider value={{ users, createUser, deleteUser }}>
			{children}
		</UsersContext.Provider>
	);
}

export function useUsers() {
	const context = useContext(UsersContext);

	return context;
}