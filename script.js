let skills = JSON.parse(localStorage.getItem("skills")) || [];

function addSkill() {
    let skill = document.getElementById("skill").value;
    if (!skill) return;

    skills.push(skill);
    localStorage.setItem("skills", JSON.stringify(skills));

    renderChart();
}

function renderChart() {
    let ctx = document.getElementById("myChart");

    if (!ctx) return;

    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: skills,
            datasets: [{
                label: 'Skill Progress',
                data: skills.map(() => Math.floor(Math.random()*100))
            }]
        }
    });
}

renderChart();
