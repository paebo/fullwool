import "./App.css";
import { useState, useEffect, useContext } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import axios from "axios";

function App() {
  const [items, setItems] = useState([]);

  const fetchItems = async () => {
    const response = await axios.get("http://localhost:8081/about");
    setItems(response);
  };

  useEffect(() => {
    fetchItems();
    return () => {};
  }, []);

  console.log(items);

  return (
    <Router>
      <div className='App'>
        <header className='App-header'>
          Rólam | Galéria | Tanfolyamok | Áruház | Blog
        </header>
      </div>
    </Router>
  );
}

export default App;
