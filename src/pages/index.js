import Link from 'next/link';

export default function Home() {
    return (
        <div>
            <h2>Hello World!!</h2>
            <p> Click <Link href="/about"><a>this</a></Link> to move in About.js</p>
        </div>
    );
}