import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from "react-bootstrap/Button";
import {useState, useEffect} from "react";

const CreateUser = () => {

    /* ------------ Password properties ------------ */

    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [passwordMatch, setPasswordMatch] = useState(true);
    const [passwordLenght, setPasswordLength] = useState(false);
    const [passwordLetter, setPasswordLetter] = useState(false);
    const [passwordNumber, setPasswordNumber] = useState(false);
    const [passwordSpecialChar, setPasswordSpecialChar] = useState(false);

    const regexNumber = /"a"/;
    const regexLetter = /"a"/;
    const specialChar = /"a"/;

    useEffect(() => {
        password.length > 7 && password.length <21 ? setPasswordLength(true) : setPasswordLength(false);
        password.match(regexLetter) ? setPasswordLetter(true) : setPasswordLetter(false);
        password.match(regexNumber) ? setPasswordNumber(true) : setPasswordNumber(false);
        password.match(specialChar) ? setPasswordSpecialChar(true) : setPasswordSpecialChar(false);
    }, [password])

    /* ------------ Confirm password ------------ */

    

    const funcPassWord = (e) =>{
        setPassword(e.target.value);
    }

    const funcConfirmPassWord = (e) => {
        setConfirmPassword(e.target.value);
    }

    useEffect(() => {
        
        if(password === confirmPassword){
            console.log(true)
            setPasswordMatch(true);
        }else{
            console.log(false)
            setPasswordMatch(false);
        }


    }, [password, confirmPassword])




    return (
        <div>
        <h2>Sign-in</h2>
        <Form>

            <Form.Group className="mb-3" controlId="Alias">
                <Form.Label>
                Alias
                </Form.Label>
                <Form.Control type="text" placeholder="Enter your alias"/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="birthday">
                <Form.Label>
                Birthday
                </Form.Label>
                <Form.Control type="date" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="email">
                <Form.Label>
                Email
                </Form.Label>
                <Form.Control type="email" placeholder="Enter your email"/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="password">
                <div className="createUser__password__regex">
                    <p>
                       The password must have:
                    </p>

                       <ul>
                            <li className={
                                passwordLenght ? "createUser__password__green" : "createUser__password__red"
                            }>a length from 8 to 20 characters</li>
                            <li className={
                                passwordLetter ? "createUser__password__green" : "createUser__password__red"
                            }>minimum 1 letter</li>
                            <li className={
                                passwordNumber ? "createUser__password__green" : "createUser__password__red"
                            }>minimum 1 number</li>
                            <li className={
                                passwordSpecialChar ? "createUser__password__green" : "createUser__password__red"
                            }>minimum 1 special character ( _ - & @ . )</li>
                        </ul>
                </div>
                
                <Form.Label>
                Password
                </Form.Label>
                <Form.Control type="password" placeholder="Enter your password" onChange={(e)=>{funcPassWord(e)}}/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="confirmPassword">
                <Form.Label>
                Confirm password
                </Form.Label>
                <Form.Control type="password" placeholder="Confirm password" onChange={(e)=>{ funcConfirmPassWord(e)} } />
                {
                    passwordMatch === false ? (
                        <Form.Text className="createUser__password__match">
                        The password doesn't match !
                        </Form.Text>
                    ): null 
                }
                
            </Form.Group>

            <Button variant="primary" type="submit">
                Submit
            </Button>

        </Form>
            
        </div>
    );
};

export default CreateUser;