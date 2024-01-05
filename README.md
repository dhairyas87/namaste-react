# namaste-react
 Namaste React Lessons and Assignments


# EP02:-
npx parcel index.html

Creating a bundle and be production ready
HMR :- Hot Module Replacement. It automatically refreshes as immediately. It used file watching algorithm and it refreshes automatically as soon as it saves up and builds up once again.

It also caches things for project so that it builds it quickly

It also does image optimization for rendering the UI image.

It also minification of files for production ready features.

Minify by removing the white spaces from the project

Differential Bundling is also done :- (Runs in different versions of browsers (Older version of the browser is supported))

Consistent Bundling.

Diagnostics by rendering what the error is .

Error Handling

SSL handshake testing by provided https 

Reliable caching

Tree Shaking -> In whole code, 100 fucntions but only used 4-5 code, it would remove unwanted codes.

Dist folder would have the production ready file.


Remove the main : "App.js" from the package.json as we are running index.html through parcel as it has the entry point of the project

# Package, Package-lock.json

it has dependencies 

Package.json has the approximate version of the dependencies.

^ -> Automatic Minor Version Update
~ -> Automatic Majore Version Update (Not Recommeneded

package.lock.json has the SHA key hashing which is track of production ready packages 

# Browsers list

Add browsers list in the package.json and it would supports the compatibility according to browsers version

It can be also configured depending upon the coutnry users such as Chrome US users.

parcel with the help of Browsers list is used to configure all the browsers provided/

//browserslist.dev is the website it would give the list of the browsers along with its version

# EP 03



#JSX React (T JSX is a syntax extension for JavaScript that lets you write HTML-like markup inside a JavaScript file. )

JSX understands the ECMA Script (Java Script);

Parcel transpiles(Converts the JSX code to Java script codes) the codes of JSX code before it reaches Java script engine.

Baybel Package (It is inside parcel)  :- converts the JSX Code to the Java script code

Babel is a JavaScript compiler that converts modern JavaScript code into a version compatible with all browsers. Babel enables React developers to use the latest JavaScript syntax in their components(JSX). Babel transpiles modern JavaScript for use in React components and all browsers.

JSX has the camel casing in its attributes

JSX for single line does not have rounded brackets however if you are using mulitple line then we have to write in Rounded brackets

2 Types of Components

1) Class based components :- Old Way Writing code
2) Functional Components :- New Way Writing code

JSX Santiize the data and prevent cross script data  (Malicious data is removed by the JSX)



# EP 04 :- Coding of the swiggy UI

This to take consideration is the wireframes and components needed to make a simple swiggy ui app

Any App :- Senior Engineer

1) Planning :- UI Design / Mock / Wireframes

2) Low Level Design :- Components 

    -> Header
        -> Logo
        -> Nav Items
    -> Body
        -> Search Component
        -> Restaurant card container
            -> Restaurant Card
                -> Img
                -> Name of Restaurant
                -> Cusines
                -> Star Rating 
                -> Time to prepare
    -> Footer
        -> Links (Address, Contact Info)
        -> Copyright

Style attribute in a JSX is a java script object and needs to be given as a java script object


Dynamic Cards :- Props :- Properties passed to a component

You can pass Props object which has different properties

you can pass as an individual properties inside the java script which is called destructuring on the fly

Do not use indexes as keys while using looping as rendering is used for optimization for rendering UI in react

so index as keys should not be used


# EP 05 :- Getting hooked

/*
App
        -> Header
                -> Logo
                -> Nav Items
        -> Body
                -> Search Component
                -> Restaurant card container
                -> Restaurant Card
        -> Footer
                -> Links (Address, Contact Info)
                -> Copyright
*/

Why React? --> Anything can be done using CSS, JS and HTML

React framework makes the developer's life easy also its easy to develop large scalable applications using react framework

There are two types of export and imports 

1) Default Export and import

const nameofcomponent ={

}

export default nameofcomponent.js;
import nameofcomponent from path;

2) Named Export and import

export const nameofcomponent ={

}
import {nameofcomponent} from path;


# React Hooks :-  

Normal JS Utility Function 

1) useState() :- 
2) useEffect() :- 

React Hook is normal JS function provided by React to use for changes state changes


State Variable is mantaining the state inside a component .

Whenever State Variable updates, react re-renders the component.

React makes DOM operations superfast and that is why the react is used in making large scale applicaitons 

DOM Operations is code for the React



# React Algorihtm :- Uses Reconcialltion Algorithm / React Fiber

Rest contatiner -> Suppose it has 15 Restaurant Cards -> Ui changes from 15 cards to 5-6 Filtered Cards 

React creates Virtual DOM (It is not actual DOM).

Virtaul DOM is representation of the Actual DOM -> It creates an object of an component.

Virtaul DOM is a React Object of a component.

React Fiber :- Diff Algo :- Finds out the differences between old and new Virtual DOM of the component. Then it would just update the Actual DOM.



