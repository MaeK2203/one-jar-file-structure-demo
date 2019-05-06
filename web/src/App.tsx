import * as React from 'react';
import axios from 'axios';
import './App.css';

interface Props {}

interface State {
  message: String
}


class App extends React.Component<Props, State> {
  constructor (props: Props) {
    super(props);
    this.state = {
      message: ""
    }
  }

  public componentDidMount(): void {
    axios.get('api/test')
      .then(response => this.setState({message: response.data}))
      .catch(error => console.log(error))
  }

  render() {
    return (
      <div className="App">
        <p>Message from backend: {this.state.message}</p>
      </div>
    )
  }
}

export default App;
