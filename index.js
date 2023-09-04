import React from 'react';
import {Pressable, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import AccordionBasicIcon from './components/AccordionBasicIcon';
import Animated, {
  Extrapolate,
  interpolate,
  measure,
  runOnUI,
  useAnimatedRef,
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';

const AccordionBasic = props => {
  let title = props.title;
  let text = props.text;
  let bgColor = props.bgColor;
  let padding = props.padding;
  let marginVertical = props.marginVertical;
  let marginHorizontal = props.marginHorizontal;
  let borderRadius = props.borderRadius;
  let borderWidth = props.borderWidth;
  let borderColor = props.borderColor;
  let titleTextSize = props.titleTextSize;
  let titleTextColor = props.titleTextColor;
  let contentTextSize = props.contentTextSize;
  let contentTextColor = props.contentTextColor;
  let iconSize = props.iconSize;

  if (title == undefined) {
    title = 'Please give title';
  }

  if (text == undefined) {
    text = 'Please give text';
  }

  if (bgColor == undefined) {
    bgColor = '#DEE2E6';
  }

  if (padding == undefined) {
    padding = 10;
  }

  if (marginVertical == undefined) {
    marginVertical = 4;
  }

  if (marginHorizontal == undefined) {
    marginHorizontal = 8;
  }

  if (borderRadius == undefined) {
    borderRadius = 10;
  }

  if (borderWidth == undefined) {
    borderWidth = 0.5;
  }

  if (borderColor == undefined) {
    borderColor = 'black';
  }

  if (titleTextSize == undefined) {
    titleTextSize = 18;
  }

  if (titleTextColor == undefined) {
    titleTextColor = 'black';
  }

  if (contentTextSize == undefined) {
    contentTextSize = 15;
  }

  if (contentTextColor == undefined) {
    contentTextColor = 'black';
  }

  if (iconSize == undefined) {
    iconSize = 24;
  }

  const listRef = useAnimatedRef();
  const heightVal = useSharedValue(0);

  const isOpen = useSharedValue(false);

  const runAccordion = useDerivedValue(() =>
    isOpen.value ? withSpring(1) : withSpring(0),
  );

  const heightAnimationStyle = useAnimatedStyle(() => ({
    height: interpolate(
      runAccordion.value,
      [0, 1],
      [0, heightVal.value],
      Extrapolate.CLAMP,
    ),
  }));

  const handleAccordion = () => {
    if (heightVal.value === 0) {
      runOnUI(() => {
        'worklet';
        heightVal.value = measure(listRef).height;
      })();
    }

    isOpen.value = !isOpen.value;
  };

  return (
    <SafeAreaView
      style={[
        styles.container,
        {
          backgroundColor: bgColor,
          marginVertical: marginVertical,
          marginHorizontal: marginHorizontal,
          borderRadius: borderRadius,
          borderWidth: borderWidth,
          borderColor: borderColor,
        },
      ]}>
      <Pressable
        style={[styles.titleContainer, {padding: padding}]}
        onPress={() => {
          handleAccordion();
        }}>
        <Text style={{fontSize: titleTextSize, color: titleTextColor}}>
          {title}
        </Text>
        <AccordionBasicIcon runAccordion={runAccordion} iconSize={iconSize} />
      </Pressable>
      <Animated.View style={heightAnimationStyle}>
        <Animated.View ref={listRef} style={styles.textContainer}>
          <View style={{padding: padding}}>
            <Text style={{fontSize: contentTextSize, color: contentTextColor}}>
              {text}
            </Text>
          </View>
        </Animated.View>
      </Animated.View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    overflow: 'hidden',
  },
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textContainer: {
    width: '100%',
    position: 'absolute',
    top: 0,
  },
});

export default AccordionBasic;
