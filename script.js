/* ==========================================
   SCRIPT.JS - PART 1
   LOGIN + QUESTIONS + TYPING
========================================== */

// =========================
// LOGIN PASSWORD
// =========================

const PASSWORD = "Ansha Sufiyan";

// =========================
// QUESTIONS
// =========================

const questions = [

"Tumhe sab se acha kon se mard lagta hai jo tum chahti ho ke tumhari aulaad us ki tarah ho?",

"Agar ek din meri yaad-dasht chali jaye aur main tumhein pehchaan na paun, to tum kya karogi?",

"Hamare rishte ki sab se badi taqat kya hai?",

"Agar mujhe sirf ek sentence mein describe karna ho, to tum kya kahogi?",

"Agar hum dono bohat buddhe ho jayein, to tum kis cheez ki sab se zyada umeed rakhogi?",

"Agar meri zindagi mein sirf ek cheez hamesha reh sakti ho, to tum kya chahogi?",

"Tumhare liye 'I Love You' ka asli matlab kya hai?",

"Agar Allah se hamare rishte ke liye sirf ek dua maang sakti ho, to kya maangogi?",

"Mere saath guzra hua konsa ehsaas tum kabhi nahi khona chahogi?",

"Agar zindagi dobara mile aur tumhein phir se apna humsafar chunna ho, to tum Kise chunnogi?",

"Aisi kaunsi cheez hai jis se main sab se zyada khush hota hoon aur main use kabhi door nahi hona chahta?",

"Meri kaunsi ek baat ya aadat hai jise khone ka khayal bhi tumhein rula deta hai?",

"Agar main zindagi ke sab se mushkil daur se guzar raha hoon aur sab log mera saath chhod dein, to tum mere liye kya karogi?",

"Agar Allah tumhein ek hi dua qubool hone ka ikhtiyar dein aur woh sirf hamare rishte ke liye ho, to tum kya maangogi?",

"Mare asi kon si adat hai jo tum chahti ho mai chor doun? 💖",

"❤️ Tum mera saath kabhi chhoro gi nahi na, Ansha? Promise? ❤️"

];

// =========================
// VARIABLES
// =========================

let currentQuestion = 0;
let typing = false;

// =========================
// LOADER
// =========================

window.onload = function(){

setTimeout(()=>{

let loader = document.getElementById("loadingScreen");

if(loader){
loader.style.display="none";
}

},1500);

};

// =========================
// LOGIN
// =========================

function login(){

let pass=document.getElementById("password").value.trim();

let error=document.getElementById("loginError");

if(pass===PASSWORD){

document.getElementById("loginScreen").style.display="none";

document.getElementById("app").style.display="flex";

if(document.getElementById("bgMusic")){

document.getElementById("bgMusic").play().catch(()=>{});

}

startChallenge();

}else{

error.innerHTML="❌ Wrong Password";

error.style.animation="shake .4s";

setTimeout(()=>{
error.style.animation="";
},400);

}

}

// =========================
// START
// =========================

function startChallenge(){

currentQuestion=0;

updateProgress();

showQuestion();

}

// =========================
// SHOW QUESTION
// =========================

function showQuestion(){

typeWriter(
questions[currentQuestion],
document.getElementById("questionText")
);

document.getElementById("questionIndex").innerHTML=currentQuestion+1;

}

// =========================
// TYPEWRITER
// =========================

function typeWriter(text,element){

typing=true;

element.innerHTML="";

let i=0;

let timer=setInterval(()=>{

element.innerHTML+=text.charAt(i);

i++;

if(i>=text.length){

clearInterval(timer);

typing=false;

}

},28);

}

// =========================
// NEXT QUESTION
// =========================

function nextQuestion(){

if(typing) return;

let input=document.getElementById("answer");

let value=input.value.trim();

let error=document.getElementById("answerError");

if(value===""){

error.innerHTML="Please write something ❤️";

input.classList.add("shake");

setTimeout(()=>{

input.classList.remove("shake");

},500);

return;

}

error.innerHTML="";

input.value="";

currentQuestion++;

if(currentQuestion>=questions.length){

showFinalScreen();

return;

}

updateProgress();

fadeQuestion();

}

// =========================
// QUESTION TRANSITION
// =========================

