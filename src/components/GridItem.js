
import React from "react";

//  The application should render different images (of your choice) to the screen. Each image should listen for click events.
function handleItemClick (){
    console.log ("clicked");
}
function GridItem(props) {
    return (
        <div onClick = {handleItemClick} className ="col-md-4">
            <div className="card mb-4 shadow-sm">
                {/* <svg className="bd-placeholder-img card-img-top" width="282px" height="100%" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: Thumbnail"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c" /><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg> */}
                <img alt="loteria" src={props.src}/>
            </div>
        </div>
// Every time an image is clicked, the images rendered to the page should shuffle themselves in a random order.
// Once the user's score is reset after an incorrect guess, the game should restart.
        
    )
}
export default GridItem;