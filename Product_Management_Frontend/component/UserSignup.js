import { useState } from 'react';
import {Link} from 'react-router-dom';

function UserSignup(){

    const [uname,setuname]=useState('');
    const [pwd,setpassword]=useState('');

    const register=()=>{
        let data={
            email:uname,
            password:pwd
        }
        fetch('http://localhost:8090/saveUser',{
            method:"POST",
            body:JSON.stringify(data),
            headers:{
                "Content-Type":"application/json",
                "Access-Control-Allow-Origin":"*"
            }
        }).then(response=>response.json())
          .then(json=>console.log(json));
          alert('sign up successful')
    }

    return(
        <div id="signup-div">
        <h2>User SignUp</h2>
        Username:<input type="text" onChange={(e)=>setuname(e.target.value)}/> <br/><br/>
        Password:<input type="password" onChange={(e)=>setpassword(e.target.value)}/><br/><br/>
        <button onClick={register}>Register</button><br></br>
        <Link id="link" to="/userlogin">Already Registered !!! Login</Link>  
        </div>
    )
}

export default UserSignup;