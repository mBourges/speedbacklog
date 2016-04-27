import React from 'react';

const IssueList = ({ issues, refresh, errorMessage }) => {
    const handleClick = (event) => {
        event.preventDefault();
        event.stopPropagation();
        
        refresh();
    };
    
    const issueList = issues.map((issue, index) => {
        return (<div className="item" key={ index }>
            <div className="right floated content">
                <div className="description">@{ issue.get('createdAt') } By { issue.get('Author') }</div>
            </div>
            <div className="content">
                <a className="header">{ issue.get('Title') }</a>
            </div>
        </div>);
    });
    
    return (<div>
         <div className="ui negative message">
            <i className="close icon"></i>
            <div className="header">
                Sorry, error while fetching issues
            </div>
            <p>{ errorMessage }</p>
        </div>
        <div className="ui top attached menu">
            <div className="ui button icon item" onClick={ handleClick }>
                <i className="repeat icon"></i>
            </div>
            <div className="ui item">
                Issues
            </div>
            <div className="right menu">
                <div className="ui button icon item" onClick={ handleClick }>
                    <i className="plus icon"></i>
                </div>
                <div className="ui right aligned category search item">
                    <div className="ui transparent icon input">
                        <input className="prompt" type="text" placeholder="Search issue..." />
                        <i className="search link icon"></i>
                    </div>
                    <div className="results"></div>
                </div>
            </div>
        </div>
        <div className="ui bottom attached segment">
            <ul className="ui relaxed divided list">
                { issueList }
            </ul>
        </div>
    </div>);
};

export default IssueList;



