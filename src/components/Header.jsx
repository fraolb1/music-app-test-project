/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Box, Flex, Text } from "rebass";
import { Input } from "@rebass/forms";

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

const Header = () => {
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
      <Box css={avatarStyle}>
        <Text ml={15} fontSize='24px'>
          Fira
        </Text>
      </Box>
    </Flex>
  );
};

export default Header;
