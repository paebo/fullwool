import "./App.css";
import { useState, useEffect, useContext } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import axios from "axios";

function App() {
  const [items, setItems] = useState([]);

  const fetchItems = async () => {
    return await axios.get("http://localhost:8080/fullwool");
  };

  function fetchInventoryItems() {
    fetchItems().then((data) => setItems(data.data));
  }
  useEffect(() => {
    fetchItems();
    console.log(items);
  }, [items]);

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
