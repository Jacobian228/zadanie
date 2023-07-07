function func (v1,v2){
	var fs = require("fs");
    var bt = document.createElement("button");
    bt.onclick = function(){
        submit(); return false;
    };
    bt.innerHTML="Показать цитату";
    bt.id="buton";
    v1.remove();
    v2.remove();
    var d = new Date()
    document.body.appendChild(bt);
    var q = "";
    if (d.getTime()%2==0) {
    q= fs.readFileSync("./text.txt").toString('utf-8');
    } else {
    q=fs.readFileSync("./text2.txt").toString('utf-8');
    }
    document.getElementById("quote").innerHTML = q;
}
function submit(){
    document.getElementById("buton").remove();
    var btn = document.createElement("button");
    btn.innerHTML="отмена";
    btn.onclick=function(){
    location.reload();return false;
    };
    var prog = document.createElement("progress");
    prog.className = "progress-bar fill-5";
    prog.role="progressbar";
    document.body.appendChild(prog);
    document.body.appendChild(btn);
    setTimeout(function() { func(btn,prog); }, 5000);
}