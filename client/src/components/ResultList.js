import React from "react";
import "./ResultList.css";
function ResultList(props) {
  return (
    <ul className="list-group">
      {props.results.map(result => (
        <li className="list-group-item" key={result.id}>
          <img alt={result.title} class="img" className="img-fluid" src={result.images.original.url} width="325" height="325"/>
        
        </li>
      ))}
    </ul>
  );
}

export default ResultList;
