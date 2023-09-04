import React from 'react';
import {Image} from 'react-native';
import Animated, {useAnimatedStyle} from 'react-native-reanimated';

const AccordionBasicIcon = props => {
  const {runAccordion, iconSize} = props;

  const iconStyle = useAnimatedStyle(() => ({
    transform: [{rotate: `${runAccordion.value * 180}deg`}],
  }));

  return (
    <Animated.View style={iconStyle}>
      <Image
        style={{width: iconSize, height: iconSize}}
        source={require('../assets/icon.png')}
      />
    </Animated.View>
  );
};

export default AccordionBasicIcon;
