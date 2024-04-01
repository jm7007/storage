import Link from 'next/link';
function Header() {
    return (
        <header>
            <nav>
                <Link href="/">홈</Link> |
                <Link href="/about">소개</Link>
            </nav>
        </header>
    );
}

export default Header;