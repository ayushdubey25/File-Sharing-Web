export const generateRandomString=()=>{
    const characters='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    let result=''
    for(let i=0;i<6;i++){
        result+=characters.charAt(Math.floor(Math.random()*characters.length))
    }
    return result;
}