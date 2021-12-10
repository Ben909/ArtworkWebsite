import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import "../styles/posts.css";

export default class post5 extends Component {
    render() {
        return (
            <main>
                <article className="centreblog">

                <h1>Code Literacy and Criticality</h1>

                    <p> A simple Google search for the words ‘criticality’ and ‘literacy’ returns the definition of being able to read and write crucial information as underlined by 
                        specific ideological beliefs and social factors. This relationship has existed in the world of programming since the first computers were developed. As such, 
                        literacy in terms of computers emphasizes ‘’the importance, flexibility and power of writing for and with computers’’ (Vee, 2013). The popularity of programming 
                        hardly needs introduction, however, there is a need to introduce a dialogue about the reasons for its popularity and importance throughout history and in the 21st 
                        century as exemplified by Annette Vee. 
                    </p>    

                    <p> The rise of programming literacy has revealed the connectedness of code and computers in our daily lives. Its affordances as a powerful mode of communication are 
                        extended by the relationship between computational and textual literacy. Vee argues that ‘’the refrain of literacy in reference to computer programming is not only 
                        apt because of these parallels, but that our definition of literacy must shift to accommodate this new form of digital writing’’ (Vee,2013). The technology of code, 
                        much like textual literacy, is facilitated by humans through computer programming to allow developers to represent, express and interpret ideas digitally. 
                    </p>

                    <p> While computers represent these super sophisticated pieces of technology, their main functionality comes from how we manipulate them to serve our needs. They 
                        communicate and complete tasks using a numerical language or machine code known as binary that is designed to carry out instructions based on how the computer 
                        interprets a series of 1’s and 0’s. Each written program is composed of millions upon millions of 1’s and 0’s that makes it a difficult language to understand. 
                        This is where programming comes in handy, which translates our English instructions into Binary code. ‘Procedural literacy’ according to Vee involves the potential 
                        to reconstruct rules and concepts to understand procedures not solely on computers, but in general (Vee, 2013: 46) . This is how programming languages have 
                        fundamentally become extremely useful tools as the middleman for translating any program into machine code. These languages vary in how powerful they are, depending on 
                        a variety of computational tasks, for example constructing a moving robot proposes more specific technical and mechanical requirements than developing a website.
                    </p>

                    <p> In the 21st century, the importance of teaching programming in the classroom is underscored by the specialized domain of computer science and how it flows into other 
                        specialized fields. The scope of computer literacy moves well beyond any conceived boundary that seeks to gauge or limit its functions in the world. This 
                        literacy changes as new inscription technologies are added to computers.
                    </p>

                    <aside className="reference">
                        <p><strong>References</strong><br></br>Vee, A. (2013).<i>Understanding Computer Programming as a Literacy.</i>University of Pittsburg.<br></br></p>
                    </aside>

                    <section className="next">
                        <Link to="/post4">
                        <button><strong>Previous Blog</strong></button>
                        </Link>

                        <Link to="/blogs">
                        <button><strong>View Blogs</strong></button>
                        </Link>

                        <Link to="/post6">
                        <button><strong>Next Blog</strong></button>
                        </Link>
                    </section>

                </article>
            </main>
        )
    }
}
