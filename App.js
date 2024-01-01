
import React from "react";
import ReactDOM from "react-dom/client";
 
 //ReactDOM.create Element creates a React Element and when we render to DOM then only it become the HTML element.

 const root = ReactDOM.createRoot(document.getElementById("root"));

 const heading =  React.createElement(
        "h1",
        {id:"heading"},
        "Namaste React"
 )
const jsxHeading = (
<h1 id="heading1" className="heading" > 
Namaste React</h1>
)

// React Functional Components :- Any component starts with the Capital Alphates 

// Functional components :- Would return any JSX components


const HeadingComponent = () => {
        return <p className="heading">Namaste React from the React Functional Components</p>
}

const HeadingComponent2 = () => (
<h1 className="heading">Namaste React from the React Functional Components 2</h1>
)
        


/* 
Both HeadingComponent and HeadingComponent2 are same functional component just syntax is different , we can write functional 
components in both the ways
*/

// To render React functional component on the webpage , you can use this 




root.render(<HeadingComponent />);

//Component Composition is component instide a component
const HeaderComponent3 = () => {
        return (
                <h2>
        <p className="heading"> Rendering from Component 3   </p>
               <HeadingComponent/> 
               </h2>
      )
};

root.render(<HeaderComponent3 />);


//Ways to write different components inside react and JSX

const HeaderComponent4 = () => {
        return (
                <h2>
        <p className="heading"> Rendering from Component 3   </p>
            {100*200}
            <HeadingComponent/>
            <HeaderComponent3></HeaderComponent3>
            {HeadingComponent2()}
               </h2>
      )
};
root.render(<HeaderComponent4 />);



 //root.render(jsxHeading);

 // We can write any java script code inside the React Functional component by enclosing it into curly brackets {}