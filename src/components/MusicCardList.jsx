/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useDispatch, useSelector } from "react-redux";
import { Box, Flex, Text } from "rebass";
import { FaPlayCircle } from "react-icons/fa";
import { useEffect, useState } from "react";
import { editMusic, getMusicsFetch } from "../state/musicState";
import { Link } from "react-router-dom";

const artistNameStyles = css`
  margin-top: 10px;
  font-weight: bold;
`;

const playButtonStyle = css`
  box-shadow: 0 10px 14px rgba(0, 0, 0, 0.5);
  border-radius: 50%;
  width: 30px;
  height: 30px;
  transition: height 0.1s ease-in-out;
  transition: width 0.1s ease-in-out;

  &:hover {
    box-shadow: 0 10px 14px rgba(0, 0, 0, 0.6);
    width: 40px;
    height: 40px;
  }
`;

const textStyle = css`
  color: black;
`;

const Card = ({ artist, trackName, coverImage }) => {
  const { darkMode } = useSelector((state) => state.general);
  const cardStyles = css`
    border: 1px solid #ccc;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(255, 255, 255, 0.1);
    padding: 20px;
    margin: 10px;
    width: 250px;
    background-color: ${darkMode ? "black" : "white"};
    color: ${darkMode ? "white" : "black"};
    transition: box-shadow 0.5s ease-in-out;
    transition: width 0.5s ease-in-out;
    &:hover {
      box-shadow: 0 10px 14px rgba(0, 0, 0, 0.9);
    }
  `;
  return (
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
      <Flex alignItems={"center"} justifyContent={"space-between"}>
        <Box>
          <Text css={artistNameStyles}>{artist}</Text>
          <Text>{trackName}</Text>
        </Box>
        <FaPlayCircle size={"30px"} css={playButtonStyle} />
      </Flex>
    </Box>
  );
};

const MusicCardList = ({ searchQuery }) => {
  const musics = useSelector((state) => state.musics.musics);
  const [display, setDisplay] = useState([]);

  const dispatch = useDispatch();
  const handleEditing = (music) => {
    dispatch(editMusic({ ...music, title: "atmetam" }));
  };

  useEffect(() => {
    dispatch(getMusicsFetch());
  }, []);

  useEffect(() => {
    if (searchQuery === "") {
      setDisplay(musics);
    } else {
      const lowercaseQuery = searchQuery.toLowerCase();
      const new_list = musics.filter(
        (item) =>
          item.title.toLowerCase().includes(lowercaseQuery) ||
          item.artist.toLowerCase().includes(lowercaseQuery)
      );
      setDisplay(new_list);
    }
  }, [searchQuery, musics]);
  return (
    <Flex flexWrap={"wrap"} justifyContent={"space-around"}>
      {display.map((music) => (
        <Link css={textStyle} to={`/${music.id}`} key={music.id}>
          <Card
            artist={music.artist}
            trackName={music.title}
            coverImage={music.coverImage}
            handleEditing={handleEditing}
          />
        </Link>
      ))}
    </Flex>
  );
};

export default MusicCardList;
