import React, { Component } from 'react';
import { VictoryBar, VictoryChart, VictoryAxis, VictoryTheme } from "victory-native";

const data = [
  { quarter: "la", earnings: 13000 },
  { quarter: "ba", earnings: 16500 },
  { quarter: "ca", earnings: 14250 },
  { quarter: "da", earnings: 19000 }
];

export default class CarDetails extends Component {
  
    
  constructor(props) {
    super(props);
    // this.state = {
    //   sources: []
    // }
    // this.getSources = this.getSources.bind(this)
  }
  // componentWillMount() {
  //   this.getSources();
  // }

  // getSources = () => {
  //     this.setState({showProgress: true});
  //     AsyncStorage.getItem('@PPDM:Sources')
  //       .then(req => JSON.parse(req))
  //       .then(json => {
  //         if(!json)
  //           sources = [];
  //         else
  //           sources = json;

  //           this.setState({sources: sources, showProgress: false});
  //       })
  //   // User.getSources().then(results => {
  //   //   results.json().then(sources => {
  //   //     console.log(sources);
  //   //     this.setState({ sources: sources, showProgress: false })
  //   //   })
  //   // })
  // }

  render() {
    return (
      <VictoryChart
        domainPadding={20}
        theme={VictoryTheme.material}
        >
         <VictoryAxis
          // tickValues specifies both the number of ticks and where
          // they are placed on the axis
        />
        <VictoryAxis
          dependentAxis
          // tickFormat specifies how ticks should be displayed
        />
        <VictoryBar
          data={data}
          x="quarter"
          y="earnings"
        />
      </VictoryChart>
    )
  }
}
