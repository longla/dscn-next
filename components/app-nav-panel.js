
import React from 'react';
class AppNavPanel extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const appNav = (<nav>
            <a href="/thongdiep" className={"nav-item"}>Thông Điệp</a>
            <a href="/chiase" className={"nav-item"}>Chia Sẻ</a>
            <a href="/blog" className={"nav-item"}>Blog</a>
            <a href="/annoucement" className={"nav-item"}>Thông Báo</a>
        </nav>);
        const appNavPanel = (<div className={'app-nav-panel'}>
            <div className={'app-nav-panel__close'}>
                <a onClick={()=>{this.props.onClosed()}}>
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