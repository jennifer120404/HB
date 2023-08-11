import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  ActivityIndicator,
  Image,
} from "react-native";
import CircularProgress from "react-native-circular-progress-indicator";
import theme from "../../../theme";
import * as ImagePicker from "expo-image-picker";
import { storage, db } from "../../config";
import { ref, getDownloadURL, uploadBytes } from "firebase/storage";
import {
  collection,
  query,
  where,
  getDocs,
  onSnapshot,
  updateDoc,
  doc,
  addDoc,
  setDoc,
  orderBy,
} from "firebase/firestore";

export default function Camera() {
  const [image, setImage] = useState(null);
  const [routines, set_routines] = useState([]);
  const [loader, setloader] = useState(true);

  useEffect(() => {
    get_routine();
  }, []);

  const get_routine = async () => {
    setloader(true);
    const q = query(collection(db, "MyPhoto"), orderBy("date"));
    const querySnapshot = await getDocs(q);
    var _arr = [];
    querySnapshot.forEach((doc) => {
      var _data = doc.data();
      _data.uid = doc.id;
      _arr.push(_data);
      set_routines([..._arr]);
      setloader(false);
    });
  };

  const pickImage = async (_id) => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      var _uri = result.assets[0].uri;
      const response = await fetch(_uri);
      const blobFile = await response.blob();
      const imageName = _uri.substring(_uri.lastIndexOf("/") + 1);
      const storageRef = ref(storage, `photos/${imageName}`);

      uploadBytes(storageRef, blobFile)
        .then((snapshot) => {
          console.log(snapshot);
          getDownloadURL(storageRef)
            .then((url) => {
              console.log("-----------------------", url);
              update_photo(url, _id);
            })
            .catch((error) => {
              console.log("=======>>>>error", error);
            });
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  const update_photo = async (url, _id) => {
    const employee_ref = doc(db, "MyPhoto", _id);
    await updateDoc(employee_ref, {
      img: url,
    });
    get_routine();
  };

  console.log("------------------>", routines);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.titleBox}>
          <Text style={styles.titleBoxTxt}>My photo</Text>
        </View>
        <View>
          <Text style={styles.dateTxt}>12/04</Text>
          <Text style={styles.dayTxt}>Monday</Text>
        </View>
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 80 }}
      >
        {routines.map((val, i) => {
          return (
            <View style={styles._routine_card} key={i}>
              <View style={styles._week_row}>
                <Text style={styles._title}>{val.date}</Text>
                <CircularProgress
                  value={Number(val.percentage)}
                  radius={25}
                  duration={800}
                  progressValueColor={"#ecf0f1"}
                  maxValue={100}
                  title={`${Number(val.percentage)}%`}
                  subtitle={""}
                  titleColor={theme.lightBlack}
                  titleStyle={{ fontFamily: theme.bold, fontSize: 12 }}
                  subtitleStyle={{
                    fontFamily: theme.regular,
                    fontSize: 14,
                    color: theme.lightBlack,
                  }}
                  showProgressValue={false}
                  activeStrokeWidth={12}
                  inActiveStrokeWidth={12}
                  activeStrokeColor={theme.primary}
                  inActiveStrokeColor={theme.lightGray}
                />
              </View>

              <TouchableOpacity
                style={styles._image_view}
                activeOpacity={0.5}
                onPress={() => pickImage(val.uid)}
              >
                {val.img !== "" ? (
                  <Image
                    source={{ uri: val.img }}
                    style={styles._image}
                    resizeMode="stretch"
                  />
                ) : (
                  <Text style={styles._add_pic}>CLICK TO ADD PICTURE</Text>
                )}
              </TouchableOpacity>
            </View>
          );
        })}
        {loader && (
          <ActivityIndicator color={theme.primary} style={{ marginTop: 100 }} />
        )}
      </ScrollView>
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
  _routine_card: {
    backgroundColor: theme.secondary,
    width: "90%",
    alignSelf: "center",
    marginTop: 15,
    borderRadius: 10,
    padding: 10,
    elevation: 2,
    flexDirection: "row",
    justifyContent: "space-between",
    flexDirection: "column",
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
  _title: {
    fontFamily: theme.bold,
    fontSize: 16,
  },
  _week_row: {
    flexDirection: "row",
    justifyContent: "space-between",
    flex: 1,
    alignItems: "center",
  },
  _image_view: {
    height: 100,
    backgroundColor: "#f6b4b4",
    borderRadius: 10,
    marginTop: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  _add_pic: {
    fontFamily: theme.bold,
    fontSize: 16,
  },
  _image: {
    height: 100,
    width: "100%",
    borderRadius: 10,
  },
});
