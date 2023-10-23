import Hero from "../HeroSection/Hero";
import NavBar from "../NavBar/NavBar";
import { fetchTopAlbums, fetchNewAlbums, fetchAllSongs } from "../../API/api";
import { useEffect, useState } from "react";
import Section from "../Section/Section";
import styles from "./LandingPage.module.css";
import Footer from "../Footer/Footer";

function App() {
  const [topAlbums, setTopAlbums] = useState([]);
  const [newAlbums, setNewAlbums] = useState([]);
  const [allSongs, setAllSongs] = useState([]);
  const [value, setValue] = useState(0);
  const [filteredData, setFilteredData] = useState([]);

  const generateData = async () => {
    try {
      const data = await fetchTopAlbums();
      setTopAlbums(data);
    } catch (err) {
      console.log("Top albums error", err);
    }
  };

  const generateNewAlbums = async () => {
    try {
      const data = await fetchNewAlbums();
      setNewAlbums(data);
    } catch (err) {
      console.log("New albums", err);
    }
  };

  const generateAllSongs = async () => {
    try {
      const data = await fetchAllSongs();
      setAllSongs(data);
      setFilteredData(data);
    } catch (err) {
      console.log("All songs", err);
    }
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
    console.log(newValue);
  };

  const filterSongData = (value) => {
    let key;
    if (value === 0) {
      setFilteredData(allSongs);
      return;
    } else if (value === 1) {
      key = "rock";
    } else if (value === 2) {
      key = "pop";
    }

    const res = allSongs.filter((item) => item.genre.key === key);
    setFilteredData(res);
  };

  useEffect(() => {
    filterSongData(value);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  useEffect(() => {
    generateData();
    generateNewAlbums();
    generateAllSongs();
  }, []);

  const CombinedData = topAlbums?.concat(newAlbums);

  return (
    <div className="App">
      <NavBar data={CombinedData} logo={true} feedback={true} search={true} />

      <Hero />

      <div className={styles.sectionWrapper}>
        <Section data={topAlbums} title="Top-albums" type="album" />
        <Section data={newAlbums} title="New-Albums" type="album" />
        <Section
          data={allSongs}
          title="Songs"
          type="song"
          value={value}
          handleChange={handleChange}
        />
      </div>

      <hr className={styles.line}></hr>

      <Footer />
    </div>
  );
}

export default App;
