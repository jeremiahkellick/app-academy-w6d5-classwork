import React from 'react';

class Tabs extends React.Component {
  constructor(props) {
    super(props);
    this.state = { currentTabIndex: 0 };
  }

  handleClick(i) {
    this.setState({ currentTabIndex: i });
  }

  currentTab() {
    return this.props.tabs[this.state.currentTabIndex];
  }

  render(){
    return (
      <div className="widget tabs">
        <ul>
          {this.props.tabs.map((tab, i) =>
            <li key={tab.title}>
              <h1 onClick={this.handleClick.bind(this, i)}>
                {tab.title}
              </h1>
            </li>
          )}
        </ul>
        <p>{ this.currentTab().content }</p>
      </div>
    );
  }
}

export default Tabs;
