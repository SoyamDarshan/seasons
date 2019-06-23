import React from 'react';
import ReactDOM from 'react-dom';

/*
//Function based implementation
const App = () => {
    window.navigator.geolocation.getCurrentPosition(
        (position) => console.log(position),
        (err) => console.log(err)
    );
    return <div>Latitude: </div>;
};
*/
//Class based implementation
class App extends React.Component {

    constructor(props) {
        super(props);
        
        //The only time we do direct assignment to this.state
        this.state = { lat: null };
    
        window.navigator.geolocation.getCurrentPosition(
            (position) => { 
                this.setState({ lat: position.coords.latitude })
            },
            (err) => console.log(err)
        );
    }

    // React says we have to define render!
    render() {
        return <div>Latitude: { this.state.lat }</div>
    }
}

ReactDOM.render(
    <App />, document.querySelector('#root')
);
