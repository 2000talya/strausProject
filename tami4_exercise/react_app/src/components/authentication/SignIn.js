import React, { useRef } from 'react'
import { Form } from 'react-bootstrap';
import { PersonCircle } from 'react-bootstrap-icons';
import { Link, useHistory } from 'react-router-dom';
import axios from 'axios';
import './authentication.css'


const SignIn = () => {
    let userName = useRef(null);
    let password = useRef(null);
    const history = useHistory();

    const handleSubmit = (event) => {
        event.preventDefault();
        let user = userName?.current?.value;
        let pass = password?.current?.value;
        if (user === "" || pass === "") {
            alert('fill in all details')
            return
        }
        else
            getToken()
    }

    const getToken = async () => {
        let bodyParams = await JSON.stringify({
            "username": userName.current.value,
            "password": password.current.value
        });

        let config = {
            method: 'post',
            url: 'http://localhost:8080/api/auth/signin',
            headers: {
                'Content-Type': 'application/json'
            },
            data: bodyParams
        };
        debugger
        axios(config)
            .then(function (response) {
                sessionStorage.setItem("token", response.data.token);
                history.push("/candidates");
            })
            .catch(function (error) {
                alert("error in sign in")
                console.log(error);
            });
    }

    return (
        <>
            <div className="wrapper fadeInDown">
                <div id="formContent">
                    <div className="fadeIn first">
                        <PersonCircle className="mt-5 mb-5" color="#8c8c8c" size={170} />
                    </div>
                    <Form>
                        <input ref={userName} type="text" id="login" className="fadeIn second" name="login" placeholder="username" />
                        <input ref={password} type="text" id="password" className="fadeIn third" name="login" placeholder="password" />
                        <input type="submit" className="fadeIn fourth" value="Sign In" onClick={(e) => handleSubmit(e)} />
                    </Form>
                    <div className="mb-5">
                        <Link to="/signup">SignUp</Link>
                    </div>
                </div>
            </div>

        </>
    )
}

export default SignIn

