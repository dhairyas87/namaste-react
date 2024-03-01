import User from "./User";
import UserClass from "./UserClass";
const About = () => {
    return(
        <div>
            <h1>
                About 
            </h1>
            <div>
                This is Namaste React About Us Page
            </div>
            <UserClass name={"Dhairya Shah Class Props"} location ={ "Sydney,Australia"}/>
        </div>
    )
}

export default About;