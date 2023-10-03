import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMusicsFetch } from "./state/musicState";
import MyComponent from "./components/MyComponent";
import "./App.css";
import RootLayout from "./layout/RootLayout";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import MusicDetail from "./components/MusicDetail";
import EditMusicForm from "./components/EditPage";

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

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<RootLayout handleSearch={handleSearch} />}>
        <Route index element={<MyComponent searchQuery={searchQuery} />} />
        <Route path='/:id' element={<MusicDetail />} />
        <Route path='/:id/edit' element={<EditMusicForm />} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
}

export default App;
