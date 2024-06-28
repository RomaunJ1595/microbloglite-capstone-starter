/* Posts Page JavaScript */

"use strict";
function showposts(data){
    messagelist.innerHTML=data.map(p=>{
        return `
        <div class="cardOutter"><div class="card">
        ${p.username}
$
        ${p.text}
        </div>
        <button class="likeBtn">Like</button>
        </div>
        `
    }).join("")
}
messagelist.innerHTML="posts"
fetch(apiBaseURL+"/api/posts",{
    method: "GET",
    headers:{ 
        Authorization: `Bearer ${localStorage.token}`,
    },
}
).then(r=>r.json()).then(data=>(
    showposts(data)
)) 