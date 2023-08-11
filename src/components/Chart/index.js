import React, { useState } from "react";
import { View, StyleSheet, Dimensions, TouchableOpacity } from "react-native";
import theme from "../../../theme";
import VerticalBarGraph from "@chartiful/react-native-vertical-bar-graph";
import { WithLocalSvg } from "react-native-svg";

let { width, height } = Dimensions.get("window");

export default function Chart({ mins, label, yAxisSuffix }) {
  const config = {
    hasXAxisBackgroundLines: false,
    xAxisLabelStyle: {
      position: "left",
      prefix: "$",
    },
    xAxisLabelCount: 7,
    hasXAxisLabels: false,
  };

  const [emojis, setEmojis] = useState([
    {
      selected: false,
      emoji: require("./../../../assets/Emoji_Crying.svg"),
    },
    {
      emoji: require("./../../../assets/Emoji_Sad.svg"),
      selected: false,
    },
    {
      emoji: require("./../../../assets/Emoji_Flat.svg"),
      selected: false,
    },
    {
      emoji: require("./../../../assets/Emoji_Smile.svg"),
      selected: false,
    },
    {
      emoji: require("./../../../assets/Emoji_Laugh.svg"),
      selected: false,
    },
    {
      emoji: require("./../../../assets/Emoji_HeartEyes.svg"),
      selected: false,
    },
  ]);
  return (
    <View style={styles.wellBeingBox}>
      <View style={styles.emojis}>
        {emojis.map((val, i) => {
          return (
            <TouchableOpacity
              key={i}
              style={styles.drop}
              onPress={() => {
                drops[i].selected = !drops[i].selected;
                setDrops([...drops]);
              }}
            >
              <WithLocalSvg asset={val.emoji} width={21} height={21} />
            </TouchableOpacity>
          );
        })}
      </View>
      <VerticalBarGraph
        data={["20", "45", 28, 80, 99, 43, 50]}
        labels={["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]}
        width={width - 100}
        height={250}
        barRadius={5}
        barWidthPercentage={0.65}
        baseConfig={config}
        style={styles.chart}
        barColor={theme.primary}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  wellBeingBox: {
    width: "100%",
    alignSelf: "center",
    marginTop: 30,
    flexDirection: "row",
  },

  chart: {
    // marginBottom: 30,
    // padding: 10,
    // paddingTop: 20,
    borderRadius: 20,
    backgroundColor: theme.lightGray,
    // marginTop: 20,
    marginLeft: 10,
    // borderWidth: 1,
    // width: 375,
  },
  emojis: {
    // borderWidth: 1,
    justifyContent: "space-between",
    height: 220,
  },
});
