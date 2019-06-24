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
        this.state = { lat: null, errorMessage: '' };
    
        window.navigator.geolocation.getCurrentPosition(
            (position) => { 
                // We called setState
                this.setState({ lat: position.coords.latitude })
            },
            //err => console.log(err)
            err => {
                this.setState({ errorMessage: err.message });
            }
        );
    }

    // React says we have to define render!
    render() {

            if (this.state.errorMessage && !this.state.lat){
                return <div>Error: { this.state.errorMessage }</div>;
            }
            if (!this.state.errorMessage && this.state.lat ){
                return <div>Latitude: { this.state.lat }</div>;
            }
            return <div>Loading!</div>;
    }
}


ReactDOM.render(
    <App />, document.querySelector('#root')
);
