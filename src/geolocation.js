import React from 'react';


export class Geo extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            latitude: null,
            longitude: null
        }
        this.handleGetGeoClick = this.handleGetGeoClick.bind(this);
    }

    handleGetGeoClick() {
        this.getGeo()    
    }

    getGeo() {
        let getPosition = function (options) {
            return new Promise((resolve, reject) => {
              navigator.geolocation.getCurrentPosition(resolve, reject, options);
            });
        }
          
    getPosition()
        .then((position) => {
            this.coords = position
            return this.coords
        })
        .catch((err) => {
            alert(err.message);
        })
        .then((coords) => { 
            this.setState({ latitude: coords.coords.latitude, longitude: coords.coords.longitude},
                ()=>this.props.liftingData(this.state.latitude, this.state.longitude))
            return this.coords 
        });


    }

    render() {
        return (
            
        <div className="geoButton">
            <button className="geoButton-btn btn btn-primary btn-lg active" aria-pressed="true" onClick={this.handleGetGeoClick()}>
                    Get coords
            </button>
             
            <div onLoad={this.handleGetGeoClick()}> 
                Your latitude is:  {this.state.latitude ? this.state.latitude : '0.0'} ;     
                Your longitude is:  {this.state.longitude ? this.state.longitude : '0.0'}
            </div>
        </div>
        
        )
    }


}