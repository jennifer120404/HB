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
export default function DailyQuestions() {
  return (
    <View style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 80 }}
      >
        <View style={styles.headerImagesec}>
          <WithLocalSvg asset={require("./../../../assets/goodMorning.svg")} />
          <Text style={styles.messageTxt}>
            “Your body hears everything your mind says. Stay positive, work
            hard, and make it happen”
          </Text>
        </View>
        <View style={styles.line}></View>
        <Text style={styles.heading}>Daily Questions</Text>
        <View style={styles.inputView}>
          <Text style={styles.label}>
            If someone else gets to describe you, what do you think they will
            say?
          </Text>
          <TextInput style={styles.input} multiline placeholder="Write here" />
        </View>
        <View style={styles.inputView}>
          <Text style={styles.label}>
            What is your stress level lately and why?
          </Text>
          <TextInput style={styles.input} multiline placeholder="Write here" />
        </View>
        <View style={styles.inputView}>
          <Text style={styles.label}>
            What fear would you like to overcome this month?
          </Text>
          <TextInput style={styles.input} multiline placeholder="Write here" />
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
    marginTop: 30,
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
    marginTop: 30,
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
    textAlignVertical: "top",
    height: 142,
    // verticalAlign: "top",
    paddingHorizontal: 10,
    color: theme.lightBlack,
    fontFamily: theme.regular,
    paddingVertical: 10,
  },
});
