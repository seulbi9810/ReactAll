import { useLocation } from "react-router-dom"

const Signup=()=>{

    const location= useLocation()

    return(
       
        <div>
            <h4>Signup page</h4>

            {/* <p>{location.state.name}:{location.state.age}</p> */}
            {
                location.state && <p>{location.state.name}:{location.state.age}</p>
            }
        </div>
    )
}
export default Signup