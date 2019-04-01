
import React from "react";
import GridItem from "./GridItem";

var array1 = [{id: 1, path: "images/elCotorro.jpg"}, {id: 2, path: "images/elCorazon.jpg"}, {id: 3, path: "images/laDama.jpg"},{id: 4, path: "images/laMuerte.jpg"},{id: 5, path: "images/elPescado.jpg"},{id: 6, path: "images/laCalavera.jpg"},{id: 7, path: "images/laGarza.jpg"},{id: 8, path: "images/elVioloncello.jpg"},{id: 9, path: "images/laBota.jpg"},{id: 10, path: "images/laMaceta.jpg"},{id: 11, path: "images/elBorracho.jpg"},{id: 12, path: "images/elParaguas.jpg"}, ];

const newArray = array1.map(function(item) { 
  return <GridItem key={item.id} src={item.path} />
});

console.log (newArray);



function Grid() {
    return (
        <div className="container">

            <div className="row">
                {newArray}
            </div>
        </div>
    )
}
export default Grid;