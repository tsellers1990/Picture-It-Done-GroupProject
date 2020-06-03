import React from "react";

export function Container(props) {
    return (
        <div {...props}>
            <article class="par"></article>
        </div>
    )
}

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
    return <li className="list-group-item"></li>
}