/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Box, Button, Flex, Text } from "rebass";
import { Input } from "@rebass/forms";
import { useDispatch } from "react-redux";
import { addMusic } from "../state/musicState";

const headerStyle = css`
  background-color: #f3f4f6;
  color: #000;
  padding: 15px;
`;

const logoStyle = css`
  flex: 1;
`;

const searchBarStyle = css`
  flex: 2;
  border-radius: 20px;
  color: #fff;
`;

const avatarStyle = css`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const Header = ({ handleSearch }) => {
  const dispatch = useDispatch();
  const data = {
    title: "Song Title 1",
    artist: "Artist 21",
    album: "Album 1",
    coverImage: "https://example.com/cover-image-1.jpg",
    duration: "3:45",
    genre: "Pop",
    releaseDate: "2022-01-15",
    audioUrl: "https://example.com/audio/song1.mp3",
  };
  const handleAdd = () => {
    dispatch(addMusic(data));
  };
  return (
    <Flex css={headerStyle} alignItems={"center"}>
      <Box css={logoStyle}>
        <Text fontSize='24px' fontWeight='bold'>
          Music
        </Text>
      </Box>
      <Box css={searchBarStyle}>
        <Input
          type='text'
          placeholder='Search...'
          onChange={(e) => handleSearch(e.target.value)}
          sx={{
            backgroundColor: "white",
            color: "#000",
            border: "1px solid #fff",
            borderRadius: "5px",
            padding: "10px",
            width: "100%",
            boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
          }}
        />
      </Box>
      <Button onClick={handleAdd}>Add</Button>
      <Box css={avatarStyle}>
        <Text ml={15} fontSize='24px'>
          Fira
        </Text>
      </Box>
    </Flex>
  );
};

export default Header;
