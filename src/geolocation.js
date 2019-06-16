import React from 'react';


export class Geo extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            latitude: null,
            longitude: null,
            error: null,
            locationUndefined: null,
            isLoaded: null,
        }

    }

    componentDidMount() {
        this.getGeo()
    }

    getGeo() {
            return new Promise((resolve, reject) => {
                navigator.geolocation.getCurrentPosition(
                    position => {
                        resolve(
                            this.setState({
                                latitude: position.coords.latitude,
                                longitude: position.coords.longitude,
                                locationUndefined: false
                            },
                                () => this.props.liftingData(this.state.latitude, this.state.longitude, this.state.locationUndefined)
                            )
                        )
                    },
                    error => {
                        reject(
                            this.setState({
                                error: error.message,
                                isLoaded: true,
                                locationUndefined: true,
                            },
                            () => this.props.liftingData(this.error, this.isLoaded, this.state.locationUndefined)
                            )
                        )
                    }
                );
            }).catch(error => error);
        }

    

    render() {
        return ( 
        <div className = "geoButton" >
            <div > 
                {
                this.state.error ? ' ' :
                    ('Your coordinates are: latitude:' +
                    this.state.latitude +
                    '; longitude   ' +
                    this.state.longitude)
                } 
            </div> 
        </div>  
        )
    }
}
