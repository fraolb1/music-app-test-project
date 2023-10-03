/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React from "react";
import { Box, Flex, Text } from "rebass";

const cardStyles = css`
  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 20px;
  margin: 10px;
  width: 300px;
  background-color: white;
  transition: box-shadow 0.5s ease-in-out;
  transition: width 0.5s ease-in-out;
  &:hover {
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
    width: 320px;
  }
`;

const artistNameStyles = css`
  margin-top: 10px;
  font-weight: bold;
`;

const Card = ({ artist, trackName, coverImage }) => (
  <Box css={cardStyles}>
    <img
      src={coverImage}
      alt={`${trackName} Cover`}
      css={css`
        width: 100%;
        height: auto;
        border-radius: 4px;
      `}
    />
    <Text css={artistNameStyles}>{artist}</Text>
    <Text>{trackName}</Text>
  </Box>
);

const MusicCardList = () => (
  <Flex flexWrap={"wrap"} justifyContent={"space-around"}>
    <Card artist='Artist 1' trackName='Track 1' coverImage='/album-cover.jpg' />
    <Card artist='Artist 2' trackName='Track 2' coverImage='/album-cover.jpg' />
    <Card artist='Artist 3' trackName='Track 3' coverImage='/album-cover.jpg' />
    <Card artist='Artist 1' trackName='Track 1' coverImage='/album-cover.jpg' />
    <Card artist='Artist 2' trackName='Track 2' coverImage='/album-cover.jpg' />
    <Card artist='Artist 3' trackName='Track 3' coverImage='/album-cover.jpg' />
  </Flex>
);

export default MusicCardList;
