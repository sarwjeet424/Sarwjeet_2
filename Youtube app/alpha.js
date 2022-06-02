
    //const url =  "AIzaSyDVTyk-UV1J2cbRNNIBLt8ZWsVBC3_hxtc";
    // https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=avengers&key=[YOUR_API_KEY]
    {/* <iframe width="560" height="315"
    src="https://www.youtube.com/embed/vCWr2q5ivNw" 
    title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; 
    clipboard-write; encrypted-media; gyroscope; 
    picture-in-picture" allowfullscreen></iframe> */}
    // var bigbox=document.querySelector("#box")
    //let search=document.querySelector("#new").value


    var container=document.querySelector("#box")

    var count=0
    async function mynum(){
    count++
    let search=document.querySelector("#new").value
    let YOUR_API_KEY= "AIzaSyDEh6FByv2hNWpqeBEKD21Qz6l9zGpkqrM";
    let url=`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${search}&key=${YOUR_API_KEY}`;

    let res=await fetch(url)
    let data=await res.json()
    append(data.items)
    console.log(data)

    }
    
    if(count==0){
      async function mynum1(){
        let search="the most popular videos in India"
        let YOUR_API_KEY= "AIzaSyDEh6FByv2hNWpqeBEKD21Qz6l9zGpkqrM";
        let url=`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${search}&key=${YOUR_API_KEY}`;
    
        let res=await fetch(url)
        let data=await res.json()
        append(data.items)
        //console.log(data)
    
        }
        mynum1()
    }

    function append(data){

      container.innerHTML=""
        data.forEach(function (el){
            var a=document.createElement("div")
            var b=document.createElement("iframe")
            
            var link=el.id.videoId
            b.src=`https://www.youtube.com/embed/${link}`
            b.allow="fullscreen"  
            b.style.border="0px"
                           
            var c=document.createElement("h2")
            c.innerText=el.snippet.title
            a.addEventListener("click",function(){
              mymove(el)
            })
            a.append(b,c)
            container.append(a)

            // console.log("append successfully")
        })
        console.log("append successfully")
    }
     var arr=[]

     function mymove(el){
      window.location.href="fullscreen.html"
      arr.push(el)
      localStorage.setItem("input",JSON.stringify(arr))

    }