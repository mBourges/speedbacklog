import React from 'react';
import Header from './header';

class CoreLayout extends React.Component {
    render() {
        return (<div className="app-container">
            <Header appName="Issues" />
            <div className="ui main container">
                { this.props.children }
            </div>
        </div>);
    }
}

export default CoreLayout;