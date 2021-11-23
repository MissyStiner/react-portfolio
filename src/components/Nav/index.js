import React from 'react';



function Nav() {

  return (
    <header>
    <h2 className="mx-2">
        <a className="mx-2" href="/">
            Missy Stiner
        </a>
    </h2>
    <nav>
        <ul className="flex-row">
            <li className="mx-2">
                <a href="#about">
                About me
                </a>
            </li>
            <li className="mx-2">
                <a href="#gallery">
                Projects
                </a>
            </li>
            <li className="mx-2">
                <a href="#contact">
                Contact Me
                </a>
            </li>
            <li className="mx-2">
                <a href="https://www.linkedin.com/in/melissajts" target="_blank">
                Resume
                </a>
            </li>
    </ul>
  </nav>
</header>
  );
}

export default Nav;