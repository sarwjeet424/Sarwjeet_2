// const url= `https://api.unsplash.com/search/photos/?query=${value}&per_page=20client_id=Ili4a0iWaLAMQuK5KaaTgzxg57zw39pAsAsdeuOguks`

// document.querySelector("#inpu").addEventListener("oninput",mycall)

import { navbar } from "../components/navbar.js"

let navba =document.querySelector("#navbar")
navba.innerHTML=navbar();

import { mycall ,append} from "./fetch.js";

let search= async (e) => {
    if(e.key=="Enter"){

        let type = document.querySelector("#inpu").value 
         let dat=await mycall(type)
           console.log(dat)
           let container=document.querySelector("#container")
           container.innerHTML=""
           append(container,dat)
    }
}

 document.querySelector("#inpu").addEventListener("keydown",search)

 let category=document.querySelector("#category").children;
//  console.log(category)

async function catsearch(){
        // console.log(this.id)
       let dat=await mycall(this.id)
        //    console.log(dat)
           let container=document.querySelector("#container")
           container.innerHTML=""
           append(container,dat)

 }

for(let el of category){
    el.addEventListener("click",catsearch)
}


// let mycall= async()=>{
//    try{
//     let type = document.querySelector("#inpu").value
//    let url = `https://api.unsplash.com/search/photos/?query=${type}&per_page=20&client_id=Ili4a0iWaLAMQuK5KaaTgzxg57zw39pAsAsdeuOguks`
//    let res = await fetch(url)
//    let data =await res.json()
//    console.log(data)
//    }catch(err){
//     console.log(err)
//    }
// }


