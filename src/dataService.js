import React from 'react';
import {APIkey} from './const.js'


export class DataService extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: false,
      responseStatus: null,
      isLoaded: false,
      items: [],
      input: '',
      day: true,
       locationUndefined: null,
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
         let response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${this.props.props.latitude}&lon=${this.props.props.longitude}&appid=${APIkey}`)
          if(response.ok) {
            let result = await response.json()
            this.setState({
              isLoaded: true,
              items: result
            });
          }
          else {
            this.setState({
              isLoaded: true,
              error: response.status,
              response: response.status
            });
          }
      }
    )
    .then(
        (result) => {
          this.setState({
            isLoaded: true,
          });
        },
        (error) => {

          this.setState({
            isLoaded: true,
            error: error
          });
        }
      )
  }

  search() {
    new Promise(async (resolve) => {
      await resolve(this.props)
    })
    .then(
      async () => {
         let response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${this.props.props.input}&appid=${APIkey}`)
          if(response.ok) {
            let result = await response.json()
            console.log(result)
            this.setState({
              isLoaded: true,
              items: result
            });
          }
          else {
            this.setState({
              isLoaded: true,
              error: response.status,
              response: response.status
            });
          }
      }
    )
    .then(
        (result) => {
          this.setState({
            isLoaded: true,
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error: error
          });
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
                <div>Temperature is {Math.round(item.main.temp - 273.15)  } C </div>
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
    } = this.state;
    if (this.state.error && this.state.items.length === 0 ) {
      return <div className="container-fluid data text-center">unable to get your GeoLocation</div>;
    } else if (!isLoaded) {
        return (
        <div className="text-center">
            <div className="spinner-border" role="status">
                <span className="sr-only"></span>
            </div>
        </div>);
    } else {
        return (
          <div>
            <h4 className="cityName">
              5 Days Weather Forecast: {this.state.items.city.name}
            </h4>
            {this.renderForecast()}
          </div>
        )
      }

    }
}