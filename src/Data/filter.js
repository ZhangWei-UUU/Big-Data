
const LABS = [
    {key:"qrcode",value:"二维码生成器"},
    {key:"addressIp",value:"域名地址查询"},
    {key:"share-stock",value:"股票查询"}
];

export const translate_labs = (arg) =>{
    const result = LABS.filter(obj=>{
        if(arg === obj.key){
            return obj;
        }else{
            return null;
        }
    }); 
    if(result.length>0){
        return result[0].value; 
    } else{
        return null;
    }
   
};