function fadeQuestion(){

let card=document.getElementById("questionCard");

card.style.opacity="0";

card.style.transform="translateY(30px)";

setTimeout(()=>{

showQuestion();

card.style.opacity="1";

card.style.transform="translateY(0)";

},350);

}

// =========================
// PROGRESS BAR
// =========================

function updateProgress(){

let percent=((currentQuestion+1)/questions.length)*100;

document.getElementById("progressFill").style.width=percent+"%";

document.getElementById("qno").innerHTML=currentQuestion+1;

}

// =========================
// PASSWORD SHOW/HIDE
// =========================

const eye=document.getElementById("togglePassword");

if(eye){

eye.onclick=function(){

let input=document.getElementById("password");

if(input.type==="password"){

input.type="text";

eye.innerHTML="🙈";

}else{

input.type="password";

eye.innerHTML="👁";

}

};

}

// =========================
// ENTER KEY SUPPORT
// =========================

document.addEventListener("keydown",(e)=>{

if(e.key==="Enter"){

if(document.getElementById("loginScreen").style.display!=="none"){

login();

}else{

nextQuestion();

}

}

});
/* ==========================================
   SCRIPT.JS - PART 2
   STARS + HEARTS + CURSOR + MUSIC
==========================================*/

// =========================
// CREATE STARS
// =========================

function createStars(){

const stars=document.getElementById("stars");

if(!stars) return;

stars.innerHTML="";

for(let i=0;i<180;i++){

let star=document.createElement("div");

star.className="star";

star.style.left=Math.random()*100+"vw";

star.style.top=Math.random()*100+"vh";

star.style.animationDuration=
(3+Math.random()*8)+"s";

star.style.animationDelay=
Math.random()*5+"s";

star.style.opacity=Math.random();

stars.appendChild(star);

}

}

// =========================
// SHOOTING STARS
// =========================

function createShootingStars(){

const sky=document.getElementById("shootingStars");

if(!sky) return;

setInterval(()=>{

let s=document.createElement("div");

s.className="shooting";

s.style.left=Math.random()*80+"vw";

s.style.top=Math.random()*25+"vh";

sky.appendChild(s);

setTimeout(()=>{

s.remove();

},5000);

},2500);

}

// =========================
// FLOATING HEARTS
// =========================

function createHearts(){

const container=document.getElementById("floatingHearts");

if(!container) return;

setInterval(()=>{

let heart=document.createElement("div");

heart.className="heart";

heart.innerHTML=[
"❤️","💙","💖","💕","💜","🤍"
][Math.floor(Math.random()*6)];

heart.style.left=Math.random()*100+"vw";

heart.style.animationDuration=
(6+Math.random()*6)+"s";

heart.style.fontSize=
(18+Math.random()*25)+"px";

container.appendChild(heart);

setTimeout(()=>{

heart.remove();

},12000);

},500);

}

// =========================
// CURSOR GLOW
// =========================

const glow=document.getElementById("cursorGlow");

document.addEventListener("mousemove",(e)=>{

if(!glow) return;

glow.style.left=e.clientX+"px";

glow.style.top=e.clientY+"px";

});

// =========================
// CLICK SOUND
// =========================

document.addEventListener("click",()=>{

const click=document.getElementById("clickSound");

if(click){

click.currentTime=0;

click.play().catch(()=>{});

}

});

// =========================
// SUCCESS SOUND
// =========================

function playSuccess(){

const success=document.getElementById("successSound");

if(success){

success.currentTime=0;

success.play().catch(()=>{});

}

}

// =========================
// BACKGROUND MUSIC
// =========================

function startMusic(){

const music=document.getElementById("bgMusic");

if(!music) return;

music.volume=.35;

music.play().catch(()=>{});

}

// =========================
// PAGE VISIBILITY
// =========================

document.addEventListener("visibilitychange",()=>{

const music=document.getElementById("bgMusic");

if(!music) return;

if(document.hidden){

music.pause();

}else{

music.play().catch(()=>{});

}

});

// =========================
// RANDOM GLOW EFFECT
// =========================

setInterval(()=>{

const cards=document.querySelectorAll(
".loginCard,.questionCard"
);

cards.forEach(card=>{

card.style.boxShadow=

`0 0 ${40+Math.random()*40}px rgba(59,130,246,.35)`;

});

},3000);

