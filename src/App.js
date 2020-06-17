import React, {Component} from 'react';
import './App.css';
import api from './services/api';
import Card from './components/card'

class App extends Component {
  state = {
    heroes: []
  }

  componentDidMount() {
    api.get().then(response => {
        console.log(response)
        const data = response.data.data.results;
        this.setState({heroes: data})
    })
  }

    render() {
      return (
        <div className="App">
        <h1>Marvel Heroes</h1>
          <div className="card-columns">
       {
         this.state.heroes.map((hero) => (
            <Card 
            key ={hero.id}
              hero= {hero}
            />
         ))
       }
          </div>

     </div>
      );
    }
}


export default App;
