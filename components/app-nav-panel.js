
import React from 'react';
import Link from 'next/link';

class AppNavPanel extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const appNav = (<nav>
            <Link href="/thongdiep">
                <a className={"nav-item"}>Thông Điệp</a>
            </Link>
            <Link href="/chiase">
                <a className={"nav-item"}>Chia Sẻ</a>
            </Link>
            <Link href="/blog">
                <a className={"nav-item"}>Blog</a>
            </Link>
            <Link href="/annoucement">
                <a className={"nav-item"}>Thông Báo</a>
            </Link>

        </nav>);
        const appNavPanel = (<div className={'app-nav-panel'}>
            <div className={'app-nav-panel__close'}>
                <a onClick={() => { this.props.onClosed() }}>
                    <i className={"fas fa-times"} />
                </a>
            </div>

            {appNav}
        </div>);
        return (
            <>
                {this.props.show ? appNavPanel : null}
            </>
        )
    }
}

export default AppNavPanel;