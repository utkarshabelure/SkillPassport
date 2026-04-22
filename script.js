let skills = JSON.parse(localStorage.getItem("skills")) || [];

function addSkill() {
let skill = document.getElementById("skill").value;
if(!skill) return;

let id = "SK-" + Math.floor(Math.random()*10000);

let obj = {skill,id};

skills.push(obj);
localStorage.setItem("skills", JSON.stringify(skills));

localStorage.setItem("certSkill", skill);
localStorage.setItem("certId", id);

window.location.href="certificate.html";
}

function verifySkill() {
let input=document.getElementById("verifyId").value;
let skills=JSON.parse(localStorage.getItem("skills"))||[];

let found=skills.find(s=>s.id===input);

let box=document.getElementById("resultCard");
box.style.display="block";

box.innerHTML= found ?
`✅ Verified: ${found.skill}` :
`❌ Not Found`;
}

function downloadCertificate() {
html2canvas(document.getElementById("certificate")).then(canvas=>{
let link=document.createElement("a");
link.download="certificate.png";
link.href=canvas.toDataURL();
link.click();
});
}

if(document.getElementById("certSkill")){
document.getElementById("certSkill").innerText=localStorage.getItem("certSkill");
document.getElementById("certId").innerText=localStorage.getItem("certId");
document.getElementById("certDate").innerText=new Date().toLocaleDateString();
}
