import React from 'react';
import {
  AntDesign,
  Entypo,
  EvilIcons,
  Feather,
  FontAwesome,
  Foundation,
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons,
  Octicons,
  SimpleLineIcons,
  Zocial
} from '@expo/vector-icons';

import Colors from '../constants/Colors';

const Dummy = (props) => {
  switch (props.type) {
    case 'AntDesign': return <AntDesign {...props} />
    case 'Entypo': return <Entypo {...props} />
    case 'EvilIcons': return <EvilIcons {...props} />
    case 'Feather': return <Feather {...props} />
    case 'FontAwesome': return <FontAwesome {...props} />
    case 'Foundation': return <Foundation {...props} />
    case 'Ionicons': return <Ionicons {...props} />
    case 'MaterialCommunityIcons': return <MaterialCommunityIcons {...props} />
    case 'MaterialIcons': return <MaterialIcons {...props} />
    case 'Octicons': return <Octicons {...props} />
    case 'SimpleLineIcons': return <SimpleLineIcons {...props} />
    case 'Zocial': return <Zocial {...props} />
  }
}

export default class TabBarIcon extends React.Component {
  render() {
    return (
      <Dummy
        type={this.props.type}
        name={this.props.name}
        size={26}
        style={{ marginBottom: -3 }}
        color={this.props.focused ? Colors.tabIconSelected : Colors.tabIconDefault}
      />
    );
  }
}