// =========================
// START BACKGROUND EFFECTS
// =========================

createStars();

createShootingStars();

createHearts();
/* ==========================================
   SCRIPT.JS - PART 3
   FINAL CINEMATIC + CONFETTI + FIREWORKS
==========================================*/

// =========================
// FINAL SCREEN
// =========================

function showFinalScreen(){

playSuccess();

document.getElementById("app").style.display="none";

document.getElementById("finalScreen").style.display="flex";

heartExplosion();

startConfetti();

startFireworks();

meteorRain();

animateFinalText();

}

// =========================
// HEART EXPLOSION
// =========================

function heartExplosion(){

const container=document.getElementById("heartContainer");

if(!container) return;

for(let i=0;i<120;i++){

let heart=document.createElement("div");

heart.className="explodeHeart";

heart.innerHTML=[
"❤️","💙","💕","💖","🤍","💜"
][Math.floor(Math.random()*6)];

heart.style.left=50+"vw";

heart.style.top=55+"vh";

heart.style.fontSize=
(18+Math.random()*35)+"px";

let x=(Math.random()-0.5)*900;

let y=(Math.random()-0.5)*900;

heart.animate([

{
transform:"translate(0,0) scale(.5)",
opacity:1
},

{
transform:`translate(${x}px,${y}px) scale(2)`,
opacity:0
}

],{

duration:2500,

easing:"ease-out",

fill:"forwards"

});

container.appendChild(heart);

setTimeout(()=>{

heart.remove();

},2600);

}

}

// =========================
// CONFETTI
// =========================

function startConfetti(){

const wrap=document.getElementById("confettiContainer");

if(!wrap) return;

const colors=[
"#60a5fa",
"#2563eb",
"#ffffff",
"#93c5fd",
"#3b82f6",
"#dbeafe"
];

let confettiInterval=setInterval(()=>{

for(let i=0;i<10;i++){

let c=document.createElement("div");

c.className="confetti";

c.style.left=Math.random()*100+"vw";

c.style.background=
colors[Math.floor(Math.random()*colors.length)];

c.style.animationDuration=
(4+Math.random()*3)+"s";

c.style.opacity=Math.random();

wrap.appendChild(c);

setTimeout(()=>{

c.remove();

},7000);

}

},180);

setTimeout(()=>{

clearInterval(confettiInterval);

},12000);

}

// =========================
// FIREWORKS
// =========================

function startFireworks(){

const box=document.getElementById("fireworksContainer");

if(!box) return;

let fire=setInterval(()=>{

for(let i=0;i<12;i++){

let spark=document.createElement("div");

spark.className="firework";

let x=Math.random()*90;

let y=Math.random()*60;

spark.style.left=x+"vw";

spark.style.top=y+"vh";

box.appendChild(spark);

setTimeout(()=>{

spark.remove();

},1200);

}

},900);

setTimeout(()=>{

clearInterval(fire);

},12000);

}

// =========================
// METEOR SHOWER
// =========================

function meteorRain(){

const meteor=document.getElementById("meteorContainer");

if(!meteor) return;

let rain=setInterval(()=>{

let m=document.createElement("div");

m.className="shooting";

m.style.left=Math.random()*90+"vw";

m.style.top=Math.random()*20+"vh";

meteor.appendChild(m);

setTimeout(()=>{

m.remove();

},4000);

},900);

setTimeout(()=>{

clearInterval(rain);

},10000);

}

// =========================
// FINAL TITLE ANIMATION
// =========================

function animateFinalText(){

const title=document.querySelector(".finalTitle");

if(!title) return;

title.animate([

{
transform:"scale(.5)",
opacity:0
},

{
transform:"scale(1.1)",
opacity:1
},

{
transform:"scale(1)"
}

],{

duration:1400,

fill:"forwards",

easing:"ease-out"

});

}

// =========================
// OPEN PROMISE
// =========================

function showPromise(){

document.getElementById("promisePopup").style.display="flex";

}

// =========================
// CLOSE PROMISE
// =========================

function closePromise(){

document.getElementById("promisePopup").style.display="none";

}

