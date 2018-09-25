import React from "react";

const Quote = props => (
  <figure>
      <img src={props.image} alt={props.travel} />
      <figcaption>
       <blockquote>{props.travel}</blockquote>
       <cite>{props.ville}</cite>
      <figcaption>
       <cite>{props.pays}</cite>
      </figcaption>
      </figcaption>
       <cite>{props.distance}</cite>
      </figure>
);

export default Quote;