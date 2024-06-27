import React from "react";


class Profile extends React.Component{
    constructor(props){
        super(props);
       
        
        this.state ={
            userInfo:{
                name: "Dummy",
                location: "Default",
                avatar_url : "https://Dummy-photo.com"
            }
        };
       
    };

    async componentDidMount(){
        // console.log("Child Component Did Mount");

        //Api call
        const data = await fetch("https://api.github.com/users/Nityom");
        const json = await data.json();
    this.setState({
        userInfo:json,
    });
    console.log(json);
    };

    componentWillUnmount(){
        console.log("component unmounted");
    }

    render(){
const {name,location,avatar_url} = this.state.userInfo;


        return(
      <div className="user-card">
             <img src={avatar_url} alt="avatar_url" width="200px" />
      <h2>Name : {name}</h2>
      <h3>Location :{location}</h3>
            </div>
        );
    };
};

export default Profile;