// =========================
// RESTART
// =========================

function restartChallenge(){

location.reload();

}
/* ==========================================
   SCRIPT.JS - PART 4
   ULTRA CINEMATIC EFFECTS
==========================================*/

// ===============================
// FLOATING LOVE QUOTES
// ===============================

const quotes = [

"You are mine ❤️",

"You Are My Everything 💙",

"Our Story Never Ends ♾️",

"Love Beyond Infinity ♾️♾️",

"You + Me = Forever 💍",

"My Heart Chooses You ❤️"

];

function floatingQuotes(){

const container = document.getElementById("floatingQuotes");

if(!container) return;

setInterval(()=>{

let q = document.createElement("div");

q.className = "loveQuote";

q.innerHTML =
quotes[Math.floor(Math.random()*quotes.length)];

q.style.left = Math.random()*80 + "vw";

q.style.top = "100vh";

q.style.opacity = .15;

q.style.position = "fixed";

q.style.fontSize = "18px";

q.style.pointerEvents = "none";

q.style.color = "#ffffff";

q.animate([

{
transform:"translateY(0)",
opacity:0
},

{
opacity:.3
},

{
transform:"translateY(-120vh)",
opacity:0
}

],{

duration:12000,

fill:"forwards",

easing:"linear"

});

container.appendChild(q);

setTimeout(()=>{

q.remove();

},12000);

},3500);

}

// ===============================
// BUTTON MAGNET EFFECT
// ===============================

document.querySelectorAll("button").forEach(btn=>{

btn.addEventListener("mousemove",(e)=>{

const rect = btn.getBoundingClientRect();

const x = e.clientX - rect.left - rect.width/2;

const y = e.clientY - rect.top - rect.height/2;

btn.style.transform =
`translate(${x*0.08}px,${y*0.08}px) scale(1.04)`;

});

btn.addEventListener("mouseleave",()=>{

btn.style.transform="translate(0,0) scale(1)";

});

});

// ===============================
// CARD 3D EFFECT
// ===============================

document.addEventListener("mousemove",(e)=>{

document.querySelectorAll(".questionCard,.loginCard,.popupCard,.finalContainer")
.forEach(card=>{

const r = card.getBoundingClientRect();

const x = (e.clientX-r.left)/r.width-.5;

const y = (e.clientY-r.top)/r.height-.5;

card.style.transform=

`rotateY(${x*8}deg)
 rotateX(${-y*8}deg)`;

});

});

// ===============================
// DOUBLE CLICK HEART
// ===============================

document.addEventListener("dblclick",(e)=>{

let heart=document.createElement("div");

heart.innerHTML="❤️";

heart.style.position="fixed";

heart.style.left=e.clientX+"px";

heart.style.top=e.clientY+"px";

heart.style.fontSize="40px";

heart.style.pointerEvents="none";

heart.animate([

{
transform:"scale(.2)",
opacity:1
},

{
transform:"translateY(-150px) scale(2)",
opacity:0
}

],{

duration:1800,

fill:"forwards"

});

document.body.appendChild(heart);

setTimeout(()=>{

heart.remove();

},1800);

});

// ===============================
// CURSOR SPARKLES
// ===============================

document.addEventListener("mousemove",(e)=>{

if(Math.random()>0.75){

let s=document.createElement("div");

s.innerHTML="✨";

s.style.position="fixed";

s.style.left=e.clientX+"px";

s.style.top=e.clientY+"px";

s.style.pointerEvents="none";

s.style.opacity=.9;

s.animate([

{
transform:"scale(.3)",
opacity:1
},

{
transform:"translateY(-40px) scale(1.8)",
opacity:0
}

],{

duration:900,

fill:"forwards"

});

document.body.appendChild(s);

setTimeout(()=>{

s.remove();

},900);

}

});

// ===============================
// SECRET KEY
// ===============================

let secret="";

document.addEventListener("keydown",(e)=>{

secret+=e.key.toLowerCase();

if(secret.length>12){

secret=secret.slice(-12);

}

if(secret.includes("love")){


}

});

// ===============================
// START ALL PREMIUM EFFECTS
// ===============================

floatingQuotes();

console.log("💙 LOVE CHALLENGE ULTRA CINEMATIC LOADED 💙");