import React from 'react';
import {Button, Text, View} from 'react-native';

const State_props = ({ name, desc }) => {
  return (
    <View>
      <Text style={{fontSize: 28, fontWeight: 'bold'}}>
        Name: {name}
      </Text>
      <Text style={{fontSize: 28, fontWeight: 'bold'}}>
        Desc: {desc}
      </Text>
    </View>
  );
};

// class State_props extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       count: 0
//     }
//   }

//   increaseCount = () => {
//     this.setState({
//       count: this.state.count + 1
//     })
//   }

//   decreaseCount = () => {
//     this.setState({
//       count: this.state.count - 1
//     })
//   }

//   render() {
//     return (
//       <View>
//         <Text style={{fontSize: 28, fontWeight: 'bold'}}>
//           Name: {this.props.name}
//         </Text>
//         <Text style={{fontSize: 28, fontWeight: 'bold'}}>
//           Desc: {this.props.desc}
//         </Text>
//         <Text style={{ fontSize: 28, fontWeight: "bold" }}>Count: {this.state.count}</Text>

//         <Button title="Increase Count" onPress={() => this.increaseCount()} />
//         <Text />
//         <Button title="Decrease Count" onPress={() => this.decreaseCount()} />
//       </View>
//     );
//   }
// }

export default State_props;
