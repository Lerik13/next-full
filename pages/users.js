import Link from "next/link";
import { useState } from "react"

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
						<Link href={`/users/${user.id}`}>
							{user.name}
						</Link>
					</li>
				)}
			</ul>
		</div>
	)
}

export default Users