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
        const pageTitleSection = (title) => (
            <>

                <a className={'nav-page-title'}>
                <span className={'devider'}> | </span>
                {title}</a>
            </>
        );
        return (

            <div className={'app-nav'}>
                <div className={this.props.noBg?"nav-bar nav-bar--no-bg":"nav-bar"}>
                    <div>
                        <a className={'page-icon'} href="/">DSCN</a>
                        {this.props.pageTitle? pageTitleSection(this.props.pageTitle): null}
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
