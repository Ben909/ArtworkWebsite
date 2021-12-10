import './App.css';
import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Footer from './components/Footer';
import Blogs from './pages/Blogs';
import Artworks from './pages/Artworks';
import Wireframes from './pages/Wireframes';

import Post1 from './pages/post1';
import Post2 from './pages/post2';
import Post3 from './pages/post3';
import Post4 from './pages/post4';
import Post5 from './pages/post5';
import Post6 from './pages/post6';
import Post7 from './pages/post7';
import Post8 from './pages/post8';
import Post9 from './pages/post9';
import Post10 from './pages/post10';



function App() {
  return (
    <div className="App">
        <Navbar/>
        <Routes>
            <Route exact path='/' element={<Home/>}/>
            <Route export path='/blogs' element={<Blogs/>}/>
            <Route export path='/artworks' element={<Artworks/>}/>
            <Route export path='/wireframes' element={<Wireframes/>}/>

            <Route export path='/post1' element={<Post1/>}/>
            <Route export path='/post2' element={<Post2/>}/>
            <Route export path='/post3' element={<Post3/>}/>
            <Route export path='/post4' element={<Post4/>}/>
            <Route export path='/post5' element={<Post5/>}/>
            <Route export path='/post6' element={<Post6/>}/>
            <Route export path='/post7' element={<Post7/>}/>
            <Route export path='/post8' element={<Post8/>}/>
            <Route export path='/post9' element={<Post9/>}/>
            <Route export path='/post10' element={<Post10/>}/>

        </Routes>
        <Footer/>
    </div>
  );
}

export default App;
