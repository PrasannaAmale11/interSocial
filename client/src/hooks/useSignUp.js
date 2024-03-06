import React, { useState } from 'react'
import toast, { Toaster } from 'react-hot-toast';
import { useAuthContext } from '../context/AuthContext';

const useSignUp = () => {
    const [loading, setLoading] = useState(false);

    const { setAuthUser} =useAuthContext()

    const signUp = async ({fullname,username,password,confirmPassword,gender}) =>{
       const sucess= handleInputError({fullname,username,password,confirmPassword,gender});
       if(!sucess) return;
        setLoading(true);
       try {
        const res = await fetch("/api/auth/signup", {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({fullname,username,password,confirmPassword,gender})
        })
        const data = await res.json();
        console.log(data);
        if(data.error){
            throw new Error(data.error)
        }

        // Local storage
        localStorage.setItem("chat-user",JSON.stringify(data));

        setAuthUser(data)

       } catch (error) {
        toast.error(error.message)
       } finally{
        setLoading(false);
       }
    }

    return {loading , signUp}
}

export default useSignUp

function handleInputError ({fullname,username,password,confirmPassword,gender}) {
    if(!fullname || !username || !password || !confirmPassword || !gender) {
        toast.error('Please fill all the fields');

        
        return false;
    }

    if(password !== confirmPassword) {
        toast.error("Password Do not match");
        return false;
    }

    if(password.lenght <= 6){
        toast.error("Password Should be at least 6")
            return false;
        
    }

    return true;
}