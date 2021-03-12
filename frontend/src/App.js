import "./App.css";
import { useState, useEffect, useContext } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import axios from "axios";
import { ItemContext } from "./contexts/ItemContext";
import ItemList from "./pages/ItemList";

function App() {
  //const { items, setItems } = useContext(ItemContext);

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
  }, []);

  return (
    <Router>
      <div className='App'>
        <header className='App-header'></header>

        <Route path='/fullwool' component={ItemList} />

        <Link to='/fullwool'>
          <button>Click me</button>
        </Link>
      </div>
    </Router>
  );
}

export default App;
