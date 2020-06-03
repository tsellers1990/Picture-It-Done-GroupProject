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