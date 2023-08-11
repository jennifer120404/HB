import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  TextInput,
  ScrollView,
} from "react-native";
import CircularProgress from "react-native-circular-progress-indicator";
import Slider from "@react-native-community/slider";
import { WithLocalSvg } from "react-native-svg";
import theme from "../../../theme";

let { width, height } = Dimensions.get("window");
export default function TotalSteps() {
  const [progressValue, setProgressValue] = useState(0);
  const [drops, setDrops] = useState([
    {
      title: "drop 1",
      selected: false,
    },
    {
      title: "drop 2",
      selected: false,
    },
    {
      title: "drop 3",
      selected: false,
    },
    {
      title: "drop 4",
      selected: false,
    },
    {
      title: "drop 5",
      selected: false,
    },
    {
      title: "drop 6",
      selected: false,
    },
  ]);
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
    <View style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 80 }}
      >
        <View style={styles.headerImagesec}>
          <WithLocalSvg asset={require("./../../../assets/today.svg")} />
        </View>
        <View style={styles.line}></View>
        <Text style={styles.heading}>TOTAL STEPS</Text>
        <View style={styles.progressSec}>
          <CircularProgress
            value={progressValue ? progressValue : 0}
            radius={120}
            duration={2000}
            progressValueColor={"#ecf0f1"}
            maxValue={1000}
            title={"Awesome!"}
            subtitle={"You’re doing great!"}
            titleColor={theme.lightBlack}
            titleStyle={{ fontFamily: theme.bold, fontSize: 15 }}
            subtitleStyle={{
              fontFamily: theme.regular,
              fontSize: 14,
              marginTop: 5,
              color: theme.lightBlack,
            }}
            showProgressValue={false}
            activeStrokeWidth={10}
            inActiveStrokeWidth={40}
            activeStrokeColor={theme.primary}
            inActiveStrokeColor={theme.lightGray}
          />
          <TouchableOpacity style={styles.stepsBtn}>
            <WithLocalSvg asset={require("./../../../assets/steps.svg")} />
            <TextInput
              placeholder="0"
              style={styles.input}
              placeholderTextColor={theme.white}
              keyboardType="number-pad"
              value={progressValue}
              onChangeText={(text) => {
                if (text <= 1000) {
                  setProgressValue(text);
                }
              }}
            />
            <Text style={styles.stepsBtnTxt}>/ 1000</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.heading}>WATER INTAKE</Text>
        <View style={styles.waterIntakeMain}>
          <View style={styles.drops}>
            {drops.map((val, i) => {
              return (
                <TouchableOpacity
                  key={i}
                  style={styles.drop}
                  onPress={() => {
                    drops[i].selected = !drops[i].selected;
                    setDrops([...drops]);
                  }}
                >
                  {val.selected ? (
                    <WithLocalSvg
                      asset={require("./../../../assets/selectedDrop.svg")}
                    />
                  ) : (
                    <WithLocalSvg
                      asset={require("./../../../assets/drop.svg")}
                    />
                  )}
                </TouchableOpacity>
              );
            })}
          </View>
          <View style={styles.sliderView}>
            <Text style={styles.sliderLabel}>0L</Text>
            {/* <View>
              <View></View>
            </View> */}
            <Slider
              style={{ width: "90%", height: 40 }}
              minimumValue={0}
              maximumValue={3}
              minimumTrackTintColor={theme.skyBlue}
              maximumTrackTintColor={theme.gray}
              thumbTintColor={theme.skyBlue}
            />
            <Text style={styles.sliderLabel}>3L</Text>
          </View>
        </View>
        <Text style={styles.heading}>TODAY’S MOOD</Text>
        <View style={styles.waterIntakeMain}>
          <View style={styles.drops}>
            {emojis.map((val, i) => {
              return (
                <TouchableOpacity
                  key={i}
                  style={styles.drop}
                  // onPress={() => {
                  //   drops[i].selected = !drops[i].selected;
                  //   setDrops([...drops]);
                  // }}
                >
                  <WithLocalSvg asset={val.emoji} />
                </TouchableOpacity>
              );
            })}
          </View>
        </View>
      </ScrollView>
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
  },
  heading: {
    color: theme.secondary,
    width: "90%",
    alignSelf: "center",
    marginTop: 30,
    fontSize: 17,
    fontFamily: theme.bold,
  },
  progressSec: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 30,
  },
  stepsBtn: {
    backgroundColor: theme.primary,
    height: 52,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
    borderRadius: 30,
    position: "absolute",
    bottom: 5,
  },
  stepsBtnTxt: {
    color: theme.white,
    fontFamily: theme.bold,
    fontSize: 17,
  },
  input: {
    color: theme.white,
    marginLeft: 10,
    fontFamily: theme.bold,
    fontSize: 17,
    paddingLeft: 5,
  },
  waterIntakeMain: {
    backgroundColor: theme.lightGray,
    width: "90%",
    alignSelf: "center",
    marginTop: 15,
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 20,
  },
  sliderView: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 10,
  },
  sliderLabel: {
    color: theme.secondary2,
    fontFamily: theme.regular,
    fontSize: 15,
  },
  drops: {
    flexDirection: "row",
    justifyContent: "center",
  },
  drop: {
    marginHorizontal: 5,
  },
});
