import "./App.css";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import axios from "axios";
import About from "./pages/About";
import Gallery from "./pages/Gallery";
import CourseList from "./pages/CourseList";
import Shop from "./pages/Shop";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Header from "./components/Header";

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
                <Header />
                <Route path='/about' component={About} />
                <Route path='/gallery' component={Gallery} />
                <Route path='/courses' component={CourseList} />
                <Route path='/shop' component={Shop} />
                <Route path='/blog' component={Blog} />
                <Route path='/contact' component={Contact} />
            </div>
        </Router>
    );
}

export default App;
