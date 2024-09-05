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

//Handle Message Form Submit

const messageForm = document.querySelector("form[name='leave_message']");
messageForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = e.target.usersName.value;
    const email = e.target.usersEmail.value;
    const messages = e.target.usersMessage.value;
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Message:", messages);

    //Display Messages in List

    const messageSection = document.getElementById("messages");
    const messageList = messageSection.querySelector("ul");
    const newMessage = document.createElement("li");
    newMessage.innerHTML = `<a href = "mailto:${email}"> ${name} </a> 
                    <span>wrote: ${messages}</span>`;

    //Create a variable named removeButton that makes a new <button> element

    const removeButton = document.createElement('button');
        removeButton.innerText = 'remove';
        removeButton.type  = 'button';
        removeButton.addEventListener('click', (e) => {
            const entry = removeButton.parentNode;
            entry.remove();
        });

    newMessage.appendChild(removeButton);
    messageList.appendChild(newMessage);


    messageForm.reset();
});

//Creating fetch for githab repos

fetch("https://api.github.com/users/IrinaKhameeva/repos")
   .then((response) => {
      if (!response.ok) {
        throw new Error("Request failed");
      } else {
        return response.json();
      }
   })

   //Handle JSON data

   .then((data) => {
      console.log("json data = ", data);
      repositories = [...data];
      console.log ("repositories array =", repositories);


    //Display Repositories in List
   const projectSection = document.getElementById("projects");
   const projectList = projectSection.getElementsByTagName("ul");

     for (let i=0; i < repositories.length; i++) {
       const project = document.createElement("li");
       project.innerText = repositories[i].html_url;
       console.log(project);
       projectList[0].appendChild(project)
     }
   })

   //Handling errors
   .catch((error) => {
    console.error("An error occured:", error);
   });