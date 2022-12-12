import { useState } from "react";
import NavBar from "./components/NavBar";
import StackCont from "./components/Container";

const App = () => {
  const [searchInput, setSearchInput] = useState("");
  const [mangaData, setMangaData] = useState([]);

  let props = {
    searchInput,
    setSearchInput,
    mangaData,
    setMangaData,
  };
  return (
    <div>
      <NavBar {...props} />
      <StackCont {...props} />
    </div>
  );
};

export default App;
