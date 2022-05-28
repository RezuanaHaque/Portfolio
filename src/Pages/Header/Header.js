import React from 'react';
import ReactTypingEffect from 'react-typing-effect';
import UseData from '../../Hooks/UseData';
import './Header.css'
const Header = () => {
    const[projects]=UseData()
    return (
        <>
            <nav class="navbar navbar-expand-lg navbar-light bg-transparent container">
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01"
                    aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
                    <a className="navbar-brand" href="#">Hidden brand</a>
                    <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
                        <li class="nav-item active">
                            <a className="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                        </li>
                        <li class="nav-item">
                            <a className="nav-link" href="#">Link</a>
                        </li>
                        <li class="nav-item">
                            <a className="nav-link disabled" href="#">Disabled</a>
                        </li>
                    </ul>
                </div>
            </nav>
            <div class="box">
                <img height="800px"
                    width="100%"
                    src="https://webdesignersbrisbaneblog.files.wordpress.com/2020/04/website-design-brisbane1.jpeg"
                    alt="header image" />
                <div class="img-title text"/>
                    <h1 class="">Hey there, <br />
                        I am Rezuana Haque</h1>
                    <strong>
                        <ReactTypingEffect
                            text={["And I'm a Web Developer..."]}
                            cursorRenderer={cursor => <h1>{cursor}</h1>}
                            displayTextRenderer={(text, i) => {
                                return (
                                    <h1>
                                        {text.split('').map((char, i) => {
                                            const key = `${i}`;
                                            return (
                                                <span
                                                    key={key}
                                                    style={i % 2 === 0 ? { color: 'gold' } : {}}
                                                >{char}</span>
                                            );
                                        })}
                                    </h1>
                                );
                            }}
                        />
                    </strong>
                    <p class="text-warning d-none d-lg-block d-xl-block d-md-block">
                        I often work for clients who are trying to get their
                        product or service onto the web. The work is typically
                        very project focused and involves collaborating with a team that helps to coordinate the client’s
                        needs into the end
                        product. The client could be a tech company, an organization, or a government. The work could
                        involve front-end,
                        back-end, or full-stack web development.
                    </p>
                    <br />
                    <h3 class=" d-none d-lg-block d-xl-block d-md-block">Do You Want To Hire Me?</h3>
                    <a class="btn btn-danger" role="button" href="RezuanaHaque (3).pdf" download="rezuana-haque">
                        Resume
                    </a>

                </div>
            </>
    );
};

export default Header;