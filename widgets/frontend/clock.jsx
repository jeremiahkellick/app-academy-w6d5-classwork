import React from 'react';

class Clock extends React.Component {
  constructor(props){
    super(props);
    this.state = {time: new Date()};
    this.tick = this.tick.bind(this);
  }

  tick(){
    this.setState({time:new Date()});
  }

  componentDidMount(){
    this.interval = setInterval(this.tick, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <div className="widget clock">
        <p>{this.state.time.toLocaleTimeString('en-US')}</p>
        <p>{this.state.time.toDateString()}</p>
      </div>
    );
  }
}
export default Clock;
