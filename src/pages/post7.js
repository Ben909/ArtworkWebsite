import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import "../styles/posts.css";

export default class post7 extends Component {
    render() {
        return (
            <main>
                <article className="centreblog">

                <h1>Analysis on Artwork 2</h1>

                    <p> The artwork ‘The Web Stalker Interface 1998’ by Matthew Fuller, Colin Green and Simon Pope will be analysed using the theoretical framework ‘Net Art, Post-internet Art, 
                        New Aesthetics: The Fundamentals of Art on the Internet’ as posed by Marie Chatel.
                    </p>    

                    <p> This artwork which is in fact also a browser, challenges the conventions of the web as a medium. It is a visual interface that critiques commercial browsers for their 
                        passive and limited modes of web browsing. The radial interface visualizes the act of browsing as an engagement with the structure of the web, thereby removing all 
                        images and text formats and instead allowing users to move freely and view the interconnectedness of texts. As such, we as the observer become immersed in the network 
                        that maintains the structure of the internet. The artwork embraces that which exists both ‘inside’ and ‘outside’ the internet. Chatel maintains, “The main difference 
                        thus lies in the position of the artist himself which in the later form not only witness acts but also engages with the web just as any other participant would” 
                        (Chatel, 2019). This offers a provocation for net artists to establish and view their work beyond the elements of HTML and to consider the engagement software possesses 
                        as a key to the underside of the web.
                    </p>

                    <p> In the 4th iteration of Web Stalker, the goal was to present an interface that allow users to access the qualities of networks embedded within additional software. 
                        “We wanted to develop an approach that would privilege fast access to information, and the ability to look ahead of the structures that were presented to users as 
                        well as to map the idiomatic structures of sites” (Fuller, 2017). The artwork proposes a vision that channels the content of websites and how browsers interpret 
                        mark-up language. It then repurposed the data to display the network of links embedded within it. This creates new aesthetics that visualizes websites in their 
                        own unique way. Every link draws a line which connects to URLs in the form of circles to create a map which spreads out in every direction. 
                    </p>

                    <p> This rhizomatic structure draws attention to the phrase referred to by Chatel as ‘New Aesthetics’, where the focus of artwork shifts from being an object to instead 
                        emphasize the underlying systems of artistic production. The Web Stalker artwork intends to use technical intervention to refine the aesthetic qualities provided 
                        by the internet as a space for creative inventions. It analyses websites through their links to contribute to the development of software as a means to elicit 
                        innovation which is driven by social and cultural forces. The Web Stalker artwork treats the internet as a space for reinvention. But what value lies in the 
                        ‘The Web Stalker’ artwork when it is designed as an anti-browser software? Not only does it visualize entire websites as a single interconnected entity, but each 
                        artefact also explores the designer’s intention throughout the document in a unique and meaningful way. 
                    </p>

                    <aside className="reference">
                        <p><strong>References</strong><br></br>Chatel, M. (2019).<i>Net Art, Post-internet Art, New Aesthetic: The Fundamentals of Art on the Internet.</i>Digital Art Weekly.<br></br>
                        Fuller, M. (2017).<i>Crawl, Map, Link, Read, Copy, Repeat.</i>RHIZOME.<br></br>
                        </p>
                    </aside>

                    <section className="next">
                        <Link to="/post6">
                        <button><strong>Previous Blog</strong></button>
                        </Link>

                        <Link to="/blogs">
                        <button><strong>View Blogs</strong></button>
                        </Link>

                        <Link to="/post8">
                        <button><strong>Next Blog</strong></button>
                        </Link>
                    </section>

                </article>
            </main>
        )
    }
}
