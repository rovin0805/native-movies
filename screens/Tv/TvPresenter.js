import React from "react";
import styled from "styled-components/native";
import ScrollContainer from "../../components/ScrollContainer";
import HorizontalSlider from "../../components/HorizontalSlider";
import Vertical from "../../components/Vertical";
import List from "../../components/List";
import Horizontal from "../../components/Horizontal";

const Container = styled.View`
  margin-top: 20px;
`;

export default ({ refreshFn, loading, popular, topRated, today }) => (
  <ScrollContainer refreshFn={refreshFn} loading={loading}>
    <Container>
      <HorizontalSlider title={"Popular Shows"}>
        {popular?.length > 0 &&
          popular.map((show) => (
            <Vertical
              id={show.id}
              key={show.id}
              poster={show.poster_path}
              title={show.name}
              votes={show.vote_average}
            />
          ))}
      </HorizontalSlider>
      <HorizontalSlider title="Top Rated">
        {topRated?.length > 0 &&
          topRated.map((show) => (
            <Vertical
              key={show.id}
              id={show.id}
              poster={show.poster_path}
              title={show.name}
              votes={show.vote_average}
            />
          ))}
      </HorizontalSlider>
      <List title={"Airing Today"}>
        {today?.length > 0 &&
          today.map((show) => (
            <Horizontal
              key={show.id}
              id={show.id}
              title={show.name}
              poster={show.poster_path}
              overview={show.overview}
            />
          ))}
      </List>
    </Container>
  </ScrollContainer>
);
