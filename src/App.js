import { useState, useEffect } from "react";

import "./App.css";

import CardList from "./components/card-list/CardList";
import SearchBox from "./components/search-box/SearchBox";

const App = () => {
  const [searchField, setSearchField] = useState("");
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((users) => setMonsters(users));
  }, []);

  useEffect(() => {
    const newFilteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    });

    setFilteredMonsters(newFilteredMonsters);
  }, [monsters, searchField]);

  const handleFilter = (e) => {
    const searchF = e.target.value.toLocaleLowerCase();

    setSearchField(searchF);
  };

  return (
    <div>
      <h1 className="app-title">Monster Rolodex</h1>
      <SearchBox
        onChangeHandler={handleFilter}
        className="monsters-search-box"
        placeholder="search monsters"
      />
      <CardList monsters={filteredMonsters} />
    </div>
  );
};

export default App;
