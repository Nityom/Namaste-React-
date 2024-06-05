

/*
*  <div id= "parent">  
       <div id="child">
       <h1> im a h1 tag</h1>

       </div>
       <div id="child2">
       <h1> im a h1 tag</h1>

       </div>
         </div>
*
*
*
*
*


*/

const parent = React.createElement(
    "div",
    { id: "parent" },[
    React.createElement(
      "div",
      { id: "child" },
      [React.createElement("h1", {}, "I'm a h1 tag"),
      React.createElement("h2", {}, "I'm a h2 tag"),
    ]),
    React.createElement(
        "div",
        { id: "child2" },
        [React.createElement("h1", {}, "I'm a oo tag"),
        React.createElement("h2", {}, "I'm a kk tag"),
      ])]
  );
  

 








const heading = React.createElement("h1", { id : "heading" , xyz: "abc"}, "hello world from React !");  //{} -> is to give attributes to the tag
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent); 

console.log(heading); //object