var input = document.getElementById("input");
var btn1 = document.getElementById("btn1");
var btn2 = document.getElementById("btn2");
var ul = document.getElementById("ul");
var tasks = document.getElementById("task")
var task = 0 ;
var cond = false ;
btn1.addEventListener("click",function(){
    input.style.display = "block";
    btn1.style.display = "none";
    btn2.style.display = "block";
    ul.style.display = "none";
    ul.innerHTML = "";
    cond = true;
    tasks.style.justifyContent = "";
});
btn2.addEventListener("click",function(){
    if (cond === true && task <= 6) {
        var liElement = document.createElement("li");
        ul.style.display = "block";
        ul.appendChild(liElement);
        liElement.setAttribute("class","li");
        liElement.textContent = input.value;
        task++;
    }else if (task === 7) {
        cond = false;
        btn1.style.display = "block";
        btn1.innerHTML = "delete all and add task";
        btn2.style.display = "none";
        input.style.display = "none";
        btn1.style.width = "200px";
        task = 0 ;
        tasks.style.justifyContent = "center";
    }
    console.log(task,cond)
});