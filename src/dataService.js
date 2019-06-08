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
      day: true,
    };
  }


  componentDidUpdate(prevProps) {
    if (this.props.props.input !== prevProps.props.input) {
      this.search()
    }

    if(this.props.props.latitude !== prevProps.props.latitude) {
      this.getForecastByCoords()
    }

    if(this.props.props.day !== prevProps.props.day) {
      this.renderForecast()
    }
  }

  getForecastByCoords() {
    new Promise(async (resolve) => {
      await resolve(this.props)
    })
    .then(
      async () => {
        await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${this.props.props.latitude}&lon=${this.props.props.longitude}&appid=${APIkey}`)
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
        await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${this.props.props.input}&appid=${APIkey}`)
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

  dayNightFilter(data) {
    if(this.props.props.day) {
      return data.filter((item)=> { 
        return item.dt_txt.slice(11) === "12:00:00"
      })
    }
    else if (!this.props.props.day) {
      return data.filter((item)=> { 
        return item.dt_txt.slice(11) === "00:00:00" 
      })
    }
  }

  pictureFilter(props) {
    let weather = props.weather[0].main;
    let link = '';
    switch(weather) {
      case 'Clouds':  
        link = 'https://images.pexels.com/photos/414659/pexels-photo-414659.jpeg?auto=format%2Ccompress&cs=tinysrgb&dpr=2&h=750&w=1260'
        break;
    
      case 'Rain': 
        link = 'https://cdn.pixabay.com/photo/2015/07/02/10/45/raindrops-828954_960_720.jpg'
        break;

      case 'Snow': 
        link = 'https://cdn.pixabay.com/photo/2014/04/05/11/05/ice-314281_960_720.jpg'
        break;

      case 'Clear': 
        link = 'https://images.pexels.com/photos/912110/pexels-photo-912110.jpeg?auto=format%2Ccompress&cs=tinysrgb&dpr=2&h=750&w=1260'
        break;
      default:
        link = 'https://cdn.pixabay.com/photo/2014/08/27/15/05/clouds-429228_960_720.jpg'
    };
    return link;

  }

  renderForecast() {
    let forecastData = this.state.items.list
    let filteredData = this.dayNightFilter(forecastData)
    const list = filteredData.map( item=>{
      return (
        <div key={item.dt} className="card-deck">
          <div  className="card" styles={{width: "18rem;"}}> 
            <img src={this.pictureFilter(item)}
              className="card-img-top" 
              alt="...">
            </img>
            <div className="card-body">
              <div className="card-text">
                <div>{item.dt_txt.slice(0,10)}</div>
                <div>{item.weather[0].description}</div>
                <div>Temperature is {item.main.temp} F </div>
                <div>Athmospheric pressure is {item.main.pressure} mbar </div>
              </div>
            </div>
          </div>
        </div>
      )
    })
    return (
        <div className="card-deck">
          {list}
        </div>
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
          <div>
            <h4 className="cityName">
              Weather forecast for {this.state.items.city.name}
            </h4>
            {this.renderForecast()}
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
