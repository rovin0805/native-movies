import React from "react";
import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import PropTypes from "prop-types";
import { apiImage } from "../../api";
import Poster from "../Poster";
import Votes from "../Votes";

const Container = styled.View`
  height: 100%;
  width: 100%;
`;

const BG = styled.Image`
  height: 100%;
  width: 100%;
  position: absolute;
  opacity: 0.4;
`;

const Content = styled.View`
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  height: 100%;
`;

const Data = styled.View`
  width: 50%;
  align-items: flex-start;
`;

const Title = styled.Text`
  color: white;
  font-weight: bold;
  font-size: 19px;
  margin-bottom: 10px;
`;

const Overview = styled.Text`
  color: rgb(220, 220, 220);
  font-weight: 500;
  font-size: 14px;
`;

const Button = styled.View`
  margin-top: 10px;
  background-color: #0984e3;
  padding: 10px;
  border-radius: 3px;
`;

const ButtonText = styled.Text`
  color: white;
`;

const Slide = ({ id, title, backgroundImage, votes, overview, poster }) => (
  <Container>
    <BG source={{ uri: apiImage(backgroundImage) }} />
    <Content>
      <Poster url={apiImage(poster)} />
      <Data>
        <Title>{title.length > 30 ? `${title.slice(0, 30)}...` : title}</Title>
        <Votes votes={votes} />
        <Overview>
          {overview.length > 120 ? `${overview.slice(0, 120)}...` : overview}
        </Overview>
        <TouchableOpacity>
          <Button>
            <ButtonText>View details</ButtonText>
          </Button>
        </TouchableOpacity>
      </Data>
    </Content>
  </Container>
);

Slide.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  backgroundImage: PropTypes.string.isRequired,
  votes: PropTypes.number.isRequired,
  overview: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
};

export default Slide;
