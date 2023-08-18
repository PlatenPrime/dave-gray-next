import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col items-center justify-center p-24">
			<h1>Hello World</h1>
			<Link href="/about">To about page</Link>
			<Link href="/users">To users page</Link>
		</main>
	)
}
