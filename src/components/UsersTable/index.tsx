import { useUsers } from "../../hooks/useUsers";

export function UsersTable() { 
    const {users} = useUsers();
    return (
        <>
            <table>
				<thead>
					<tr>
						<th>#</th>
						<th>Usuário</th>
						<th>E-mail</th>
					</tr>					
				</thead>
				<tbody>
					{
						users.map(users => (
							<tr key={users.id}>
                                <td>{users.id}</td>
								<td>{users.username}</td>								
								<td>{users.email}</td>
							</tr>
							)
						)						
					}
				</tbody>
			</table>          
        </>
    );
}