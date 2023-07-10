function arr(){
    var links=[
        "https://dl.dropboxusercontent.com/scl/fi/c2l6j45ws78wd8meoqp27/text1.txt?rlkey=6kpmwmtxcr14k04lzv407dcpa&dl=0",
        "https://dl.dropboxusercontent.com/scl/fi/6uk7e38kteac8aacifrpf/text2.txt?rlkey=3twivyzbyxym17qctkf962m3l&dl=0",
        "https://dl.dropboxusercontent.com/scl/fi/8g97ch4c2mghak3g8n438/text3.txt?rlkey=0dswl3jf2l09wnzeruhu0m5je&dl=0",
        "https://dl.dropboxusercontent.com/scl/fi/81iifodma9zcvg4gzeepi/text4.txt?rlkey=vv7y3fzw3z329v473t5rd4iw6&dl=0",
        "https://dl.dropboxusercontent.com/scl/fi/9x365em2nbk18l26ecdid/text5.txt?rlkey=g0abtympjf575jpioyh30er3y&dl=0",
        "https://dl.dropboxusercontent.com/scl/fi/f18zo925cniq2aqjpbq0b/text6.txt?rlkey=92thhrjc8w48jjdgpdrvtbq0w&dl=0",
        "https://dl.dropboxusercontent.com/scl/fi/nkysphg6ehswfpc2c77qx/text7.txt?rlkey=kwvijrb781go4dvb6dsagwc66&dl=0",
        "https://dl.dropboxusercontent.com/scl/fi/rdeyz7j69z1j6vb1bs986/text8.txt?rlkey=m15ntaol3mqrovuqbyanvvn29&dl=0",
        "https://dl.dropboxusercontent.com/scl/fi/ygmrfpchm97irk32jtixp/text9.txt?rlkey=qdmdkyvpa0mgl8ave7yderdru&dl=0",
        "https://dl.dropboxusercontent.com/scl/fi/69bne1dij3tkthpgmodtj/text10.txt?rlkey=xrqpqkw8vca9adplefa8f4wq2&dl=0",
        "https://dl.dropboxusercontent.com/scl/fi/eieis5wqvi6lfk6wiz4np/text11.txt?rlkey=nrin08lo7uzjq375it5jo6npo&dl=0",
        "https://dl.dropboxusercontent.com/scl/fi/q4i8v7scu4ba7q0whmj35/text12.txt?rlkey=gedcig4tgnwvmr27c5ff61jq2&dl=0",
        "https://dl.dropboxusercontent.com/scl/fi/kvd8bfoivv8kudndrv7lq/text13.txt?rlkey=rmc45ji7v5xxkqd22jvk3ph9u&dl=0",
        "https://dl.dropboxusercontent.com/scl/fi/vfu5zxq1l1mxub371tx1f/text14.txt?rlkey=e6zntti2n2i61q1d7hmbzsqua&dl=0",
        "https://dl.dropboxusercontent.com/scl/fi/r05rwbfnujdb0jop85w46/text15.txt?rlkey=iuemm7z94ft90l44d1sjuuwem&dl=0",
        "https://dl.dropboxusercontent.com/scl/fi/hrjd2n8oditpj4fy2aacb/text16.txt?rlkey=aecxzpejq42jicha0edt3xsn3&dl=0",
        "https://dl.dropboxusercontent.com/scl/fi/7stziw8ektdl3kfl9byqg/text17.txt?rlkey=h709506qbftd10xnje9yepp04&dl=0",
        "https://dl.dropboxusercontent.com/scl/fi/enolhsprfwdpkb07jjqg2/text18.txt?rlkey=izhzitrg9ya6qx9apotmww7ov&dl=0",
        "https://dl.dropboxusercontent.com/scl/fi/0lt0w1vt0g2uddme1cgzx/text19.txt?rlkey=tt3o5qr03l0sbisqv1dzp7yy9&dl=0",
        "https://dl.dropboxusercontent.com/scl/fi/1lcn3tknnve1gqsn2jevp/text20.txt?rlkey=516mii85vqvp8eos29e0wokx8&dl=0",
        "https://dl.dropboxusercontent.com/scl/fi/zyj96j72qn69765ip0qwp/text21.txt?rlkey=1fl2cpue3uziglc9bpebe3nl9&dl=0",
        "https://dl.dropboxusercontent.com/scl/fi/1xikedxa66675t5jfodwl/text22.txt?rlkey=q3gnakwxxaou8ypi8zwzf3p3w&dl=0",
        "https://dl.dropboxusercontent.com/scl/fi/5eu9adkj2codl8zygv29m/text23.txt?rlkey=udixmlr5bnvldolfz4nkyvzlw&dl=0",
        "https://dl.dropboxusercontent.com/scl/fi/0oqhk7owvgowlpjdtca2y/text24.txt?rlkey=n1gum86xtd8mmxibm8yivdez9&dl=0",
        "https://dl.dropboxusercontent.com/scl/fi/schi6c8gg4yz2yvxmhrlp/text25.txt?rlkey=ivh8wny0xprvkftx0she8jl3j&dl=0",
        "https://dl.dropboxusercontent.com/scl/fi/y6ro7aev9cal2o6shjigh/text26.txt?rlkey=5w9dce23mqc7nohhzuo6quafq&dl=0",
        "https://dl.dropboxusercontent.com/scl/fi/iuvga4drri7d2557zrxhy/text27.txt?rlkey=g57tg6xce4sfr9qqxt7jz7wob&dl=0",
        "https://dl.dropboxusercontent.com/scl/fi/60g66y7ftl6jnmstu2lab/text28.txt?rlkey=8j1dautiq7n8tdfvcvd2q5btg&dl=0",
        "https://dl.dropboxusercontent.com/scl/fi/5scjtaoeef50na3yvg6rr/text29.txt?rlkey=pd5ldprciuu568oh220h06wnw&dl=0",
        "https://dl.dropboxusercontent.com/scl/fi/z6m2l8b68t6ahayx03qll/text30.txt?rlkey=31v496s20q7l7iltuxe8bslbq&dl=0",
    ];
    return links[Math.floor(Math.random()*links.length)];
}
function func (v1,v2,v3){
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
    document.getElementById("quote").innerHTML=v3;
}
function submit(){
    var q=""
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
    fetch(arr())
        .then(response => response.text()) 
        .then(textString => {
    q=textString;});
    setTimeout(function() { func(btn,prog,q); }, 5000);
}