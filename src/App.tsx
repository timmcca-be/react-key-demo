import React, { useState } from "react";
import "./App.css";

function App() {
    const [ingredients, setIngredients] = useState(["eggs", "cheese", "bacon"]);

    // moves last ingredient to start
    const shuffle = () => setIngredients((ingredients) =>
        [ingredients[ingredients.length - 1]].concat(
            ingredients.slice(0, ingredients.length - 1)));

    return (
        <div className="App">
        <h1>omelette maker</h1>
        <button onClick={shuffle}>shuffle ingredients</button>
        <h2>this version has no keys :(</h2>
        {ingredients.map((ingredient) => (
            <label
                // no key prop!
                style={{display: "block"}}
            >
                <input type="checkbox" />
                {ingredient}
            </label>
        ))}
        <h2>this version has keys :)</h2>
        {ingredients.map((ingredient) => (
            <label
                key={ingredient}
                style={{display: "block"}}
            >
                <input type="checkbox" />
                {ingredient}
            </label>
        ))}
        </div>
    );
}

export default App;
