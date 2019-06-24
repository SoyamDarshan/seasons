import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';
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

    // constructor equivalent
    state = { lat: null, errorMessage: ''};

    componentDidMount() {
        console.log('My component was rendered to the screen');
        window.navigator.geolocation.getCurrentPosition(
            // We called setState
            position => { this.setState({ lat: position.coords.latitude })},
            //err => console.log(err)
            err => {this.setState({ errorMessage: err.message });}
        );
    }

    componentDidUpdate() {
        console.log('My component was updated on the screen')
    }

    renderContent(){
        if ( this.state.errorMessage && !this.state.lat ){
            return <div>Error: { this.state.errorMessage }</div>;
        }
        if ( !this.state.errorMessage && this.state.lat ){
            return <SeasonDisplay lat={this.state.lat} />;
        }
        return <Spinner message="Please accept location request"/>;
    }

    // React says we have to define render!
    render() {
     return (
         <div className="border red">{ this.renderContent() }</div>
     );       
    }
}


ReactDOM.render(
    <App />, document.querySelector('#root')
);
