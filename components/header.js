import React from 'react';
import AppNavPanel  from './app-nav-panel';
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
        const appNavPanel = (
            <AppNavPanel show={this.state.isNavShown} onClosed={this.navToggleClickHandler}> </AppNavPanel>
        );
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
                    appNavPanel
                }

            </div>
        )
    }
}
