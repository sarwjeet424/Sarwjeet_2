document.querySelector("#roll").addEventListener("click",hahaha)


function hahaha(){
    var a = Math.floor(Math.random()*6)+1
    var b = Math.floor(Math.random()*6)+1
    var c = Math.floor(Math.random()*6)+1
    // console.log(a,b,c)0
    var x=document.querySelector("#member-1")
    var y=document.querySelector("#member-2")
    var z=document.querySelector("#member-3")

    x.innerText=a
    y.innerText=b
    z.innerText=c
    if(x.innerText>y.innerText && y.innerText>z.innerText){
        document.querySelector("#winner").innerText="Member A"
        x.style.backgroundColor = "green";
        y.style.backgroundColor = "yellow";
        z.style.backgroundColor = "red";
    }
    else if(x.innerText>z.innerText && z.innerText>y.innerText){
        document.querySelector("#winner").innerText="Member A"
        x.style.backgroundColor = "green";
        z.style.backgroundColor = "yellow";
        y.style.backgroundColor = "red";
    }
    else if(y.innerText>x.innerText && x.innerText>z.innerText){
        document.querySelector("#winner").innerText="Member B"
        y.style.backgroundColor = "green";
        x.style.backgroundColor = "yellow";
        z.style.backgroundColor = "red";
    }
    else if(y.innerText>z.innerText && z.innerText>x.innerText){
        document.querySelector("#winner").innerText="Member B"
        y.style.backgroundColor = "green";
        z.style.backgroundColor = "yellow";
        x.style.backgroundColor = "red";
        
    }
    else if(z.innerText>x.innerText && x.innerText>y.innerText){
        document.querySelector("#winner").innerText="Member C"
        z.style.backgroundColor = "green";
        x.style.backgroundColor = "yellow";
        y.style.backgroundColor = "red";
    }
    else if(z.innerText>y.innerText && y.innerText>x.innerText){
        document.querySelector("#winner").innerText="Member C"
        z.style.backgroundColor = "green";
        y.style.backgroundColor = "yellow";
        x.style.backgroundColor = "red";

    }
else if(x.innerText==y.innerText && z.innerText>x.innerText){
    document.querySelector("#winner").innerText="Draw"
    x.style.backgroundColor = "blue";
    y.style.backgroundColor = "blue";
    z.style.backgroundColor = "green";
}
else if(y.innerText==z.innerText && x.innerText>y.innerText){
    document.querySelector("#winner").innerText="Draw"
    y.style.backgroundColor = "blue";
    z.style.backgroundColor = "blue";
    x.style.backgroundColor = "green";
}
else if(x.innerText==z.innerText && y.innerText>x.innerText){
    document.querySelector("#winner").innerText="Draw"
    x.style.backgroundColor = "blue";
    z.style.backgroundColor = "blue";
    y.style.backgroundColor = "green";
}

else if(x.innerText==y.innerText && z.innerText<x.innerText){
    document.querySelector("#winner").innerText="Draw"
    x.style.backgroundColor = "blue";
    y.style.backgroundColor = "blue";
    z.style.backgroundColor = "red";
}
else if(y.innerText==z.innerText && x.innerText<y.innerText){
    document.querySelector("#winner").innerText="Draw"
    y.style.backgroundColor = "blue";
    z.style.backgroundColor = "blue";
    x.style.backgroundColor = "red";
}
else if(x.innerText==z.innerText && y.innerText<x.innerText){
    document.querySelector("#winner").innerText="Draw"
    x.style.backgroundColor = "blue";
    z.style.backgroundColor = "blue";
    y.style.backgroundColor = "red";
}
else{
    document.querySelector("#winner").innerText="Draw"
    x.style.backgroundColor = "blue";
    z.style.backgroundColor = "blue";
    y.style.backgroundColor = "blue";
}
}