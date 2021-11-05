import React,{ useState,useEffect } from 'react'
import { Button, Form } from 'semantic-ui-react';
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
    const [ state, setState] = useState(initialState);
    const { username,password,confirmPassword,email} = initialState;
    
    const onChange = (event)=>{
       let { name, value} = event.target;
       setState({...state,[name]: value});
    }

    const addUser = async(data) =>{
        const response = await axios.post('http://localhost:5000/users',data);
        if(response === 200){
            MessageExamplePositive(response.data);
        }
    }

    const onSubmit = (event)=>{
        event.preventDefault();
        if(password === confirmPassword){
            addUser(state);
        }else{
            console.log("password are not same");
        }
        
    }

    return (
        <div style={{marginTop:"100px"}}>
            <form style={{
                margin:"auto",
                padding:"15px",
                maxWidth:"400px",
                alignContent:"center"
            }}>
                <label htmlFor="Username">Username</label>
                <input
                    type="text"
                    id="username"
                    name="username"
                    placeholder="Enter Username..."
                    onChange={onChange}
                    value={username}/>
                <label htmlFor="Password">Password</label>
                <input
                    type="text"
                    id="password"
                    name="password"
                    placeholder="Enter Password..."
                    onChange={onChange}
                    value={password}/>
                <label htmlFor="ConfirmPassword">ConfirmPassword</label>
                <input
                    type="text"
                    id="confirmPassword"
                    name="confirmPassword"
                    placeholder="Enter ConfirmPassword..."
                    onChange={onChange}
                    value={confirmPassword}/>
                <label htmlFor="Email">Email</label>
                <input
                    type="text"
                    id="email"
                    name="email"
                    placeholder="Enter Email..."
                    onChange={onChange}
                    value={email}/>
                <input type="submit" value="Add"/>

            </form>
        </div>
    )
}

export default Register
