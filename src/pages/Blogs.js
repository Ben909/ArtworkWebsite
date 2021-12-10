import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import "../styles/blog.css";
import One from '../images/decolonize.png';
import Two from '../images/artanalysis.png';
import Three from '../images/techreflect.png';
import Four from '../images/critreflect.png';
import Five from '../images/codecrit.png';
import Six from '../images/digitaldivide-min.png';
import Seven from '../images/artworkanalysis-min.png';
import Eight from '../images/techreflection-min.png';
import Nine from '../images/artisticreflection-min.png';


export default class Menu extends Component {
    render() {
        return (

            <section className="blogmenu">
                <div className="container">
                    <div>
                        <h1><b>Close Readings, Alalysis and Critical Reflections</b></h1>
                        <p>This section covers theoretical engagement with the course, including artwork analysis and technical and creative reflections</p>
                    </div>

                    <main className="gridy">

                        <Link to="/post1">
                            <div className="singleBlog">
                                <img className="test" src={One} alt="pic"/>
                                <div className="blogContent">
                                    <h3>What is Decolonisation?</h3>
                                </div>    
                            </div>    
                        </Link>

                        <Link to="/post2">
                            <div className="singleBlog">
                                <img className="test" src={Two} alt="pic"/>
                                <div className="blogContent">
                                    <h3>Analysis on Artwork</h3>
                                </div>    
                            </div>    
                        </Link>

                        <Link to="/post3">
                            <div className="singleBlog">
                                <img className="test" src={Three} alt="pic"/>
                                <div className="blogContent">
                                    <h3>Technical Reflection</h3>
                                </div>    
                            </div>    
                        </Link>

                        <Link to="/post4">
                            <div className="singleBlog">
                                <img className="test" src={Four} alt="pic"/>
                                <div className="blogContent">
                                    <h3>Artistic Reflection</h3>
                                </div>    
                            </div>    
                        </Link>

                        <Link to="/post5">
                            <div className="singleBlog">
                                <img className="test" src={Five} alt="pic"/>
                                <div className="blogContent">
                                    <h3>Code Literacy and Criticality</h3>
                                </div>    
                            </div>    
                        </Link>

                        <Link to="/post6">
                            <div className="singleBlog">
                                <img className="test" src={Six} alt="pic"/>
                                <div className="blogContent">
                                    <h3>Digital Divide</h3>
                                </div>    
                            </div>    
                        </Link>

                        <Link to="/post7">
                            <div className="singleBlog">
                                <img className="test" src={Seven} alt="pic"/>
                                <div className="blogContent">
                                    <h3>Analysis on Artwork #2</h3>
                                </div>    
                            </div>    
                        </Link>

                        <Link to="/post8">
                            <div className="singleBlog">
                                <img className="test" src={Eight} alt="pic"/>
                                <div className="blogContent">
                                    <h3>Technical Reflection #2</h3>
                                </div>    
                            </div>    
                        </Link>

                        <Link to="/post9">
                            <div className="singleBlog">
                                <img className="test" src={Nine} alt="pic"/>
                                <div className="blogContent">
                                    <h3>Artistic Reflection #2</h3>
                                </div>    
                            </div>    
                        </Link>




                        <Link to="/post10">
                            <div className="singleBlog">
                                <img className="test" src={Three} alt="pic"/>
                                <div className="blogContent">
                                    <h3>Technical Reflection #3</h3>
                                </div>    
                            </div>    
                        </Link>


                    </main>
                </div>
            </section>

        )
    }
}
