import React from 'react';
export default class extends React.Component {
    constructor(props) {
        super(props);
        this.state = { isNavShown: false };
        // This binding is necessary to make `this` work in the callback
        this.navToggleClickHandler = this.navToggleClickHandler.bind(this);
    }
    navToggleClickHandler() {

        this.setState({
            isNavShown: !this.state.isNavShown
        });
    }
    render() {
        const isNavShown = this.state.isNavShown;
        const appNavPanel = (<nav>
                        <a href="/thongdiep" className={"nav-item"}>Thông Điệp</a>
                        <a href="/chiase" className={"nav-item"}>Chia Sẻ</a>
                        <a href="/blog" className={"nav-item"}>Blog</a>
                        <a href="/annoucement" className={"nav-item"}>Thông Báo</a>
                    </nav>);
        return (

            <div className={"app-nav"}>
                <div className={"nav-bar"}>
                    <div>
                        <a className={'page-icon'} href="/">DSCN</a>
                    </div>
                    <a onClick={this.navToggleClickHandler} className={'nav-toggle'}>
                        <i className={"fas fa-bars icon-show"} />
                    </a>

                </div>
                {
                    isNavShown ? appNavPanel : null
                }

            </div>
        )
    }
}
