import { BrowserRouter as Router, Route } from "react-router-dom";

import "./App.css";
import About from "./pages/About";
import Gallery from "./pages/Gallery";
import CourseList from "./pages/CourseList";
import Shop from "./pages/Shop";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
    return (
        <Router>
            <div className='App'>
                <Header />
                <Route exact path='/' component={Home} />
                <Route path='/about' component={About} />
                <Route path='/gallery' component={Gallery} />
                <Route path='/courses' component={CourseList} />
                <Route path='/shop' component={Shop} />
                <Route path='/blog' component={Blog} />
                <Route path='/contact' component={Contact} />
                <Footer />
            </div>
        </Router>
    );
}

export default App;
