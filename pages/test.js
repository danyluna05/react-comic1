var React = require('react');
var ReactDOM = require('react-dom');
global.jQuery = require('jquery');
require('bootstrap');


class Test extends React.Component {
    render(){
        return <div className="row">testing!!!</div>;
    }
}

ReactDOM.render(<Test />, document.getElementById('root'));

export default Test;

