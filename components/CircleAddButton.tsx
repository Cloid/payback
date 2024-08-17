import React from 'react';
import {TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import DropDownMenu from './DropDownMenu';

const handleDropdownTriggerPress = (key: string) => {
    console.log('dd trigger pressed ', key);
  };

const CircleAddButton = () => {
    return(
    <Icon name={"add-outline"}  size={30} color="#01a699"/>        
    )
};

export default CircleAddButton;