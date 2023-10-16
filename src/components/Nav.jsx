import Link from 'next/link';
import React from 'react';

const Nav = () => {
	return (
		<nav className='bg-red-300 text-center'>
			<h1>This is my Nav</h1>
			<ul className=' flex justify-center gap-6'>
				<li>
					<Link href={'/about'}>About Us</Link>
				</li>
				<li>
					<Link href={'/'}>Home </Link>
				</li>
			</ul>
		</nav>
	);
};

export default Nav;
