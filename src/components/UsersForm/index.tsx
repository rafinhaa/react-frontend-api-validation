import { AxiosResponse } from "axios";
import { FormEvent, useState } from "react";
import { toast } from "react-toastify";
import { useUsers } from "../../hooks/useUsers";
import { Container, Content } from "./styles";

export function UsersForm() { 
	const { createUser } = useUsers();
	const [username, setUsername] = useState("");
	const [email, setEmail] = useState("");

	async function handleSubmit(event: FormEvent) {
		event.preventDefault(); 
		await createUser({ username, email }).then( (resp: AxiosResponse) => resp.status === 201 ? clearFields() : '' );
	}

	function clearFields(){
		setEmail("");
		setUsername("");
	}
	
    return (
        <Container>
			<Content onSubmit={handleSubmit} >
				<input type="text" value={username} onChange={ event => setUsername(event.target.value) } placeholder="Nome"></input>
				<input type="text" value={email} onChange={ event => setEmail(event.target.value) } placeholder="E-mail"></input>
				<button type="submit" >Enviar</button>         
			</Content>
        </Container>
    );
}