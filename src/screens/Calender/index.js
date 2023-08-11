import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  ScrollView,
  SafeAreaView,
  Alert,
  Modal,
  Pressable,
  ActivityIndicator,
} from "react-native";
import CircularProgress from "react-native-circular-progress-indicator";
import { Entypo } from "@expo/vector-icons";
import theme from "../../../theme";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import moment from "moment";
import { db } from "../../config";
import {
  collection,
  query,
  where,
  getDocs,
  updateDoc,
  doc,
  addDoc,
  setDoc,
} from "firebase/firestore";

export default function Calendar() {
  const [modalVisible, setModalVisible] = useState(false);
  const [week, setweek] = useState([]);
  const [habit, sethabit] = useState("");
  const [selected_date, set_selected_date] = useState("");
  const [routines, set_routines] = useState([]);
  const [loader, setloader] = useState(true);

  useEffect(() => {
    get_weeks_dates();
    get_routine();
  }, []);

  const get_routine = async () => {
    setloader(true);
    const q = query(
      collection(db, "Routine"),
      where("date", "==", moment().format("YYYY-MM-DD"))
    );
    const querySnapshot = await getDocs(q);
    var _arr = [];
    querySnapshot.forEach((doc) => {
      var _data = doc.data();
      _data.uid = doc.id;
      _arr.push(_data);
      set_routines([..._arr]);
      setloader(false);
    });
    var _number_of_completed_task = _arr.filter((val) => val.selected).length;
    var _total_task = _arr.length;
    var _percentage = (_number_of_completed_task / _total_task) * 100;

    await setDoc(
      doc(db, "MyPhoto", moment().format("YYYY-MM-DD")),
      {
        percentage: _percentage,
        date: moment().format("YYYY-MM-DD"),
      },
      { merge: true }
    );
  };

  const _routine_action = async (_val) => {
    const employee_ref = doc(db, "Routine", _val.uid);
    await updateDoc(employee_ref, {
      selected: !_val.selected,
    })
      .then(async () => {
        await get_routine();
      })
      .catch((error) => {
        const errorMessage = error.message;
      });
  };

  const get_weeks_dates = () => {
    var currentDate = moment();
    var startOfWeek = currentDate.clone().startOf("week");
    var endOfWeek = currentDate.clone().endOf("week");
    var currentWeekDates = [];
    for (
      var date = startOfWeek.clone();
      date.isSameOrBefore(endOfWeek);
      date.add(1, "day")
    ) {
      currentWeekDates.push(date.format("YYYY-MM-DD"));
      setweek([...currentWeekDates]);
    }
  };

  const add_routine = async (val) => {
    const docData = {
      title: habit,
      selected: false,
      pic: "",
      date: selected_date,
    };

    await addDoc(collection(db, "Routine"), docData)
      .then(async () => {
        setModalVisible(!modalVisible);
        sethabit("");
        set_selected_date("");
        get_routine();
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };

  var _number_of_completed_task = routines.filter((val) => val.selected).length;
  var _total_task = routines.length;
  var _percentage = (_number_of_completed_task / _total_task) * 100;

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.titleBox}>
          <Text style={styles.titleBoxTxt}>My habit</Text>
        </View>
        <View>
          <Text style={styles.dateTxt}>12/04</Text>
          <Text style={styles.dayTxt}>Monday</Text>
        </View>
      </View>
      <View style={styles.progressSec}>
        <CircularProgress
          value={_percentage}
          radius={80}
          duration={800}
          progressValueColor={"#ecf0f1"}
          maxValue={100}
          title={`${_percentage.toFixed(2)}%`}
          subtitle={""}
          titleColor={theme.lightBlack}
          titleStyle={{ fontFamily: theme.bold, fontSize: 15 }}
          subtitleStyle={{
            fontFamily: theme.regular,
            fontSize: 14,
            marginTop: 5,
            color: theme.lightBlack,
          }}
          showProgressValue={false}
          activeStrokeWidth={40}
          inActiveStrokeWidth={40}
          activeStrokeColor={theme.primary}
          inActiveStrokeColor={theme.lightGray}
        />
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 80 }}
      >
        {routines.map((val, i) => {
          return (
            <View style={styles._routine_card} key={i}>
              <View>
                <Text style={styles._title}>{val.title}</Text>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <Entypo
                    name="dot-single"
                    size={24}
                    color={val.selected ? "#85cd79" : "#f6778e"}
                  />
                  <Text style={styles._text}>
                    {val.selected ? "completed" : "not completed"}
                  </Text>
                </View>
              </View>
              <TouchableOpacity
                style={styles.statusBox}
                onPress={() => _routine_action(val)}
              >
                {val.selected && (
                  <AntDesign name="check" size={24} color={theme.white} />
                )}
              </TouchableOpacity>
            </View>
          );
        })}

        {loader && (
          <ActivityIndicator color={theme.primary} style={{ marginTop: 100 }} />
        )}
      </ScrollView>

      <TouchableOpacity
        style={styles._add_btn}
        activeOpacity={0.7}
        onPress={() => setModalVisible(true)}
      >
        <Ionicons name="add" size={54} color={theme.white} />
      </TouchableOpacity>

      {/* ADD ROUTINE MODAL */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={[styles._title, { color: theme.white }]}>
              Habit name
            </Text>
            <TextInput
              value={habit}
              style={styles._input}
              onChangeText={sethabit}
            />

            <View style={[styles._week_row]}>
              {week.map((val, i) => {
                return (
                  <TouchableOpacity
                    style={[
                      styles._weekname,
                      {
                        backgroundColor:
                          selected_date === val ? theme.primary : "#fce9e9",
                      },
                    ]}
                    key={i}
                    onPress={() => set_selected_date(val)}
                  >
                    <Text
                      style={[
                        styles._weekname_text,
                        {
                          color:
                            selected_date === val ? theme.white : theme.black,
                        },
                      ]}
                    >
                      {moment(val).format("ddd")}
                    </Text>
                  </TouchableOpacity>
                );
              })}
            </View>

            <View style={styles.modal_footer}>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => setModalVisible(false)}
              >
                <Text style={styles.textStyle}>Cancel</Text>
              </Pressable>
              <Pressable
                disabled={habit !== "" && selected_date !== "" ? false : true}
                style={[styles.button, styles.buttonClose]}
                onPress={() => add_routine()}
              >
                <Text style={styles.textStyle}>Done</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.white,
  },
  header: {
    alignItems: "center",
    marginTop: 30,
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 20,
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

  _routine_card: {
    backgroundColor: theme.secondary,
    width: "90%",
    alignSelf: "center",
    marginTop: 15,
    borderRadius: 20,
    paddingHorizontal: 15,
    paddingVertical: 20,
    elevation: 2,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  titleBox: {
    backgroundColor: theme.primary2,
    paddingHorizontal: 20,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 30,
  },
  titleBoxTxt: {
    color: theme.white,
    fontFamily: theme.medium,
    fontSize: 16,
  },
  dateTxt: {
    color: theme.black,
    fontFamily: theme.bold,
    textAlign: "center",
    fontSize: 18,
  },
  dayTxt: {
    color: theme.black,
    fontFamily: theme.regular,
    textAlign: "center",
    fontSize: 14,
  },
  statusBox: {
    width: 40,
    height: 40,
    borderRadius: 40 / 2,
    backgroundColor: theme.primary2,
    justifyContent: "center",
    alignItems: "center",
  },
  _text: {
    fontFamily: theme.medium,
  },
  _title: {
    fontFamily: theme.bold,
  },
  _add_btn: {
    position: "absolute",
    bottom: 5,
    right: 5,
    elevation: 2,
    backgroundColor: theme.white,
    borderRadius: 100,
    height: 70,
    width: 70,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: theme.primary2,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    marginTop: 22,
    backgroundColor: "#c7aaaabf",
  },
  modalView: {
    margin: 20,
    backgroundColor: theme.primary2,
    borderRadius: 20,
    padding: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },
  button: {
    borderRadius: 100,
    padding: 15,
    elevation: 2,
    flex: 1,
    marginHorizontal: 10,
  },

  buttonClose: {
    backgroundColor: "#fce9e9",
  },
  textStyle: {
    color: theme.black,
    fontWeight: "bold",
    textAlign: "center",
  },
  _input: {
    backgroundColor: "#fce9e9",
    marginVertical: 10,
    borderRadius: 5,
    height: 50,
    padding: 10,
    fontFamily: theme.medium,
  },
  _week_row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: 20,
  },
  _weekname: {
    height: 40,
    width: 40,
    borderRadius: 40 / 2,
    backgroundColor: "#fce9e9",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: theme.white,
  },
  _weekname_text: {
    fontFamily: theme.bold,
    fontSize: 12,
  },
  modal_footer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});
