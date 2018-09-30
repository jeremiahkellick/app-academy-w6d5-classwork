import React from 'react';
import ReactDOM from 'react-dom';
import Clock from './clock';
import Tabs from './tabs';
import Weather from './weather';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  ReactDOM.render(<Widgets/>, root);
});

const Widgets = (props) => (
  <div>
    <Clock/>
    <Tabs tabs={
        [
          {title: 'SumTitle', content: 'SUMCONTENT'},
          {title: 'ProductTitle', content: 'PRODUCTCONTENT'},
          {title: 'DividendTitle', content: 'DIVIDENDCONTENT'},
        ]
      }/>
    <Weather />
  </div>
);
