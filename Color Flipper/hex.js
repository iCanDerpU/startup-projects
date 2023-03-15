const hex = "0123456789ABCDEF"
const flipper = () =>{
    let color = ["#"]
    for (let i = 0 ; i < 6 ; i++ ){
        let index = Math.floor(Math.random() * hex.length)
        color.push(hex[index])
    }
    return  color.join("")
}
function rgbToHex(col)
{
    if(col.charAt(0)=='r')
    {
        col=col.replace('rgb(','').replace(')','').split(',');
        let r=parseInt(col[0], 10).toString(16);
        let g=parseInt(col[1], 10).toString(16);
        let b=parseInt(col[2], 10).toString(16);
        r=r.length==1?'0'+r:r; g=g.length==1?'0'+g:g; b=b.length==1?'0'+b:b;
        let colHex='#'+r+g+b;
        return colHex;
    }
}

const changeBackgroundColor = () => document.body.style.backgroundColor =  flipper()

const textColor = () => document.getElementById("clrtext").style.color = document.body.style.backgroundColor

const textChange = () => document.getElementById("clrtext").textContent = rgbToHex(document.body.style.backgroundColor)
 