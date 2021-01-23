import React from "react";
import { ActivityIndicator, Dimensions, ScrollView } from "react-native";
import styled from "styled-components/native";
import Swiper from "react-native-web-swiper";
import Slide from "../../components/Movies/Slide";
import Title from "../../components/Title";

const { width: WIDTH, height: HEIGHT } = Dimensions.get("window");

const SliderContainer = styled.View`
  width: ${WIDTH}px;
  height: ${HEIGHT / 3.5}px;
  margin-bottom: 50px;
`;

export default ({ loading, nowPlaying }) => (
  <ScrollView
    style={{
      backgroundColor: "black",
    }}
    contentContainerStyle={{
      flex: 1,
      justifyContent: loading ? "center" : "flex-start",
    }}
  >
    {loading ? (
      <ActivityIndicator color="white" size="large" />
    ) : (
      <>
        <SliderContainer>
          <Swiper controlsEnabled={false} loop timeout={3}>
            {nowPlaying?.length > 0 &&
              nowPlaying.map((movie) => (
                <Slide
                  key={movie.id}
                  id={movie.id}
                  title={movie.original_title}
                  overview={movie.overview}
                  votes={movie.vote_average}
                  backgroundImage={movie.backdrop_path}
                  poster={movie.poster_path}
                />
              ))}
          </Swiper>
        </SliderContainer>
        <Title title={"Popular Movies"} />
      </>
    )}
  </ScrollView>
);
