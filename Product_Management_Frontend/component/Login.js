import { useState } from 'react';
import {Link,useNavigate} from 'react-router-dom'
function Login(){
    
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
        fetch('http://localhost:8090/validateAdmin',{
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
                navigate('/home');
            }
            else{
                alert("please verify credentials")
            }
        })
        
    }
    
    return(
        
         <div id='login-div'>
         <h2>Admin Login</h2>
         UserName:<input type="text" onChange={(e)=>setuname(e.target.value)}/><br/><br/>
         Password:<input type="password" onChange={(e)=>setpwd(e.target.value)}/><br/><br/>
         <button onClick={validate}>login</button><br/><br/>
         {/* <Link to="/home" >Home</Link> */}
         <Link to="/Signup" >Signup Here</Link><br></br>
         <Link to="/userlogin">Login as user</Link>
         </div>
    )
}
export default Login;

