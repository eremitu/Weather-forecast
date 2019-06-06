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
    if (this.props.props.input !== prevProps.props.input) {
      console.log("АСТАНАВИСЬ")
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

  render() {
    const {
      isLoaded,
      items,
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
