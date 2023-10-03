import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMusicsFetch } from "./state/musicState";
import Header from "./components/Header";
import MyComponent from "./components/MyComponent";
import Sidebar from "./components/Sidebar";
import "./App.css";
import { Flex } from "rebass";

function App() {
  const musics = useSelector((state) => state.musics.musics);
  const dispatch = useDispatch();

  const [searchQuery, setSearchquery] = useState("");
  const handleSearch = (substring) => {
    setSearchquery(substring);
  };
  useEffect(() => {
    dispatch(getMusicsFetch());
  }, [dispatch]);

  return (
    <>
      <Header handleSearch={handleSearch} />
      <Flex flex={[1, 3]}>
        <Sidebar />
        <MyComponent searchQuery={searchQuery} />
      </Flex>
    </>
  );
}

export default App;
