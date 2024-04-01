import Link from 'next/link';
import Header from '../components/header';
import Footer from '../components/footer';

export default function Home() {
    return (
        <div>
            <div class="main home-background-image">
                <Header />
                <h2>Hello World!!</h2>
                <p> Click <Link href="/about">this</Link> sssss</p>
                <Footer />
            </div>
        </div>
    );
}