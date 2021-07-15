import React, { Component } from "react";
import { View, Text } from "react-native";
import MultipleTags from "react-native-multiple-tags";
import { color } from "react-native-reanimated";

const tags = [
  "cherry",
  "mango",
  "cashew",
  "almond",
  "guava",
  "pineapple",
  "orange",
  "pear",
  "date",
  "strawberry",
  "pawpaw",
  "banana",
  "apple",
  "grape",
  "lemon",
];

const objectTags = [
  {
    key: "id_01",
    value: "cherry",
  },
  {
    key: "id_02",
    value: "mango",
  },
  {
    key: "id_03",
    value: "cashew",
  },
  {
    key: "id_04",
    value: "almond",
  },
  {
    key: "id_05",
    value: "guava",
  },
  {
    key: "id_06",
    value: "pineapple",
  },
  {
    key: "id_07",
    value: "orange",
  },
  {
    key: "id_08",
    value: "pear",
  },
  {
    key: "id_09",
    value: "date",
  },
];

class WelcomeComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: [],
      contentx: [],
    };
  }

  render() {
    return (
      <View>
        <MultipleTags
          searchHitResponse={'Policial não cadastrado'}
          defaultInstructionOpen={'Pesquise pelo nome de guerra'}	
          defaultInstructionClosed={'Adicionar os integrantes da ocorrência'}
          tags={objectTags}
          
          search
          onChangeItem={(content) => {
            this.setState({ content });
          }}
          title={'Adicionar Efetivo'}
        />
        {(() =>
          this.state.content.map((item) => (
            <Text key={item.key}>
              {" "}
              {item.key}: {item.value}{" "}
            </Text>
          )))()}

        {(() =>
          this.state.contentx.map((item) => (
            <Text key={item}> {item} </Text>
          )))()}
      </View>
    );
  }
}

export default WelcomeComponent;
