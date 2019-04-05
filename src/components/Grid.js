
import React from "react";
import GridItem from "./GridItem";
import NavBar from './Navbar2.js';

var array1 = [{ id: 1, path: "images/elCotorro.jpg" }, { id: 2, path: "images/elCorazon.jpg" }, { id: 3, path: "images/laDama.jpg" }, { id: 4, path: "images/laMuerte.jpg" }, { id: 5, path: "images/elPescado.jpg" }, { id: 6, path: "images/laCalavera.jpg" }, { id: 7, path: "images/laGarza.jpg" }, { id: 8, path: "images/elVioloncello.jpg" }, { id: 9, path: "images/laBota.jpg" }, { id: 10, path: "images/laMaceta.jpg" }, { id: 11, path: "images/elMelon.jpg" }, { id: 12, path: "images/elParaguas.jpg" },];

function Grid(props) {
    return (
        <div>
            <NavBar />
            <div className="container">
                <div className="row">
                    {array1.map(function (item) {
                        return <GridItem key={item.id} src={item.path} clicked={props.handleItemClick} />
                    })}
                </div>
            </div>
        </div>
    )
}
export default Grid;