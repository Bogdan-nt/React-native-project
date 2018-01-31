import React, { Component } from 'react';
import { View, Button } from 'react-native';
import { VictoryBar, VictoryChart, VictoryAxis, VictoryTheme } from "victory-native";
import User from '../login/User';

export default class CarDetails extends Component {
  
  
  constructor(props) {
    super(props);
    this.state = {
      sources: []
    }
    this.getSources = this.getSources.bind(this)
  }
  componentWillMount() {
    this.getSources();
  }
  
  getSources = () => {
    // this.setState({showProgress: true});
    // AsyncStorage.getItem('@PPDM:Sources')
    //   .then(req => JSON.parse(req))
    //   .then(json => {
    //     if(!json)
    //       sources = [];
    //     else
    //       sources = json;
    
    //       this.setState({sources: sources, showProgress: false});
    //   })
    User.getSources().then(results => {
      results.json().then(sources => {
        new_sources = [];
        
        for(let i =0; i<sources.length; i++) {
          let source = sources[i];
          source.value = "" + source.value;
          source.id = "" + source.value;
          new_sources.push(source);
        }
        
        this.setState({ sources: new_sources, showProgress: false })
      })
    })
  }
  
  render() {
    return (
      <View>
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
        data={this.state.sources}
        x="name"
        y="value"
        />
        </VictoryChart>
        <Button title="Show car location"  onPress={ () => this.props.navigation.navigate('Register') } color="#2196F3" />
      </View>
    )
  }
}
