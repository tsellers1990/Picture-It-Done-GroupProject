import React from "react";
import "./ResultList.css";
function ResultList(props) {
  return (
    <ul className="list-group">
      {props.results.map(result => (
        <li className="list-group-item" key={result.id}>
          <img alt={result.title} class="img" className="img-fluid" src={result.images.original.url} width="442" height="442"/>
        
        </li>
      ))}
    </ul>
  );
}

export default ResultList;
