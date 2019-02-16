import React from "react";
import "./style.css";

function Row(props) {
    return (<div class="row justify-content-center">{props.children}</div>
       
    )
}

export default Row;