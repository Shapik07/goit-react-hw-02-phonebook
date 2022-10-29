import { Component } from 'react';

class App extends Component {
  state = {
    contacts: [],
    name: '',
  };

  handleName = e => {
    this.setState({name: e.currentTarget.value})
  }

  render() {
    return (
      <form>
        <label>
          Name <input type="text" value={this.state.name} onChange={this.handleName} />
        </label>
      </form>
    )
  }
}

export default App