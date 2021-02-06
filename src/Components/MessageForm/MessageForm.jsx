import React from 'react';
import axios from 'axios';
import styles from "./messageForm.module.css";

export default function MessageForm() {
    const [nameInput, setNameInput] = React.useState('');
    const [lastnameInput, setLastnameInput] = React.useState('');
    const [emailInput, setEmailInput] = React.useState('');
    const [messageInput, setMessageInput] = React.useState('');

    const onNameChange = (e)=>{
        setNameInput(e.target.value);
    }

    const onLastNameChange = (e)=>{
        setLastnameInput(e.target.value);
    }

    const onEmailChange = (e)=>{
        setEmailInput(e.target.value);
    }

    const onMessageChange = (e)=>{
        setMessageInput(e.target.value);
    }

    const handleSubmit = (e)=>{
        e.preventDefault();

        axios({method: 'POST',
                url: "http://localhost:3000/",
                data: nameInput}).then((res)=>{
                    if(res.data.status === 'success'){
                        console.log('Everything is OK');
                        resetForm();
                    } else if(res.data.status === 'fail'){
                        console.log('Everything is Bad');
                    }
                })
    }

    const resetForm = ()=>{
        setNameInput('');
        setLastnameInput(''); 
        setEmailInput(''); 
        setMessageInput('');
    }

    return(
    <form id='contact-form' onSubmit={e=> handleSubmit(e)} 
            className={`${styles.MessageForm}`} method='POST'>
        
        <div className={`${styles.form_group}`}>
            <label htmlFor='name'></label>
            <input type='text' value={nameInput} onChange={(e)=> onNameChange(e)} 
                    className={`${styles.form_control}`} 
                    placeholder='NAME' />
        </div>

        <div className={`${styles.form_group}`}>
            <label htmlFor='lastName'></label>
            <input type='text' value={lastnameInput} onChange={(e)=> onLastNameChange(e)} 
                    className={`${styles.form_control}`} 
                    placeholder='LAST NAME' />
        </div>

        <div className={`${styles.form_group}`}>
            <label htmlFor='Email'></label>
            <input type='text' value={emailInput} onChange={e=> onEmailChange(e)} 
                    className={`${styles.form_control}`} 
                    placeholder='EMAIL ADDRESS' />
        </div>

        <div className={`${styles.form_group}`}>
            <label htmlFor='message'></label>
            <textarea value={messageInput} onChange={e=> onMessageChange(e)} 
                    className={`${styles.messageInput}`} 
                    rows='4'  
                    placeholder='MESSAGE' ></textarea>
        </div>

        <button type='submit' className={`${styles.btn}`}>Submit</button>

    </form>
    )
};