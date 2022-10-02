import React, {Component} from 'react';
import {Button, Text, View} from 'react-native';

class LifecycleMethods extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  componentDidMount() {
    alert('Component Did Mount');
  }

  componentDidUpdate() {
    alert("Component is Updated.")
    // this.setState({ count: 1 })
  }

  render() {
    return (
      <View>
        <Text style={{fontSize: 28}}>Lifecycle Methods</Text>
        <Text style={{fontSize: 28}}>Count {this.state.count}</Text>

        <Button
          title="Update State"
          onPress={() => this.setState({count: this.state.count + 1})}
        />
      </View>
    );
  }
}

export default LifecycleMethods;

// componentDidMount
// componentDidUpdate
// componentWillUnmount
