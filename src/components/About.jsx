
import Profile from "./ProfileClass";
import React from "react";
import UserContext from "../utils/UserContext";

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
                <div>
                    LoggedIn User 
                    <UserContext.Consumer>
                        {({loggedInUser})=> 
                        <h1 className="text-xl font-bold">{loggedInUser}</h1>}
                    </UserContext.Consumer>
                </div>
                <h2>This is my Food App</h2>
    <Profile name={"Nityom Tikhe (class)" } location={"Nagpur"} contact = {"@nityomrr"}/>
            </div>
        );
    }
};


export default About;