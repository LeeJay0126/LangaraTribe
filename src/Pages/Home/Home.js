import { useState } from "react";
import Nav from "../../Components/Nav/Nav";
import Hero from "./HomeComponents/Hero";
import DisplayArea from "./HomeComponents/DisplayArea";
import Menu from "../../Components/Menu/Menu";

const Home = () => {
    const [heroState, setState] = useState("default");
    const [menuOpen, setMenuOpen] = useState(false);


    return (
        <div>
            <div>
                <Nav setMenuOpen={setMenuOpen} menuOpen={menuOpen}/>
                <Hero setState={setState} />
                <DisplayArea heroState={heroState} />
            </div>
            <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
        </div>
    );
};

export default Home;