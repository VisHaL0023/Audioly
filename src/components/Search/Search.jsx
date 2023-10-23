import React, { useState } from "react";
import styles from "./Search.module.css";
import { ReactComponent as SearchIcon } from "../../assets/Search icon.svg";
import MenuItems from "../MenuItems/MenuItems";

export const Search = ({ placeholder, data }) => {
  const [val, setVal] = useState(null);
  const [searchedData, setSearchedData] = useState([]);

  const onSubmit = (e) => {
    e.preventDefault();
  };

  const changeHandler = (e) => {
    const eventValue = e.target.value;
    setVal(eventValue);
    const res = data?.filter((item) =>
      item.title.toLowerCase().includes(eventValue.toLowerCase())
    );
    setSearchedData(res);
  };

  return (
    <div>
      <div>
        <form className={styles.wrapper}>
          <input
            className={styles.search}
            placeholder={placeholder}
            required
            value={val}
            onChange={changeHandler}
          />
          <div>
            <button
              className={styles.searchButton}
              type="submit"
              onSubmit={onSubmit}
            >
              <SearchIcon />
            </button>
          </div>
        </form>
      </div>

      <div className={styles.dropDownWrapper}>
        {searchedData?.length ? (
          <MenuItems albums={searchedData} />
        ) : val ? (
          <div className={styles.not_found_wrapper}>
            <p className={styles.not_found_message}>No Data Found</p>
          </div>
        ) : null}
      </div>
    </div>
  );
};
