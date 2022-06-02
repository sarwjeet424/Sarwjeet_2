var arr=JSON.parse(localStorage.getItem("input"))

var x=document.querySelector("#app")

arr.forEach(function (el){
    var a=document.createElement("div")
    a.setAttribute("id","small")
    var b=document.createElement("iframe")
    
    var link=el.id.videoId
    b.src=`https://www.youtube.com/embed/${link}`
    b.allow="fullscreen"        
    b.style.height="500px"
    b.style.width="80%"
    b.style.border="0px"
  
    var c=document.createElement("h2")
    c.innerText=el.snippet.title
    
    a.append(b,c)
    x.append(a)

})