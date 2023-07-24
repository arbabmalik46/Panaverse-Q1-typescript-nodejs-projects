
/*
User will enter his credentials and system will verify if it is correct or not.
 */
console.log("Please Enter your credentials: ");

let valid:boolean=false;

let usernames = {
    username:"abm",
    password:2211
}

let usernamea =['abm','fa_1,','munawarr','babara1','sabirg','akhters','javeds','akhtara13','hussains13'];



const checkusername = (username:string)=>{
    var index_i = 0;
    usernamea.forEach(element => {
        if(element===username)
        {
            index_i = 1;
        }
    });
    if(index_i === 1)
    {
        return true;
    }
    if(index_i === 0)
    {
        return false
    }
}
if(checkusername("username"))
{
    valid=true;
}
else{
    console.log("Please Check Username/Password");
}
