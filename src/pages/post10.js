import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import "../styles/posts.css";

export default class post9 extends Component {
    render() {
        return (
            <main>
                <article className="centreblog">

                <h1>Technical Reflection 3</h1>

                <p> This technical reflection discusses the final development and processes that were implemented for this website. The use of the React library has been one major 
                    addition to the project since the previous assignment. I will discuss the challenges that I’ve encountered and reflect on the failures and successes that has led 
                    to the current state of the website.
                </p>    

                <p> At first, the learning curve associated with React was intimidating yet simple in term of how components are created, imported and reused throughout the website. 
                    The challenge comes in the way React uses routing and links between different pages, and getting used to going back and forth between files to ensure everything is 
                    imported and used correctly. I succeeded in creating the navigation and establishing the appropriate routing between each main section of the website. I then proceeded to scaffold the contents 
                    of each page by assigning all the necessary resources to specific folders based on the work that was had done in assignment 1 and 2.
                </p>

                <p >When deploying to Github, I encountered an issue where the browser displays an error 404 message ‘this page cannot be reached’ whenever I attempt to reload a page. This
                    was a major problem since my internet artwork depends on the user reloading the webpage in order to display a new AI generated artwork.
                </p>

                <p> While looking for possible solutions I found that this issue occurs because react router is used to move between the pages of my application. This mechanism is called 
                    client side routing and it is not supported by every server which Github is included. Since I couldn’t fix this problem my internet artwork has been left in a difunctional 
                    state which required the user to re-view the Github deployment and navigate to the Artworks section to notice the effect. The index or homepage also does not display any 
                    content and requires the user to select ‘Home’ from the navigation bar to be able to see the actual homepage content.
                </p>

                    <section className="next">
                        <Link to="/post9">
                        <button><strong>Previous Blog</strong></button>
                        </Link>

                        <Link to="/blogs">
                        <button><strong>View Blogs</strong></button>
                        </Link>

                    </section>

                </article>
            </main>
        )
    }
}
