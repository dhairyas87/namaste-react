
import React from "react";
import ReactDOM from "react-dom/client";
        const reactParent = React.createElement("div",{id:"parent"},
        React.createElement("div",{id:"child"},
        React.createElement("h1",{id:"children"},"Hello world children")));

        const reactSiblings = React.createElement("div",{id:"parent2"},
        React.createElement("div",{id:"childsiblings"},
        [React.createElement("h1",{id:"child1"},"Hello world child1"),
        React.createElement("h1",{id1:"child2"},"Hello world child2")]));

        //JSX
        

        console.log(reactSiblings);
        const reactHeading =  React.createElement("h1",{id:"Heading"},"Hello World from React 1");
        const reactroot = ReactDOM.createRoot(document.getElementById("root"));
        reactroot.render(reactSiblings);
 