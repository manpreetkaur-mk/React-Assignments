import React from "react";
import './Instagram.css';
import { Select, TextField, InputLabel, MenuItem, FormControl, Radio, RadioGroup, Button, FormControlLabel, FormLabel, Checkbox, } from '@mui/material';


function Instagram() {
    return (
       

        <div className="body">

            <div className="box1">
            
            <img className="center" style={{ width: "200px" }} src="https://www.instagram.com/static/images/web/logged_out_wordmark-2x.png/d2529dbef8ed.png" />

            <p style={{textAlign:'center',color:'#757574'}}>
                Sign up to see photos and videos  <br />
                from your friends.
            </p>

            <Button sx={{minWidth:300}} style={{ marginLeft:'100px' }} variant="contained">Log in with Facebook</Button>

            <p style={{textAlign:'center',color:'#757574'}}>
                -----------------OR-----------------
            </p>


 
            <TextField style={{paddingLeft:'100px'}} sx={{ m: 1, minWidth: 300 }} placeholder="Mobile Number OR Email" /> <br />
            <TextField style={{paddingLeft:'100px'}} sx={{ m: 1, minWidth: 300 }} placeholder="Full Name" /> <br />
            <TextField style={{paddingLeft:'100px'}} sx={{ m: 1, minWidth: 300 }} placeholder="Username" /> <br />
            <TextField style={{paddingLeft:'100px'}} sx={{ m: 1, minWidth: 300 }} placeholder="Password" /><br />

            <p style={{textAlign:'center',color:'#757574'}}>
                People who use our service may have uploaded <br />
                your contact information to Instagram. Learn <br />
                More  <br />

                By signing up, you agree to our Terms , <br />
                Privacy Policy and Cookies Policy <br />
            </p>


            <Button sx={{minWidth:300}} style={{ marginLeft:'100px' }} variant="contained">Sign up</Button>

            </div>

            <div className="box2">
<p style={{textAlign:'center',color:'#757574',cursor:'pointer'}}>Have an account ? Log in</p>
            </div>

        

        </div>
    )
}

export default Instagram;