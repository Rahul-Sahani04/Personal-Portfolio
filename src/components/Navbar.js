
function Navbar() {
    return (
        <header id="navbar">
            <nav>
                <ul className="nav-list">
                    {/* <li><img src={process.env.PUBLIC_URL + "/favicon_icons/android-chrome-512x512.png" } width="30px" /> </li> */}
                    <li><a href="#welcome-section">Welcome</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="https://github.com/Rahul-Sahani04" target="_blank" rel="noreferrer">GitHub</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Navbar;

// function App() {
//     return (
    
//   );
// }

// export default App;
