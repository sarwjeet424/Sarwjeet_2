let mycall = async(type)=>{
    try{     
       let url = `https://api.unsplash.com/search/photos/?query=${type}&per_page=20&client_id=Ili4a0iWaLAMQuK5KaaTgzxg57zw39pAsAsdeuOguks`
       let res = await fetch(url)
       let data =await res.json()
       return data.results
       }catch(err){
        console.log(err)
       }
}

let append=(container,data)=>{
    data.forEach((el)=>{
      var a= document.createElement("div")
      a.setAttribute("id","div")
      var b= document.createElement("img")
      b.src=el.urls.small
      b.setAttribute("id","img")
      var c= document.createElement("h3")
      c.innerText=el.alt_description
      a.append(b,c)
      container.append(a)
    })
}

export {mycall, append};

