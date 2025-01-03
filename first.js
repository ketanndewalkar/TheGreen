(function run(){
const logo = document.querySelector("#logo_img");
const content = document.querySelector("#content");
const tl = gsap.timeline();
tl.from(logo,{
    y:-50,
    duration:0.3,
    delay:0.2,
    opacity:0
},"k");
tl.from("#box2 span",{
    y:-50,
    duration:0.3,
    delay:0.1,
    stagger:0.2,
    opacity:0
},"t");
tl.from(content,{
    y:50,
    duration:0.7,
    opacity:0
},"t");
tl.from("#just",{
    y:50,
    duration:0.7,
    opacity:0
},"t")
tl.from("button",{
    
    duration:0.7,
    opacity:0
},"t")
})();

localStorage.setItem("name","ketan");


