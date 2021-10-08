import { FormEvent, useState } from "react";
import { useUsers } from "../../hooks/useUsers";


export function UsersForm() { 
	const { createUser } = useUsers();
	const [username, setUsername] = useState("");
	const [email, setEmail] = useState("");

	async function handleSubmit(event: FormEvent) {
		event.preventDefault(); 
		createUser({ username, email });
	}

    return (
        <>
            <form onSubmit={handleSubmit} >
				<input type="text" onChange={ event => setUsername(event.target.value) } placeholder="Nome"></input>
				<input type="text" onChange={ event => setEmail(event.target.value) } placeholder="E-mail"></input>
				<input type="submit" value="Enviar" />
			</form>          
        </>
    );
}