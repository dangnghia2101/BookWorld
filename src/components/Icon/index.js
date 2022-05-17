import React, {memo} from 'react';
import {NameIconComponents} from './config';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Foundation from 'react-native-vector-icons/Foundation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Octicons from 'react-native-vector-icons/Octicons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Zocial from 'react-native-vector-icons/Zocial';
function IconView(props) {
  const {name, component, color, size} = props;

  const showIcon = () => {
    let html = null;
    let colorConfig = color ? color : 'black';
    if (component === NameIconComponents.AntDesign) {
      html = <AntDesign name={name} size={size} color={colorConfig} />;
    } else if (component === NameIconComponents.Entypo) {
      html = <Entypo name={name} size={size} color={colorConfig} />;
    } else if (component === NameIconComponents.EvilIcons) {
      html = <EvilIcons name={name} size={size} color={colorConfig} />;
    } else if (component === NameIconComponents.Feather) {
      html = <Feather name={name} size={size} color={colorConfig} />;
    } else if (component === NameIconComponents.FontAwesome) {
      html = <FontAwesome name={name} size={size} color={colorConfig} />;
    } else if (component === NameIconComponents.FontAwesome5) {
      html = <FontAwesome5 name={name} size={size} color={colorConfig} />;
    } else if (component === NameIconComponents.Fontisto) {
      html = <Fontisto name={name} size={size} color={colorConfig} />;
    } else if (component === NameIconComponents.Foundation) {
      html = <Foundation name={name} size={size} color={colorConfig} />;
    } else if (component === NameIconComponents.Ionicons) {
      html = <Ionicons name={name} size={size} color={colorConfig} />;
    } else if (component === NameIconComponents.MaterialCommunityIcons) {
      html = (
        <MaterialCommunityIcons name={name} size={size} color={colorConfig} />
      );
    } else if (component === NameIconComponents.MaterialIcons) {
      html = <MaterialIcons name={name} size={size} color={colorConfig} />;
    } else if (component === NameIconComponents.Octicons) {
      html = <Octicons name={name} size={size} color={colorConfig} />;
    } else if (component === NameIconComponents.SimpleLineIcons) {
      html = <SimpleLineIcons name={name} size={size} color={colorConfig} />;
    } else if (component === NameIconComponents.Zocial) {
      html = <Zocial name={name} size={size} color={colorConfig} />;
    }
    return html;
  };

  return showIcon();
}

export default memo(IconView);
