const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]

const icon = document.getElementById("refresh-icon");
const main = document.getElementById("main-content");



icon.addEventListener("click", function() {
    console.log("yes")
    icon.remove();
    for(let i=0; i<posts.length; i++){
        
        main.innerHTML+=`
        <section class="post">
            <div class="post-heading">
                <img class="users-profile" src='${posts[i].avatar}'>
                <div>
                    <h1 class="user-name">${posts[i].name}</h1>
                    <p class="user-location">${posts[i].location}</p>
                </div>
            </div>
            <img id="upload-img${i}" class="uploaded-img" src="${posts[i].post}">
            <div class="icons">
                <img id="heart${i}" class="post-icons" src="images/icon-heart.png">
                <img class="post-icons" src="images/icon-comment.png">
                <img class="post-icons" src="images/icon-dm.png">
            </div>
            <h2 id="likes${i}" class="post-likes">${posts[i].likes} likes</h2>
            <p class="caption"><span class="caption-span">${posts[i].username}</span> ${posts[i].comment}</p>
            
        <section>
    
        `
        

    }
    const heartImg0 = document.getElementById("heart0");
    const upLoadPic0 = document.getElementById("upload-img0")  

    upLoadPic0.addEventListener("dblclick", function() {
        
        const check = document.getElementById("likes0");
        check.textContent = (posts[0].likes + 1) + " likes";
        heartImg0.src="images/liked-img.png";
    })


    const heartImg1 = document.getElementById("heart1");
    const upLoadPic1 = document.getElementById("upload-img1")  

    upLoadPic1.addEventListener("dblclick", function() {
        
        const check = document.getElementById("likes1");
        check.textContent = (posts[1].likes + 1) + " likes";
        heartImg1.src="images/liked-img.png";
    })

    const heartImg2 = document.getElementById("heart2");
    const upLoadPic2 = document.getElementById("upload-img2")  

    upLoadPic2.addEventListener("dblclick", function() {
     
        const check = document.getElementById("likes2");
        check.textContent = (posts[2].likes + 1) + " likes";
        heartImg2.src="images/liked-img.png";
    })
    
  
    
})