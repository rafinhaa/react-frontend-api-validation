import { useUsers } from "../../hooks/useUsers";

export function UsersTable() { 
    const {users, deleteUser} = useUsers();
    return (
        <>
            <table>
				<thead>
					<tr>
						<th>#</th>
						<th>Usuário</th>
						<th>E-mail</th>
						<th>Opções</th>
					</tr>					
				</thead>
				<tbody>
					{
						users.map(user => (
							<tr key={user.id}>
                                <td>{user.id}</td>
								<td>{user.username}</td>								
								<td>{user.email}</td>
								<td>
									<button onClick={ () => deleteUser(user.id)}>X</button>
								</td>
							</tr>
							)
						)						
					}
				</tbody>
			</table>          
        </>
    );
}