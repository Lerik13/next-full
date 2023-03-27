import { useState } from "react"
import A from "../components/A";

const Users = () => {
	const [users, setUsers] = useState([
		{ id: 1, name: "petya" },
		{ id: 2, name: "vasya" },
	]);

	return (
		<div>
			<h1>Users List</h1>
			<ul>
				{users.map(user => 
					<li key={user.id}>
						<A href={`/users/${user.id}`} text={user.name} />
					</li>
				)}
			</ul>
		</div>
	)
}

export default Users