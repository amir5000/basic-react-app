import React, { Component } from 'react';
import './App.css';
import UserCards from './components/UserCards';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: []
    }
  }
  

  async componentDidMount(){
    const url = 'https://api.github.com/users?access_token=d25e799d954469fbc0f3470fe3311789aa1166ad&since=13893442';

    const data = await fetch(url).then(response => response.json()).then(data => data);
    this.setState({
      data
    });
  }


  render() {
    console.log(this.state.data);
    const { data } = this.state;
    return (
      <div className="container text-center py-5">
        <UserCards data={data} />
      </div>
    );
  }
}

export default App;
