
import React from "react";
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
        
    )
}
export default GridItem;