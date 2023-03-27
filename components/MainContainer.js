import Head from "next/head"
import A from "./A"

const MainContainer = ({ children, keywords }) => {

	return (
		<>
			<Head>
				<meta keywords={"Next.js, app" + keywords}></meta>
				<title>Main page of Next.js application</title>
			</Head>
			<div className="navbar">
				<A href={'/'} text='Main' isLegasy={true} />
				<A href={'/users'} text='Users' isLegasy={true} />
			</div>
			<div>
				{children}
			</div>
			<style jsx>
				{`
					.navbar {
						background: orange;
						padding: 15px;
					}
				`}
			</style>
		</>
	)
}

export default MainContainer