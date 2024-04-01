import Link from 'next/link';
function Header() {
    return (
        <header>
            <nav class="main-nav">
                <div class="nav-center">
                    <Link href="/" class="nav-link">홈</Link>
                    <Link href="/about" class="nav-link">소개</Link>
                    <Link href="/" class="nav-link">연락처</Link>
                </div>
            </nav>
        </header>
    );
}

export default Header;