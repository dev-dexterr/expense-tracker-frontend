import React, { useEffect, useState, useRef } from "react";
import {
  SafeAreaView,
  Dimensions,
  StatusBar,
  FlatList,
  Image,
  Text,
  View,
  StyleSheet
} from "react-native";
import COLOR from "../utils/colors.js";
import slides from "../utils/constants/OnBoardingContent.js";
import {
  SlideContainer,
  SlideSafeAreaView,
  SlideTitle,
  SlideSubTitle,
  SlideTextContainer,
  FooterView,
  FooterContainer,
  FooterIndicator,
  FooterButtoncontainer,
  FooterButtonView,
  FooterBtnText,
  FooterBtn,
  FooterButtonView2
} from "../components/OnboardingStyles.js";

const { width, height } = Dimensions.get("window");

const Slide = ({ item }) => {
  return (
    <SlideContainer style={{ alignItems: "center" }}>
      <Image
        source={item.image}
        style={{ height: "70%", width, resizeMode: "contain" }}
      />
      <SlideTextContainer>
        <SlideTitle>{item.title}</SlideTitle>
        <SlideSubTitle>{item.subtitle}</SlideSubTitle>
      </SlideTextContainer>
    </SlideContainer>
  );
};

const OnBoarding = ({navigation}) => {
  // useEffect(() => {
  //   console.log(slides);
  // }, [slides]);
  const [CurrentSlideIndex, setCurrentSlideIndex] = useState(0)
  const ref = useRef();
  const Footer = () => {
    return (
      <>
        <FooterView>
          <FooterContainer>
            {slides.map((_, index) => (
              <FooterIndicator key={index} style={[CurrentSlideIndex == index && {
                backgroundColor: COLOR.quinary,
                width: 22
              }]} />
            ))}
          </FooterContainer>
        </FooterView>
        <FooterButtoncontainer>
          {CurrentSlideIndex == slides.length - 1 ?
            <FooterButtonView2>
              <FooterBtn onPress={()=> navigation.navigate('Login')}>
                <FooterBtnText>Get Started</FooterBtnText>
              </FooterBtn>
            </FooterButtonView2>
            :
            <FooterButtonView>
              <FooterBtn onPress={skipSlide} style={{ backgroundColor: 'transparent', borderWidth: 2, borderColor: COLOR.blue }}>
                <FooterBtnText style={{ color: COLOR.blue }}>Skip</FooterBtnText>
              </FooterBtn>
              <View style={{ width: 20 }} />
              <FooterBtn onPress={goNextSlide}>
                <FooterBtnText>Next</FooterBtnText>
              </FooterBtn>
            </FooterButtonView>
          }
        </FooterButtoncontainer>
      </>
    )
  }

  const updateCurrentSlideIndex = e => {
    const contentOffsetX = e.nativeEvent.contentOffset.x;
    const currentIndex = Math.round(contentOffsetX / width);
    setCurrentSlideIndex(currentIndex)
  }

  const goNextSlide = () => {
    const nextSlideIndex = CurrentSlideIndex + 1;
    if (nextSlideIndex != slides.length) {
      const offset = nextSlideIndex * width;
      ref?.current.scrollToOffset({ offset });
      setCurrentSlideIndex(CurrentSlideIndex + 1)
    }
  }

  const skipSlide = () => {
    const lastSlideIndex = slides.length - 1;
    const offset = lastSlideIndex * width;
    ref?.current.scrollToOffset({ offset });
    setCurrentSlideIndex(lastSlideIndex)
  }

  return (
    <SlideSafeAreaView>
      <StatusBar style={{ backgroundColor: COLOR.primary }} />
      <FlatList
        ref={ref}
        onMomentumScrollEnd={updateCurrentSlideIndex}
        pagingEnabled
        data={slides}
        keyExtractor={(item) => item.id}
        horizontal
        contentContainerStyle={{ height: height * 0.75 }}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => {
          return <Slide item={item} />;
        }}
      />
      <Footer />
    </SlideSafeAreaView>
  );
};

export default OnBoarding;
