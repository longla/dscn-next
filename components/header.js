import Link from "next/link";

const Header = ()=>(
    <div className={'nav-bar'}>
        <div>
            <Link href="/">DSCN</Link>
        </div>
        <nav>
        <Link className={'nav-item'} href="#thong-diep">Thong Diep</Link>
        <Link className={'nav-item'} href="#chia-se">Chia Se</Link>
        </nav>

    </div>
);
export default Header;