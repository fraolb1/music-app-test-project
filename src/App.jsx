import { useEffect } from "react";
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

  useEffect(() => {
    dispatch(getMusicsFetch());
  }, [dispatch]);

  console.log(musics);
  return (
    <>
      <Header />
      <Flex flex={[1, 3]}>
        <Sidebar />
        <MyComponent />
      </Flex>
    </>
  );
}

export default App;
