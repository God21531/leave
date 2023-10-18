import React from "react";
import { useEffect } from "react";
import { useHistory } from "react-router";


const Adminlogout=()=>
{

const history=useHistory();


    const callogoutpage= async ()=>
{
    try {
        const res = await fetch("/adminlogout",{
            method:"GET",
            headers:{
                Accept:"application/json",
              "Content-Type":"application/json"
            },
           credentials:"include"
           
          });
        
        const data =await res.json();
        console.log(data);
        
       if(res.status !== 200)
        {
            const error = new Error(res.error)
            throw error;
        }
    } catch (error) {
        history.push("/adminlogin");
    }
    }

   useEffect(
        ()=>{
            callogoutpage();
        },);

    return(
    <>

    </>
    
    );
}

export default Adminlogout;