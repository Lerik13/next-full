import { useState } from "react"
import A from "../components/A";
import MainContainer from "../components/MainContainer";

const Users = ({ users }) => {
	return (
		<MainContainer keywords={"Users List"}>
			<h1>Users List</h1>
			<ul>
				{users.map(user => 
					<li key={user.id}>
						<A href={`/users/${user.id}`} text={user.name} />
					</li>
				)}
			</ul>
		</MainContainer>
	)
}

export default Users

// Static Generation - render all pages at build time
export async function getStaticProps() {
	const response = await fetch(`https://jsonplaceholder.typicode.com/users`)
	const users = await response.json()
	
	return {
		props: {users}, // will be passed to the page component as props
	}
}