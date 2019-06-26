import React from 'react';
import './App.css';


function getList() {
    return this.state.list.map((item) => {
      return (
          <div>
            {item}
          </div>
      );
    })
}

function selectRandom() {
  if (this.state.selected) {
    const randomName = this.state.list[Math.floor(Math.random()*this.state.list.length)];
    return (
        <div>
          {randomName}
        </div>
    )
  }
  return null;
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      list: [],
      show: false,
      selected: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
    this.setSelect = this.setSelect.bind(this);
    this.reset = this.reset.bind(this);
  }

  handleChange(event) {
    this.setState({
      value: event.target.value,
      show: false,
      selected: false

    });
  }

  handleAdd(event) {
    this.setState({
      list: this.state.list.concat([this.state.value]),
      selected: false
    });
    event.target.value = "";
    event.preventDefault();
  }

  reset(event) {
    this.setState({
      show: false,
      list: [],
      selected: false
    });
    event.preventDefault();
  }

  setSelect() {
    this.setState({
      selected: true,
    });
  }
  render() {
    return (
        <section>
        <form onSubmit={this.handleAdd}>
          <label>
            Name:
            <input type="text"  onChange={this.handleChange} />
          </label>
          <input type="button" value="Add" />

        </form>
          <button onClick={this.reset}>reset</button>
          {getList.call(this)}
          <button onClick={this.setSelect}>selectOne</button>
          {selectRandom.call(this)}

        </section>

    );
  }
}

export default App;
