import { css } from "@emotion/react";
import React from "react";
import { Box, Flex, Text } from "rebass";

const sidebarStyle = css`
  width: 250px;
  background-color: #f3f4f6;
  color: #000;
  min-height: 100vh;
  padding-top: 20px;
`;

const sectionTitleStyle = css`
  padding: 10px;
  border-top: 1px solid #444;
  border-bottom: 1px solid #444;
`;

const sidebarItemStyle = css`
  padding: 10px;
  cursor: pointer;

  &:hover {
    background-color: #444;
  }
`;

const Sidebar = () => {
  return (
    <Flex css={sidebarStyle} flexDirection='column'>
      {/* Library Section */}
      <Box css={sectionTitleStyle}>
        <Text fontWeight='bold'>Library</Text>
      </Box>

      {/* Home and About under Playlist */}
      <Box css={sidebarItemStyle}>
        <Text>Home</Text>
      </Box>
      <Box css={sidebarItemStyle}>
        <Text>About</Text>
      </Box>

      {/* Multiple Playlists under Playlist */}
      <Box css={sectionTitleStyle}>
        <Text fontWeight='bold'>Playlists</Text>
      </Box>
      <Box css={sidebarItemStyle}>
        <Text>Playlist 1</Text>
      </Box>
      <Box css={sidebarItemStyle}>
        <Text>Playlist 2</Text>
      </Box>
      <Box css={sidebarItemStyle}>
        <Text>Playlist 3</Text>
      </Box>
      {/* Add more playlists as needed */}
    </Flex>
  );
};

export default Sidebar;
