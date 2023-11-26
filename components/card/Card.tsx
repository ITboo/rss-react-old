/* eslint-disable @next/next/no-img-element */
import { CardProps } from "@/types/types";

import React from "react";

const Card = ({ results }: CardProps) => {
  let displayList: string | JSX.Element[];

  if (results) {
    displayList = results.map((x) => {
      const { id, name, gender, image } = x;
      return (
          <div key={id} >
            <div className="card">
              <div>
                <img className="card__img" src={image} alt={name} />
              </div>
              <div className="card__info">
                <div>
                  <div className="card__name">{name}</div>
                  <div className="card__gender">
                    <div>{gender}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
      );
    });
  } else {
    displayList = "No Characters Found";
  }
  return <>{displayList}</>;
};

export default Card;
