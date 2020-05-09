const React = require('react');


class Default extends React.Component {
    render() {
        return(
            <html>
                <head>
                    <link rel="stylesheet" href="/css/normalize.css"/>
                    <link rel="stylesheet" href="/css/style.css"/>
                  
                    <title>Todo List</title>
                </head>
                <body>
                
                    {this.props.children}
                </body>
            </html>
        )
    }
}

module.exports = Default;