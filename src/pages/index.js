import Link from 'next/link';
import Header from '../components/header';
import Footer from '../components/footer';
import Flexipage from '../components/flexipage';

export default function Home() {
    return (
        <div>
            <div id="wrap" class="background-color-org">
                <Header />
                <div id="container">
                    <h2>Hello World!!</h2>
                    <p> Click <Link href="/about">this</Link> sssss</p>
                    <Flexipage />
                </div>
                <Footer />
            </div>
        </div>
    );
}