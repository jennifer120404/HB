import React, { useState } from "react";
import {
  View,
  SafeAreaView,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  Dimensions,
} from "react-native";
import { WithLocalSvg } from "react-native-svg";
import theme from "../../../theme";

let { width, height } = Dimensions.get("window");
export default function Challenges() {
  const [selected, setSelected] = useState("Create a vision board");
  return (
    <View style={styles.container}>
      <View style={styles.headerImagesec}>
        <WithLocalSvg asset={require("./../../../assets/challenges.svg")} />
      </View>
      <View style={styles.line}></View>
      <View style={styles.challengesMain}>
        <TouchableOpacity
          onPress={() => setSelected("Create a vision board")}
          style={[
            styles.checkBox,
            selected === "Create a vision board" && {
              backgroundColor: "#C4B3A2",
            },
          ]}
        >
          {selected === "Create a vision board" ? (
            <WithLocalSvg asset={require("./../../../assets/tick.svg")} />
          ) : null}
        </TouchableOpacity>
        <Text style={[styles.label, { textDecorationLine: "line-through" }]}>
          Create a vision board
        </Text>
      </View>
      <View style={styles.challengesMain}>
        <TouchableOpacity
          onPress={() => setSelected("Walk the stairs 20 times in a row")}
          style={[
            styles.checkBox,
            selected === "Walk the stairs 20 times in a row" && {
              backgroundColor: "#C4B3A2",
            },
          ]}
        >
          {selected === "Walk the stairs 20 times in a row" ? (
            <WithLocalSvg asset={require("./../../../assets/tick.svg")} />
          ) : null}
        </TouchableOpacity>
        <Text style={styles.label}>Walk the stairs 20 times in a row</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.white,
    width,
    height,
  },
  headerImagesec: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 30,
  },
  line: {
    width: "90%",
    alignSelf: "center",
    height: 1,
    backgroundColor: theme.lightBlack,
    marginTop: 20,
    marginBottom: 10,
  },
  challengesMain: {
    flexDirection: "row",
    alignItems: "center",
    width: "90%",
    alignSelf: "center",
    marginTop: 20,
  },
  checkBox: {
    borderWidth: 1,
    // backgroundColor: theme.primary,
    width: 27,
    height: 27,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    borderColor: "#C4B3A2",
  },
  label: {
    marginLeft: 10,
    color: theme.secondary2,
    fontFamily: theme.regular,
    fontSize: 15,
  },
});
