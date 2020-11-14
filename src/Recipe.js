import React from "react";
import style from "./recipe.module.css";

const Recipe = ({ title, calories, image, share, ingredients }) => {
  return (
    <div className={style.recipe}>
      <h1> {title} </h1>
      <ol>
        {ingredients.map((ingredient) => (
          <li>{ingredient.text}</li>
        ))}
      </ol>
      <p> {calories} </p>
      <img className={style.image} src={image} alt="" />
      <p>
        <a href={share} target="__blank">
          {" "}
          Link{" "}
        </a>
      </p>
    </div>
  );
};

export default Recipe;
