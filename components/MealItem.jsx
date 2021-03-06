import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableNativeFeedback,
  TouchableOpacity,
  Platform,
  ImageBackground,
} from "react-native";
import DefaultTextWrapper from "./DeafaultTextWrapper";
const DisplayButton =
  Platform.OS === "android" && Platform.Version >= 21
    ? TouchableNativeFeedback
    : TouchableOpacity;

const MealItem = (props) => {
  return (
    <View style={styles.screen}>
      <DisplayButton onPress={props.onSelect}>
        <View>
          <View style={{ ...StyleSheet.mealRow, ...styles.mealHeader }}>
            <ImageBackground
              source={{ uri: `${props.imageUri}` }}
              style={styles.bgImage}
            >
              <View style={styles.titleContainer}>
                <Text style={styles.title} numberOfLines={1}>
                  {props.title}
                </Text>
              </View>
            </ImageBackground>
          </View>
          <View style={{ ...StyleSheet.mealRow, ...styles.mealDeatail }}>
            <DefaultTextWrapper>
              <Text>{props.duration}m</Text>
            </DefaultTextWrapper>
            <DefaultTextWrapper>
              <Text>{props.complexity.toUpperCase()}</Text>
            </DefaultTextWrapper>
            <DefaultTextWrapper>
              <Text>{props.affordability.toUpperCase()}</Text>
            </DefaultTextWrapper>
          </View>
        </View>
      </DisplayButton>
    </View>
  );
};

const styles = StyleSheet.create({
  mealRow: {
    flexDirection: "row",
  },
  titleContainer: {
    backgroundColor: "#cccc",
  },
  title: {
    fontFamily: "open-sans-bold",
    color: "white",
    paddingVertical: 5,
    textAlign: "center",
  },
  bgImage: {
    width: "100%",
    height: "100%",
    justifyContent: "flex-end",
  },
  screen: {
    height: 200,
    width: "100%",
    backgroundColor: "#f5f5f5",
    borderRadius: 10,
    overflow: "hidden",
    padding: 8,
  },
  mealHeader: {
    height: "85%",
  },
  mealDeatail: {
    paddingHorizontal: 10,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    height: "15%",
  },
});

export default MealItem;
