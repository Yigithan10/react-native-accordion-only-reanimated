This is a custom accordion basic with react-native-reanimated.
My build versions:
1- react-native-reanimated: 2.14.4

## Installation

```bash
  npm install react-native-accordion-only-reanimated
```

## Doc

[react-native-reanimated](https://docs.swmansion.com/react-native-reanimated/)

## Usage

```js
  //Usage
  import AccordionBasic from "react-native-accordion-only-reanimated";

  <SafeAreaView style={{flex: 1}}>
    <AccordionBasic
      title={'Title'}
      text={'Text'}
      bgColor={'#DEE2E6'}
      padding={10}
      marginVertical={4}
      marginHorizontal={8}
      borderRadius={10}
      borderWidth={0.5}
      borderColor={'black'}
      titleTextSize={18}
      titleTextColor={'black'}
      contentTextSize={15}
      contentTextColor={'black'}
      iconSize={24}
    />
  </SafeAreaView>
```

## API

| prop            | type     | description             | default  |
| :-------------  | :------- | :---------------------- | :------- |
| `title`          | `String`   | Accordion title.     | "Please give title" |
| `text`          | `String`   | Accordion text.       | "Please give text" |
| `bgColor`  | `String` | Accordion backgroundColor. |"#DEE2E6" |
| `padding`  | `Number` | Accordion padding. | 10 |
| `marginVertical` | `Number` | Accordion marginVertical. | 4 |
| `marginHorizontal` | `Number` | Accordion marginHorizontal. | 8 |
| `borderRadius` | `Number` | Accordion borderRadius. | 10 |
| `borderWidth` | `Number` | Accordion borderWidth. | 0.5 |
| `borderColor` | `String` | Accordion borderColor. | "black" |
| `titleTextSize` | `Number` | Accordion titleTextSize. | 18 |
| `titleTextColor` | `String` | Accordion titleTextColor. | "black" |
| `contentTextSize` | `Number` | Accordion contentTextSize. | 15 |
| `contentTextColor` | `String` | Accordion contentTextColor. | "black" |
| `iconSize`  | `Number` | Accordion iconSize. | 24 |
