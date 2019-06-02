import React from 'react';


export class Geo extends React.Component {
    /*constructor(props) {
        super(props)
    }*/

    getGeo() {
        let getPosition = function (options) {
            return new Promise(function (resolve, reject) {
              navigator.geolocation.getCurrentPosition(resolve, reject, options);
            });
        }
          
        getPosition()
            .then((position) => {
              console.log(position);
            })
            .catch((err) => {
              console.error(err.message);
        });
    }



    render() {
        return ( 
        <div>
           <button onClick={this.getGeo}>
                Get coords
            </button>
        </div>
        )
    }


}