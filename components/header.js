
const Header = () => (
    <div className={"app-nav"}>
        <div className={"nav-bar"}>
            <div>
                <a className={'page-icon'} href="/">DSCN</a>
            </div>
            <a className={'nav-toggle'}>
                <i className={"fas fa-bars icon-show"} />
            </a>

        </div>
        <nav>
            <a href="/thongdiep" className={"nav-item"}>Thông Điệp</a>
            <a href="/chiase" className={"nav-item"}>Chia Sẻ</a>
            <a href="/blog" className={"nav-item"}>Blog</a>
            <a href="/annoucement" className={"nav-item"}>Thong Bao</a>
        </nav>
    </div>

);
export default Header;
