import React from "react";
// import './ViewJobs.css';

export function Image(props) {
    return(
        <div {...props}>
            <p>This is a placeholder</p>
        </div>
    )
}

export function List({ children }) {
    return(
        <div className="list-overflow-container">
            <ul className="list-group">{children}</ul>
        </div>
    )
}

export function ListItem({ children }) {
return <li className="list-group-item">{children}</li>
}

export function Container({ fluid, children }) {
    return <div className={`container${fluid ? "-fluid" : ""}`}>{children}</div>;
}

export function Brick({data}){
    console.log(data)
    return(
        <div>
            <article className="par" id="background" style={{width: "100%", backgroundColor: "wheat", margin: "10px"}}>
                <h3>{data.title}</h3>
                <p>{data.description}</p>
                <img className="img" style={{width:"29%", float: "right", marginLeft: "20px", height: "200px"}} src={data.image} alt={`${data.user}'s image of their problem`} />
            </article>
        </div>
    );
}
  


export function Row({ fluid, children }) {
    return <div className={`row${fluid ? "-fluid" : ""}`}>{children}</div>;
}

export function Col({ size, children }) {
    return (
      <div
        className={size
          .split(" ")
          .map(size => "col-" + size)
          .join(" ")}
      >
        {children}
      </div>
    );
}
