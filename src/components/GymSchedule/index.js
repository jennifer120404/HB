import React from "react";
import {
  View,
  SafeAreaView,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  Dimensions,
  TextInput,
  ScrollView,
} from "react-native";
import { WithLocalSvg } from "react-native-svg";
import theme from "../../../theme";

let { width, height } = Dimensions.get("window");
export default function GymSchedule() {
  return (
    <View style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 80 }}
      >
        <View style={styles.headerImagesec}>
          <WithLocalSvg asset={require("./../../../assets/gymSchedule.svg")} />
        </View>
        <View style={styles.line}></View>
        <View style={styles.inputView}>
          <Text style={styles.label}>Your Focus Area?</Text>
          <TextInput style={styles.input} placeholder="Write here" />
        </View>
        <View style={[styles.line, { marginTop: 30 }]}></View>
        <Text style={styles.heading}>EXERCISES</Text>
        <View style={styles.excercieMain}>
          <Text style={styles.cardioHaeding}>Cardio</Text>
          <View style={styles.respMain}>
            <Text style={styles.cardioRepLabel}>Reps:</Text>
            <Text style={styles.cardioRepValue}>03</Text>
            <WithLocalSvg asset={require("./../../../assets/dot.svg")} />
            <Text style={styles.cardioRepLabel}>Sets:</Text>
            <Text style={styles.cardioRepValue}>02</Text>
            <WithLocalSvg asset={require("./../../../assets/dot.svg")} />
            <Text style={styles.cardioRepLabel}>Weight:</Text>
            <Text style={styles.cardioRepValue}>40Kg</Text>
            <WithLocalSvg asset={require("./../../../assets/dot.svg")} />
            <Text style={styles.cardioRepLabel}>Weight:</Text>
            <Text style={styles.cardioRepValue}>40Kg</Text>
          </View>
        </View>
        <View style={styles.excercieMain}>
          <Text style={styles.cardioHaeding}>Muscle Gain</Text>
          <View style={styles.respMain}>
            <Text style={styles.cardioRepLabel}>Reps:</Text>
            <Text style={styles.cardioRepValue}>03</Text>
            <WithLocalSvg asset={require("./../../../assets/dot.svg")} />
            <Text style={styles.cardioRepLabel}>Sets:</Text>
            <Text style={styles.cardioRepValue}>02</Text>
            <WithLocalSvg asset={require("./../../../assets/dot.svg")} />
            <Text style={styles.cardioRepLabel}>Weight:</Text>
            <Text style={styles.cardioRepValue}>40Kg</Text>
            <WithLocalSvg asset={require("./../../../assets/dot.svg")} />
            <Text style={styles.cardioRepLabel}>Weight:</Text>
            <Text style={styles.cardioRepValue}>40Kg</Text>
          </View>
        </View>
        <View style={styles.excercieMain}>
          <Text style={styles.cardioHaeding}>Chest</Text>
          <View style={styles.respMain}>
            <Text style={styles.cardioRepLabel}>Reps:</Text>
            <Text style={styles.cardioRepValue}>03</Text>
            <WithLocalSvg asset={require("./../../../assets/dot.svg")} />
            <Text style={styles.cardioRepLabel}>Sets:</Text>
            <Text style={styles.cardioRepValue}>02</Text>
            <WithLocalSvg asset={require("./../../../assets/dot.svg")} />
            <Text style={styles.cardioRepLabel}>Weight:</Text>
            <Text style={styles.cardioRepValue}>40Kg</Text>
            <WithLocalSvg asset={require("./../../../assets/dot.svg")} />
            <Text style={styles.cardioRepLabel}>Weight:</Text>
            <Text style={styles.cardioRepValue}>40Kg</Text>
          </View>
        </View>
        <View style={styles.excercieMain}>
          <Text style={styles.cardioHaeding}>Weight Loss</Text>
          <View style={styles.respMain}>
            <Text style={styles.cardioRepLabel}>Reps:</Text>
            <Text style={styles.cardioRepValue}>03</Text>
            <WithLocalSvg asset={require("./../../../assets/dot.svg")} />
            <Text style={styles.cardioRepLabel}>Sets:</Text>
            <Text style={styles.cardioRepValue}>02</Text>
            <WithLocalSvg asset={require("./../../../assets/dot.svg")} />
            <Text style={styles.cardioRepLabel}>Weight:</Text>
            <Text style={styles.cardioRepValue}>40Kg</Text>
            <WithLocalSvg asset={require("./../../../assets/dot.svg")} />
            <Text style={styles.cardioRepLabel}>Weight:</Text>
            <Text style={styles.cardioRepValue}>40Kg</Text>
          </View>
        </View>
        <View style={[styles.line, { marginTop: 30 }]}></View>
        <Text style={styles.heading}>SCALE 1/10</Text>
        <View style={styles.inputView}>
          <Text style={styles.label}>Feeling before this workout?</Text>
          <TextInput
            style={[
              styles.input,
              { height: 98, verticalAlign: "top", paddingVertical: 10 },
            ]}
            multiline
            placeholder="Write here"
          />
        </View>
        <View style={styles.inputView}>
          <Text style={styles.label}>Feeling after this workout?</Text>
          <TextInput
            style={[
              styles.input,
              { height: 98, verticalAlign: "top", paddingVertical: 10 },
            ]}
            multiline
            placeholder="Write here"
          />
        </View>
        <View style={styles.inputView}>
          <Text style={styles.label}>Did I challenge myself?</Text>
          <TextInput
            style={[
              styles.input,
              { height: 98, verticalAlign: "top", paddingVertical: 10 },
            ]}
            multiline
            placeholder="Write here"
          />
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
  },
  headerImagesec: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 30,
  },
  messageTxt: {
    textAlign: "center",
    marginHorizontal: 10,
    fontFamily: theme.italic,
    fontSize: 15,
    color: theme.primary2,
    marginTop: 10,
  },
  line: {
    width: "90%",
    alignSelf: "center",
    height: 1,
    backgroundColor: theme.lightBlack,
    marginTop: 10,
  },
  heading: {
    color: theme.secondary,
    width: "90%",
    alignSelf: "center",
    marginTop: 30,
    fontSize: 17,
    fontFamily: theme.bold,
  },
  inputView: {
    width: "90%",
    alignSelf: "center",
    marginTop: 20,
  },
  label: {
    color: theme.secondary2,
    fontFamily: theme.regular,
    fontSize: 14,
  },
  input: {
    backgroundColor: theme.lightGray,
    marginTop: 10,
    borderRadius: 10,
    height: 50,
    color: theme.lightBlack,
    fontFamily: theme.regular,
    paddingHorizontal: 10,
  },
  excercieMain: {
    backgroundColor: theme.lightGray,
    width: "90%",
    alignSelf: "center",
    padding: 15,
    marginTop: 15,
    borderRadius: 10,
  },
  cardioHaeding: {
    color: theme.secondary,
    fontFamily: theme.bold,
    fontSize: 17,
  },
  respMain: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 15,
    marginBottom: 5,
  },
  cardioRepLabel: {
    color: "#BEBEBE",
    fontFamily: theme.medium,
    fontSize: 11,
  },
  cardioRepValue: {
    color: theme.secondary2,
    fontFamily: theme.regular,
    fontSize: 11,
  },
});
