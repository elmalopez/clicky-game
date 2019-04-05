
import React from "react";

// The application should keep track of the user's score. The user's score should be incremented when clicking an image for the first time. The user's score should be reset to 0 if they click the same image more than once.

const userGuess = (1);
const userScore = (2);
const topScore = (3);

// if userGuess {
// console.log("You guessed correctly!")
// else ("You guessed incorrectly!")
//  };

const NavBar = function () {
    return (
        <div>
            <div className="navbar navbar-expand-lg navbar-light bg-light">
                <ul className="navbar-nav">
                    <li className="navbar-brand"><a href="/">Clicky Game</a></li>
                    <li className="nav-item">{userGuess}</li>
                    <li>Score: {userScore} | Top Score: {topScore}</li>
                </ul>
            </div>
        </div>
    )

}

export default NavBar;