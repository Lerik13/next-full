import Head from "next/head"
import Link from "next/link"
import A from "../components/A"
import MainContainer from "../components/MainContainer"

const Index = () => {
	return (
	<>
		<Head>
			<meta keywords="Next.js, test, app"></meta>
			<title>Main page of Next.js application</title>
		</Head>
		<div>
			<div className="navbar">
				<A href={'/'} text='Main' isLegasy={true} />
				<A href={'/users'} text='Users' isLegasy={true} />
			</div>
			<h1>Main Page</h1>
			<style jsx>
				{`
					.navbar {
						background: orange;
						padding: 15px;
					}
				`}
			</style>
		</div>
	</>
	)
}

export default Index;