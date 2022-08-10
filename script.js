let playSong = document.getElementById("playTrack");
    const music= document.querySelector("audio");
    const animation= document.getElementById("img-ani")
    const next= document.getElementById("next")
    const prev= document.getElementById("prev")
    const title= document.getElementById("title")
    const artist= document.getElementById("artist")
    playSong.addEventListener("click",func1);
    
    const song=[{
        name:"song1",
        artist:"loyalist",
        title:"lotus lane"

    },
    {
        name:"song2",
        artist:"justin beiber",
        title:"baby"
    },
    {
        name:"song3",
        artist:"Dua Lipa",
        title:"Lavaitating"
    }
]


    function func1(){
        if(music.paused){
            music.play();
            playSong.classList.replace("fa-play" ,"fa-pause");
            animation.classList.add("img-animation")
        }else{
        music.pause();
        playSong.classList.replace("fa-pause" ,"fa-play");
        animation.classList.remove("img-animation")
        }
    }
    // <----------------------------------->
    // change data---------------
    const loadingSong=(song)=>{
     artist.textContent=song.artist;
     title.textContent=song.title;
     music.src=song.name+".mp3"
    }
    
    

    songIndex=0;

    
    next.addEventListener("click" , nextSong)
    
    
    function nextSong() {
        playSong.classList.replace("fa-pause" ,"fa-play");
        animation.classList.remove("img-animation")
        songIndex=(songIndex+1)%song.length;
        loadingSong(song[songIndex]);   
    }
    prev.addEventListener("click", prevSong)
    function prevSong() {
        playSong.classList.replace("fa-pause" ,"fa-play");
        animation.classList.remove("img-animation")
        songIndex=(songIndex-2 + song.length)%song.length;
        loadingSong(song[songIndex]);   
    }
    