import Hero from "./components/HeroSection/Hero";
import NavBar from "./components/NavBar/NavBar";
import { fetchTopAlbums } from "./API/api";
import { useEffect, useState } from "react";
import Card from "./components/Card/Card";
import Section from "./components/Section/Section";

function App() {
  
  const [topAlbums, setTopAlbums] = useState([]);

  const generateData = async () =>{
    const data = await fetchTopAlbums();
    setTopAlbums(data);

    console.log(data);
  }

  useEffect(() => {
    generateData();
  }, []);

  return (
    <div className="App">
      < NavBar />

      <Hero />

      {/* {topAlbums.map((item) => {
        return (
          <Card key ={item.id} data = {item} type="album" />
        )
      })} */}
      <div>
        < Section data = {topAlbums} title="Top-albums" />
      </div>
    </div>
  );
}

export default App;
