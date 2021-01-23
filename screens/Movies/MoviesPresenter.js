import React from "react";
import { ActivityIndicator, Dimensions, ScrollView } from "react-native";
import styled from "styled-components/native";
import Swiper from "react-native-web-swiper";
import Slide from "../../components/Movies/Slide";
import Title from "../../components/Title";
import Vertical from "../../components/Vertical";
import Horizontal from "../../components/Horizontal";

const { height: HEIGHT } = Dimensions.get("window");

const SliderContainer = styled.View`
  width: 100%;
  height: ${HEIGHT / 3.5}px;
  margin-bottom: 50px;
`;

const Container = styled.View``;

const UpcomingContainer = styled.View`
  margin-top: 20px;
`;

export default ({ loading, nowPlaying, popular, upcoming }) => (
  <ScrollView
    style={{
      backgroundColor: "black",
    }}
    contentContainerStyle={{
      flex: loading ? 1 : 0,
      justifyContent: loading ? "center" : "flex-start",
    }}
    showsVerticalScrollIndicator={false}
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
                  title={movie.title}
                  overview={movie.overview}
                  votes={movie.vote_average}
                  backgroundImage={movie.backdrop_path}
                  poster={movie.poster_path}
                />
              ))}
          </Swiper>
        </SliderContainer>
        <Container>
          <Title title={"Popular Movies"} />
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={{ marginTop: 20, marginBottom: 40 }}
            contentContainerStyle={{ paddingLeft: 30 }}
          >
            {popular?.length > 0 &&
              popular.map((movie) => (
                <Vertical
                  key={movie.id}
                  id={movie.id}
                  poster={movie.poster_path}
                  title={movie.title}
                  votes={movie.vote_average}
                />
              ))}
          </ScrollView>
          <Title title={"Coming Soon"} />
          <UpcomingContainer>
            {upcoming?.length > 0 &&
              upcoming.map((movie) => (
                <Horizontal
                  key={movie.id}
                  id={movie.id}
                  title={movie.title}
                  releaseDate={movie.release_date}
                  poster={movie.poster_path}
                  overview={movie.overview}
                />
              ))}
          </UpcomingContainer>
        </Container>
      </>
    )}
  </ScrollView>
);
