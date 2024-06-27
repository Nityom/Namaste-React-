
import Profile from "./ProfileClass";
import React from "react";

class About extends React.Component{
    constructor(props){
        super(props);

        // console.log(" Parent Constructor");
    }
  
    componentDidMount(){
        // console.log("Parent Component Did Mount")
    }


    render(){
        // console.log(" Parent Render");
        return(
            <div>
                <h1>About</h1>
                <h2>This is my Food App</h2>
    <Profile name={"Nityom Tikhe (class)" } location={"Nagpur"} contact = {"@nityomrr"}/>
            </div>
        );
    }
};


export default About;