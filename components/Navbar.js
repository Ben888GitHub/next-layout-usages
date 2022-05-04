import { useRouter } from 'next/router';
function Navbar() {
	const router = useRouter();

	return <button onClick={() => router.push('/')}>Home</button>;
}

export default Navbar;
