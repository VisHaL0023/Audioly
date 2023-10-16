import Hero from "./components/HeroSection/Hero";
import NavBar from "./components/NavBar/NavBar";
import { fetchTopAlbums } from "./API/api";
import { useEffect, useState } from "react";
import Card from "./components/Card/Card";

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

      {topAlbums.map((item) => {
        return (
          <Card key ={item.id} data = {item} type="album" />
        )
      })}
    </div>
  );
}

export default App;
