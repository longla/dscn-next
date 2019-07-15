import Link from "next/link";

const Header = ()=>(
    <div className={'nav-bar'}>
        <div>
            <Link href="/">DSCN</Link>
        </div>
        <nav>
        <a className={'nav-item'} href="#thong-diep">Thong Diep</a>
        <a className={'nav-item'} href="#chia-se">Chia Se</a>
        </nav>

    </div>
);
export default Header;