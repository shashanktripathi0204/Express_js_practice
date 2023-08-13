//To see how the final website should work, run "node solution.js".
//Make sure you have installed all the dependencies with "npm i".
//The password is ILoveProgramming
import express from "express";
import morgan from "morgan";
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));
import bodyParser from "body-parser";


const app = express();
const port = 3000;
var password_check = "";



app.use(bodyParser.urlencoded({extended:true}));


function passwordCheck(req, res, next){
    password_check = req.body['password'];
    console.log("The password entered is: " + password_check);
    // return password_check;
    next();
}

// first part of the get is the location, the path, or we can also call it the endpoint
app.use(passwordCheck);
app.get("/", (req, res) => {
    console.log(__dirname + "/public/index.html");
    res.sendFile(__dirname + "/public/index.html");
});


// here /check is the endpoint
app.post("/check",(req,res)=>{
    if(password_check == 'ILoveProgramming'){
        res.sendFile(__dirname + "/public/secret.html");
    }
    else{
        res.sendFile(__dirname + "/public/index.html");
    }
    
});

app.listen(port ,()=>{
    console.log(`The app is listning on the port ${port}`);
})