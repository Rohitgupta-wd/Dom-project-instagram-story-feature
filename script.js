let arr = [
    {dp:"https://media.istockphoto.com/id/1382549156/photo/beautiful-emotional-woman.jpg?s=1024x1024&w=is&k=20&c=8EtT_zVb4gyE63byJO0G5EUeVXyFR12pnnzUbKl02S8=",story:"https://images.unsplash.com/photo-1525299374597-911581e1bdef?auto=format&fit=crop&q=80&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&w=1887"},
    {dp:"https://images.unsplash.com/photo-1530981785497-a62037228fe9?auto=format&fit=crop&q=80&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&w=1887",story:"https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?auto=format&fit=crop&q=80&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&w=1888"},

    {dp:"https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&q=80&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&w=1920",story:"https://images.unsplash.com/photo-1562572159-4efc207f5aff?auto=format&fit=crop&q=80&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&w=1935"},

    {dp:"https://images.unsplash.com/photo-1502258097612-43e695deebad?auto=format&fit=crop&q=80&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&w=1887",story:"https://images.unsplash.com/photo-1625178551411-62eea1351c82?auto=format&fit=crop&q=80&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&w=1887"},
]
let story = document.querySelector("#storys");
let clutter = ""
arr.forEach((elem,ind)=>{
clutter += `<div class="inner-story">
<img  id="${ind}"src="${elem.dp}" alt="">
</div>`

});
story.innerHTML = clutter;

story.addEventListener("click",(dets)=>{
    document.querySelector("#full-screen").style.display = "block";
    document.querySelector("#full-screen").style.backgroundImage = `url(${arr[dets.target.id].story})`;
    
    setTimeout(()=>{
        document.querySelector("#full-screen").style.display = "none";
    },3000);
});

