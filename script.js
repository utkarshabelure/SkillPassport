let skills = JSON.parse(localStorage.getItem("skills")) || [];

function addSkill() {
    let skill = document.getElementById("skill").value;
    if (skill === "") return;

    let id = "SKILL-" + Math.floor(Math.random() * 10000);

    skills.push({ skill, id });
    localStorage.setItem("skills", JSON.stringify(skills));

    displaySkills();
}

function displaySkills() {
    let list = document.getElementById("skillsList");
    if (!list) return;

    list.innerHTML = "";
    skills.forEach(s => {
        list.innerHTML += `<div class="card">${s.skill} - ID: ${s.id}</div>`;
    });
}

function verifySkill() {
    let input = document.getElementById("verifyInput").value;
    let found = skills.find(s => s.id === input);

    if (found) {
        document.getElementById("result").innerText = "✅ Verified Skill: " + found.skill;
    } else {
        document.getElementById("result").innerText = "❌ Skill Not Found";
    }
}

displaySkills();