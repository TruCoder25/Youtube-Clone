export const API_KEY = "AIzaSyDTUr6VhgUqjJ9eTiRfU7FwrIXpfzFSe6Y";



export const valur_converter = (value)=>{
    if(value>=1000000)
    {
        return Math.floor(value/1000000)+"M";
    }
    else if(value>=1000)
    {
        return Math.floor(value/1000)+"K";
    }
    else
    {
        return value;
    }
    
}
