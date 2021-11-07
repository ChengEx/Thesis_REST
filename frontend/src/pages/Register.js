import React,{ useState,useEffect } from 'react'
import { Button, Form } from 'semantic-ui-react';
import { useHistory, useLocation} from 'react-router-dom';
import axios from 'axios';
import {MessageExamplePositive ,MessageExampleNegative} from '../messageBox';
import '../pages/Register.css'

const initialState = {
    username:'',
    password:'',
    confirmPassword:'',
    email:''
}

const Register = () =>{
    // const { username,password,confirmPassword,email} = initialState;
    // const [ state, setState] = useState(initialState);
    const [ username, setUsername] = useState('');
    const [ password, setPassword] = useState('');
    const [ confirmPassword, setConfirmPassword] = useState('');
    const [ email, setEmail] = useState('');
    
    
    
    
    
    const addUser = async(data) =>{
        const response = await axios.post('http://localhost:5000/users',data);
        if(response === 200){
            MessageExamplePositive(response.data);
        }
    }

    const onSubmit = (event)=>{
        event.preventDefault();
        console.log(username,password,confirmPassword,email)
        if(password != confirmPassword){
            console.log("password are not same");
        }
        if(!username || !password || !confirmPassword || !email){
            console.log("Please input the value into each input");
        }
        else{
            var postData ={};
            postData.username = username;
                postData.password = password;
            postData.email = email;
            addUser(postData);
        }
        
        //history.push("/");
        
    }   
    // const onChange = (event)=>{
    //     let { name, value} = event.target;
    //     setState({...state,[name]: value});
    // }

    return (
        <div style={{marginTop:"100px"}}>
            <form style={{
                margin:"auto",
                padding:"15px",
                maxWidth:"400px",
                alignContent:"center"
            }}
            onSubmit={onSubmit}
            >
                <label htmlFor="username">Username</label>
                <input
                    type="text"
                    id="username"
                    //name="username"
                    placeholder="Enter Username..."
                    onChange={e=> setUsername(e.target.value)}
                    //value={username}
                    />
                <label htmlFor="password">Password</label>
                <input
                    type="text"
                    id="password"
                    name="password"
                    placeholder="Enter Password..."
                    onChange={e=>setPassword(e.target.value)}
                    //value={password}
                    />
                <label htmlFor="confirmPassword">ConfirmPassword</label>
                <input
                    type="text"
                    id="confirmPassword"
                    name="confirmPassword"
                    placeholder="Enter ConfirmPassword..."
                    onChange={e=>setConfirmPassword(e.target.value)}
                    //value={confirmPassword}
                    />
                <label htmlFor="email">Email</label>
                <input
                    type="text"
                    id="email"
                    name="email"
                    placeholder="Enter Email..."
                    onChange={e=>setEmail(e.target.value)}
                    //value={email}
                    />
                <input type="submit" value="Add"/>

            </form>
        </div>
    )
}

export default Register
