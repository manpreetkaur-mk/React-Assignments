import React ,{useState,} from "react";


export default function Toogle() {

  let [Info,setInfo]=useState({
    Name:"Manpreet ",
    Lastname:'kaur'
   
  })
  return (
    <div >
      
      <div >
      <p > First Name = {Info.Name}</p>
      <p>Last Name = {Info.Lastname}</p>
      


      <button onClick={()=>{
       if(Info.Name==='Manpreet ') 
       {setInfo({
          Name:'Aaayushmaan ',
          Lastname:'Verma'
       
        })}
        else{
          setInfo({
            Name:'Manpreet ',
            Lastname:'kaur'
           
          })
        }
      
      }}>Click Me</button>
      </div>
    </div>
  );
}