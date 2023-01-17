import {Link} from 'react-router-dom';
function Logout(){
    return(
        <div id="logout-div">
        <Link id="link" to="/login">Logout</Link>  
        </div>
    )
}
export default Logout