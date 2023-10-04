import { css } from "@emotion/react";
import { Box, Button, Flex, Text } from "rebass";
import { Input } from "@rebass/forms";
import { useDispatch } from "react-redux";
import { addMusic } from "../state/musicState";
import { Link } from "react-router-dom";
import { FaPlusCircle } from "react-icons/fa";

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

const textStyle = css`
  color: black;
`;

const Header = ({ handleSearch }) => {
  return (
    <Flex css={headerStyle} alignItems={"center"}>
      <Box css={logoStyle}>
        <Text fontSize='24px' fontWeight='bold'>
          <Link css={textStyle} to='/'>
            Music
          </Link>
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

      <Box css={avatarStyle}>
        <Link to={"/add"}>
          <Button
            css={css`
              padding: 0;
            `}>
            <FaPlusCircle
              css={css`
                color: green;
                border-radius: 50%;
              `}
              size={40}
            />
          </Button>
        </Link>
      </Box>
    </Flex>
  );
};

export default Header;
