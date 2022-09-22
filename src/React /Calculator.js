import React,{useState} from "react";


const Calculator =() => {


const [num,setNum]=useState("");

const cal =()=>{
    try{
setNum(eval(num));
    }catch(error){
        setNum("error");
  
  }
}

const clear =()=>{
    try{
        setNum(num.slice(0,-1));
    }catch(error){
setNum(" ");
    }
}




    return(

<div >


    <div  style={{backgroundColor:'pink',height:'400px',width:'400px',
                display:'flex',flexDirection:'column',flex:'1',marginLeft:'auto',marginRight:'auto',marginTop:'180px'}}>

                    
    <div  style={{flex:'0.25'}}>
        <input style={{height:'100px',width:'392px',fontSize:'30px'}} value={num} onChange={(e)=>setNum(e.target.value)}></input>
    </div>

    <div style={{flex:'0.15'}}>

        <button value={'C'} onClick={clear} style={{height:'60px',width:'100px',fontSize:'20px'}}>C</button>
        <button value={')'} onClick={(e)=>setNum(num + e.target.value)} style={{height:'60px',width:'100px',fontSize:'20px'}}>(</button>
        <button value={')'} onClick={(e)=>setNum(num + e.target.value)} style={{height:'60px',width:'100px',fontSize:'20px'}}>)</button>
        <button value={'/'} onClick={(e)=>setNum(num + e.target.value)} style={{height:'60px',width:'100px',fontSize:'20px'}}>/</button>

    </div>

    <div style={{flex:'0.15'}}>

        <button value={7} onClick={(e)=>setNum(num + e.target.value)}  style={{height:'60px',width:'100px',fontSize:'20px'}}>7</button>
        <button value={8} onClick={(e)=>setNum(num + e.target.value)} style={{height:'60px',width:'100px',fontSize:'20px'}}>8</button>
        <button value={9} onClick={(e)=>setNum(num + e.target.value)} style={{height:'60px',width:'100px',fontSize:'20px'}}>9</button>
        <button value={'*'} onClick={(e)=>setNum(num + e.target.value)} style={{height:'60px',width:'100px',fontSize:'20px'}}>×</button>

    </div>

    <div style={{flex:'0.15'}}>

        <button value={4} onClick={(e)=>setNum(num + e.target.value)} style={{height:'60px',width:'100px',fontSize:'20px'}}>4</button>
        <button value={5} onClick={(e)=>setNum(num + e.target.value)} style={{height:'60px',width:'100px',fontSize:'20px'}}>5</button>
        <button value={6} onClick={(e)=>setNum(num + e.target.value)} style={{height:'60px',width:'100px',fontSize:'20px'}}>6</button>
        <button value={'-'} onClick={(e)=>setNum(num + e.target.value)}  style={{height:'60px',width:'100px',fontSize:'20px'}}>−</button>

    </div>

    <div style={{flex:'0.15'}}>

        <button value={1} onClick={(e)=>setNum(num + e.target.value)} style={{height:'60px',width:'100px',fontSize:'20px'}}>1</button>
        <button value={2} onClick={(e)=>setNum(num + e.target.value)} style={{height:'60px',width:'100px',fontSize:'20px'}}>2</button>
        <button value={3} onClick={(e)=>setNum(num + e.target.value)} style={{height:'60px',width:'100px',fontSize:'20px'}}>3</button>
        <button value={'+'} onClick={(e)=>setNum(num + e.target.value)}  style={{height:'60px',width:'100px',fontSize:'20px'}}>+</button>

    </div>

    <div style={{flex:'0.15'}}>

        <button value={0} onClick={(e)=>setNum(num + e.target.value)} style={{height:'60px',width:'100px',fontSize:'20px'}}>0</button>
        <button value={'00'} onClick={(e)=>setNum(num + e.target.value)} style={{height:'60px',width:'100px',fontSize:'20px'}}>00</button>
        <button value={'.'} onClick={(e)=>setNum(num + e.target.value)}  style={{height:'60px',width:'100px',fontSize:'20px'}}>.</button>
        <button value={'='} onClick={cal}  style={{height:'60px',width:'100px',fontSize:'20px'}}>=</button>

    </div>               


    </div>
    
</div>

    )
}

export default  Calculator;