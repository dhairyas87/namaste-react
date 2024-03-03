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


# EP 06 :- Rendering the Real World Web App

Two Approaches 

1) Load -> wait API call for 500ms () -> Then Render
2) Load -> Render UI -> API call  -> Render again 

2nd approach is bit better as UI has some sort of screen to the customers/Consumers

1) Use Effect Hooks -> useEffect () -> Normal JS function it has use case of rendering the data to UI

Use Effect hook has two arguments ->  1) Call Back function (Arrow function)

2) Dependencies

Use Effect call back function is called after the component is rendered i.e 2nd Approach for rendering data


Fetch is as function is provided by the Browser and its used to fetch data from API;

fetch() => Returns a promise and use resolve it. it is a used to fetch data for the API's like swiggy API


CORS  Policy :- Cross Side Scripting :- Browsers block calling of one API origin to another API call origin


CORS Extension from the Chrome :-

To Load a Spinner we need to make a condition untill the data is empty or list length is empty it would show an empty spineer

However, showing a spinner is not a good practice instead load a dummy page untill then (Dummy Page untill data loads 

so that user can anticipate that cards are going to be displayed or the what view the data would be displayed i.e skeleton of the UI ) this practice of displaying Skeleton untill actual data is loaded is called shimmer ui practice.



Reconcillation of component (Re render of component) happens when we use the useState method for tracking the variable for rendering 


Use state re renders (Re-concillation) the component with the new value passed during setting

1) Why Need Use State and useEffect?
2) How?
3) 


Whenever the local state variable is changed/updates then whole component is reconcilled and re rendered. It executes reconcillation cycle again.


# EP 07 :- Routing for the React 


Use Effect  :- 

-->  Use Effect is called using react library , it has two arguments 1) Call Back Function 2) Dependency Array 

Call Back Function is mandatory in use Effect 

1) If no dependency array is provided in Use Effect Function, it will be called on every component render

useEffect(()={console.log("Header component")})

2) If the dependency array is empty, then use Effect is called on only initial render of the component i.e just once (For example, in Body component  use effect is called for fetching Swiggy data)

useEffect(()={console.log("Header component")},[]);

3) if something is added, then it will be only called when dependency changes

i.e useEffect(()={console.log("Header component")},[btnNameReact]);

The above will be called only when btnNameReact changes

Use State Variable Usage


1) Never create local Use State Variables outside of component
2) Never create use state variables inside if Else/ For loop/ Inside Functions as it can create in consitencies


Routing :- npm router DOM is used for creating routes inside react application

npm i react-router-dom

Routing configuration inside at App config stage

Router Provider provides the routing configuration to the App

createBrowserRouter is the recommended router for all react router web based projects


Outlet is used for the child routing in the application 


Never Use Anchor Tag for the linking, as it reloads the whole page again.

So not to reload the whole page, we can use Link Component in React


React is also a single page application, as it has only single page and routing outlet helps us to not change the page just change the children component


1) Client Side Routing 

2) Server side routing :- Old way of routing as it fetches entire index.html, about


Dynamic Routing :- Dynamic route for every restaurant present in the application 

path:"/restaurants/:resId" -> :resId is the dynamic route of the restaurant


# EP 08 :- Lets Get Classy (Class Based Components)

Functional Component -> is normal java script function

Class Component  => Normal JS Class


To create a class compnent create class which is extending React.component

Have a render method inside a class -> This would return a piece of JSX which would be displayed in the React app. (This is actual rendering happening)

Passing Props in the React Class Component => create a constructor which would have a props as an argument and inside that have a super(props) call. This super(props) is mandatory while passing the values

Super (props) is crucial in the above example because it is the only place to set up our initial state and bind event handlers before the React component mounts. By using super(props), we ensure that the constructor props are correctly passed to the parent constructor, allowing us to access this.

When instance of class is created a constructor is called and the props is extracted and assigned to current object


Creating State :-

For Functional Component creating a state we use Hooks i.e useState();

Invoking a functional component means mounting a functional component

Loading a class based component means creating a instance of a class

Hooks are very new concept.

To create a State variable , the best place is in the constructor 
this.state is a reserved varibale and it has all the variables for the state variables

For updating a state varibale in the functional component we were using the set Method to update the state of variables

 //this.state.count = this.state.count+1 (This is incorrect. Never update the state variables direct as it would not update it directly)

 use this.setState to update any of the state variables.


 React state variable lifecycle. (Loading the component -> Mounting the component)

when working having component based class, then it creates two instances of csame class.


Life Cycle when multiple children class component are present then this is how its called.

React preference is rendering compared to API calls

Important!!! 

Child Contructor
UserClass.js:16 Child render
UserClass.js:8 Child Contructor
UserClass.js:16 Child render
UserClass.js:8 Child Contructor
UserClass.js:16 Child render
UserClass.js:39 Child Component Mounted (Loaded)
serClass.js:39 Child Component Mounted (Loaded)
serClass.js:39 Child Component Mounted (Loaded)
AboutClass.js:24 Parent Component Mounted (Loaded)



 Mounting -> Parent -> Child Relationship -> When parent gets loaded (Mounted) Constructor of parent wuold be called then parent rendered would be called then in render it would go to child(class based component), so it has not has finished mounting, then it would trigger child based life cycle would be called -> Childeren constrcutor, children render and children componentDidMount method. Then the parent component Did mount method is class


 componentDidMount method is used to make API calls. Why? ->  So to quickly render the compoent and then make API call so that component does not have to wait to rendering

 In Functional Component we make API call using useEffect Hook, which has an dependency array which has call back function. So that react does not wait for API call to render the compoent.


Imporant React life cycle diagram:-  https://www.google.com/url?sa=i&url=https%3A%2F%2Fprojects.wojtekmaj.pl%2Freact-lifecycle-methods-diagram%2F&psig=AOvVaw0mWdV_pdHHhHX2wAPsceYC&ust=1709509980342000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCJDgyYrj1oQDFQAAAAAdAAAAABAE


Mounting of a component in react has two phases 1st is render phase and 2nd is the commit phase. In the render phase the react calls constructor and render method of all the child classes it updates the DOM,and then in commit phase React updates the DOM with schedule calls in componentDidMount method.

React batches render phases for all the children and then it renders it comit.
Then commit would be in Batch as well.


1) Constructor is called (parent)
2) Render (Parent) is called (It happens with state variables of dummy data)
3) it has loaded in webpage for ms
4) component Did mount is called, which makes and API call . 
5) In compoentDidmount will asign this.state by using set state method.
6) This finishes the mounting cycle
7) Now update cycle beigns. i.e. Render again is called , so now HTML is loaded with new API data
8) Then it calls componentDidUpdate is called.

