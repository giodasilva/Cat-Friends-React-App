import "./App.css";
import React, {useState, useEffect} from "react";
import CardList from "../components/CardList";
import Scroll from "../components/Scroll";
import SearchBox from "../components/SearchBox";

function App(){
  // constructor() {
  //   super();
  //   this.state = {
  //     robots: [],
  //     searchField: "",
  //   };
  // }
  ////Using the useState Hook to replicate what was done with the constructor when App was a class
  const [robots, setRobots] = useState([])
 const [searchField, setSearchField] = useState('')

  // componentDidMount() {
  //   fetch("https://jsonplaceholder.typicode.com/users")
  //     .then((response) => response.json())
  //     .then((users) => this.setState({ robots: users }));
  // }

  //  const onSearchChange = (event) => {
  //   this.setState({ searchField: event.target.value });
  // };

  useEffect(()=>{
   fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => {setRobots(users)});

  },[])

  const onSearchChange = (event) => {
    setSearchField(event.target.value);
  };

    const filteredRobots = robots.filter(robot => {
      return robot.name
        .toLowerCase()
        .includes(searchField.toLowerCase());
    });

    return !robots.length ?
    <h1>Loading...</h1>:(
      <div className="tc">
        <h1>Cat Friends</h1>
        <SearchBox searchChange={onSearchChange} />
        <Scroll>
          <CardList robots={filteredRobots} />
        </Scroll>
      </div>
    );
  
}

export default App;
