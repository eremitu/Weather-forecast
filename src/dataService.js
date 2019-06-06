import React from 'react';
import {APIkey} from './const.js'
import _ from 'lodash';



export class DataService extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        error: null,
        isLoaded: false,
        items: [],
        input: '',
      };
      this.componentDidMount = this.componentDidMount.bind(this);
    }

    componentDidUpdate(prevProps) {
      console.log(this.props.props.input)
      if (this.props.props.input !== prevProps.props.input) {
        console.log(this.props.input)
        this.search()
      }
    }

    componentDidMount() {
      new Promise(async (resolve) => {
          await setTimeout(() => {
            resolve(this.props)
          }, 1000)
        })
        .then(
          async () => {
            await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${this.props.props.latitude}&lon=${this.props.props.longitude}&appid=${APIkey}`)
              .then(async (res) => await res.json())
              .then(
                (result) => {
                  console.log(result)
                  this.setState({
                    isLoaded: true,
                    items: result
                  });

                },
                (error) => {
                  this.setState({
                    isLoaded: true,
                    error
                  });
                }
              )
          }
        )
    }

  /*componentDidUpdate() {
    let response = fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.props.props.input}&appid=${APIkey}`)
      if (response.ok) { 
        let json = response.json();
        this.setState({
          isLoaded: true,
          items: json
        });
      } else {
        this.setState({
          isLoaded: true,
          error: response.status
        });
        console.log("HTTP-Error: " + response.status);
      }
    
  }*/
  search() {

    new Promise(async (resolve) => {
      await setTimeout(() => {
        resolve(this.props)
      }, 1000)
    })
    .then(
      async () => {
        await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.props.props.input}&appid=${APIkey}`)
          .then(async (res) => await res.json())
          .then(
            (result) => {
              console.log(result)
              this.setState({
                isLoaded: true,
                items: result
              });
            },
            (error) => {
              this.setState({
                isLoaded: true,
                error
              });
            }
          )
      }
    )



/*
      let response = fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.props.props.input}&appid=${APIkey}`)
      if (response.ok) {
        let json2 = response.json();
        this.setState({
          isLoaded: true,
          items: json2
        });
        console.log(response);
      } else {
        this.setState({
          isLoaded: true,
          error: response.status
        });

        console.log("HTTP-Error: " + response.status);
      }


  console.log('errrrorrr')
*/

}

  render() {
    const {
      error,
      isLoaded,
      items,
      input
    } = this.state;
    if (this.state.error != null) {
      return <div className="container-fluid data text-center">API Server is not responding </div>;
    } else if (!isLoaded) {
      return (
      <div className="text-center">
          <div className="spinner-border" role="status">
              <span className="sr-only">Loading...</span>
          </div>
      </div>);
    } else if (!(_.isUndefined(items))) {
        return (
          <div className="container-fluid data">
            In {items.name}.
            Temperature now is {items.main.temp} F
            Athmospheric pressure is {items.main.pressure} mbar
          </div>
        )
      }
      else {
      return (
          <div className="container-fluid data">
            Unable to get your GeoLocation or server went wrong
          </div> 
      );
  }

}
}

// You are in {items.name ? items.name : 'nowhere'}.
// Temperature now is {items.main.temp ? items.main.temp : '??'} F
// Athmospheric pressure is {items.main.pressure ? items.main.pressure : 'nowhere'}

// You are in {_.isUndefined(items) !== true ? items.name : 'nowhere'}.
// Temperature now is {!_.isUndefined(items) !== true  ? items.main.temp : '??'} F
// Athmospheric pressure is {!_.isUndefined(items) !== true  ? items.main.pressure : '??'} mbar 