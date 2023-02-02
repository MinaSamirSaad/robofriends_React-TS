import { ChangeEvent, useEffect, useState } from "react";
import "./App.css";
import SearchBox from "./components/Search-box/SearchBox.component";
import { getData } from './utils/data.utils';
import CardList from "./components/card-list/CardList.component";

export type Robot = {
  id:string;
  name:string;
  email:string
}

const App = () => {
  const [robots, setRobots] = useState<Robot[]>([]);
  const [searchfield, setSearchfield] = useState("");
  const [filteredRobots, setFilteredRobots] = useState(robots);

  useEffect(() => {
    const fetchUsers = async()=>{
      const users = await getData<Robot[]>("https://jsonplaceholder.typicode.com/users")
      setRobots(users)
    }
    fetchUsers()
  }, []);
  useEffect(() => {
    const newFilteredRobots = robots.filter((robot) => {
      return robot.name.toLowerCase().includes(searchfield.toLowerCase());
    });
    setFilteredRobots(newFilteredRobots);
  }, [searchfield, robots]);

  const onSearchChange = (event:ChangeEvent<HTMLInputElement>):void=> {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchfield(searchFieldString);
  };

  return !robots.length ? (
    <h1>Loading</h1>
  ) : (
    <div className='App'>
      <h1 className='app-title'>RoboFriends</h1>
      <SearchBox
      className='monsters-search-box'
       searchChange={onSearchChange}
       placeholder='search monsters' /> 
        <CardList robots={filteredRobots} />
    </div>
  );
};

export default App;
