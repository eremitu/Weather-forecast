import React from 'react';


export class Search extends React.Component {
constructor (props) {
    super(props)

    this.state = {
        input: '',
    }

}

handleSubmit(event){
    event.preventDefault();
    console.log(this.state); // your function here
    }


handleChange(event) {
    this.setState({input: event.target.value})
    console.log(this.state)
}

preventDef(event) {
    event.preventDefault()
}

debounce(f, ms) {
    let timer = null;  
    return function (...args) {
      const onComplete = () => {
        f.apply(this, args);
        timer = null;
      }  
      if (timer) {
        clearTimeout(timer);
      }  
      timer = setTimeout(onComplete, ms);
    };
}




    render() {
        return (
            <div id="searchBar">
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <div className="form-group">
                        <input 
                            type="text" 
                            className="form-control" 
                            id="searchForm" 
                            placeholder="Where do you live?"
                            value={this.state.input}
                            onChange={this.handleChange.bind(this)}
                           
                        >
                        </input>
                    </div>
                </form>
                <button 
                    type="submit" 
                    className="btn btn-primary searchButton"
                    onClick={this.handleSubmit.bind(this)}
                >
                    Search
                </button>
            </div> 
        )
    }
}