import React from "react";
// import { Component } from "materialize-css";
// any other imports, You might need a few such as the functional component for the db call

//choosing to use a class component because that's what I did in hw 19 and it works.
export function Input(props) {
    return (
        <div className="form-group" style={{ marginLeft : 20, marginRight: 50}}>
            <input className="form-control" {...props} />
        </div>
    );
}

// export function TextArea(props) {
//     return (
//         <div className="form-group">
//             <textarea className="form-control" {...props} />
//         </div>
//     );
// }

export function FormBtn(props) {
    return (
        <button {...props} style={{ float: "left", marginBottom: 10, margin: 20 }} className="btn btn-success" >
            Submit Job ➢
        </button>
    );
}
 
export function UploadBtn(props) {
    return(
        <button {...props} style={{ float: "left", marginBottom: 10, margin: 20 }} className="btn btn-success">
            Upload A Photo (required)
        </button>
    )
}