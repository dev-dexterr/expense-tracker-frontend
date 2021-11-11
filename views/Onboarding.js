import React, { useEffect } from "react";
import {
  SafeAreaView,
  Dimensions,
  StatusBar,
  FlatList,
  Image,
  Text,
  View,
} from "react-native";
import COLOR from "../utils/colors.js";
import slides from "../utils/constants/OnBoardingContent.js";
import {
  SlideContainer,
  SlideSafeAreaView,
} from "../components/OnboardingStyles.js";

const { width, height } = Dimensions.get("window");

const Slide = ({ item }) => {
  return (
    <SlideContainer style={{ alignItems: "center" }}>
      <Image
        source={item.image}
        style={{ height: "75%", width, resizeMode: "contain" }}
      />
      <Text>{item.title}</Text>
    </SlideContainer>
  );
};

const OnBoarding = () => {
  useEffect(() => {
    console.log(slides);
  }, [slides]);
  return (
    <SlideSafeAreaView>
      <StatusBar style={{ backgroundColor: COLOR.primary }} />
      <FlatList
        data={slides}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => {
          return <Slide item={item} />;
        }}
      />
    </SlideSafeAreaView>
  );
};

export default OnBoarding;
