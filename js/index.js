//Insert Copyright Text in Footer

const today = new Date();
const thisYear = today.getFullYear();
const footer = document.querySelector('footer');
const copyright = document.createElement('p');
copyright.innerHTML = `Irina Khameeva &copy; ${thisYear}`;
footer.appendChild(copyright);

//Create List of Skills

const skills = ['JavaScript', 'HTML', 'CSS', 'GitHub'];
const skillsSection = document.getElementById('skills');
const skillsList = skillsSection.querySelector('ul');
for (let i = 0; i < skills.length; i++) {
    let skillLi = document.createElement('li');
    skillLi.innerHTML = skills[i];
    skillsList.appendChild(skillLi);
}