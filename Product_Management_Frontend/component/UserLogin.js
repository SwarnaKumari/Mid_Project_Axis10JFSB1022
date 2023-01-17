import { useState } from 'react';
import {Link,useNavigate} from 'react-router-dom'
function UserLogin(){
    
    const navigate = useNavigate();
    const [uname,setuname]=useState('');
    const [pwd,setpwd]=useState('');
    const validate=()=>{
        if(uname==""||pwd==""){
            alert("Fill Credentials")
        }
        let data={
            email:uname,
            password:pwd
        }
        fetch('http://localhost:8090/validate',{
            method:"POST",
            body:JSON.stringify(data),
            headers:{
                "Content-Type":"application/json",
                "Access-Control-Allow-Origin":"*"
            }
        }).then(response=>{return response.text();})
        .then((text)=>{
            if(text=='Valid'){
                alert("login successful");
                navigate('/userhome');
            }
            else{
                alert("please verify credentials")
            }
        })
        
    }
    
    return(
        
         <div id='login-div'>
         <h2>User Login</h2>
         UserName:<input type="text" onChange={(e)=>setuname(e.target.value)}/><br/><br/>
         Password:<input type="password" onChange={(e)=>setpwd(e.target.value)}/><br/><br/>
         <button onClick={validate}>login</button><br/><br/>
         {/* <Link to="/home" >Home</Link> */}
         <Link to="/usersignup" >Signup Here</Link><br></br>
         <Link to="/login" >Login as Admin</Link>
         </div>
    )
}
export default UserLogin;

