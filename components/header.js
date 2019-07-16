import Link from "next/link";

const Header = () => (
  <div className={"nav-bar"}>
    <div>
      <a className={'page-icon'} href="/">DSCN</a>
    </div>
    <nav>
      <Link  href="/thongdiep">
        <a className={"nav-item"}>Thong Diep</a>
      </Link>
      <Link  href="/chiase">
        <a className={"nav-item"}>Chia Se</a>
      </Link>
    </nav>
  </div>
);
export default Header;
