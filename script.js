const selectButtonNode = document.querySelector("#btnSelect");

selectButtonNode.addEventListener("click", addActivity);

const trueButton = () => {
  selectButtonNode.disabled = true;
  selectButtonNode.classList.add('loader')
}

const falseButton = () => {
  selectButtonNode.disabled = false;
  selectButtonNode.classList.remove('loader');
}

function addActivity() {
  falseButton()
  fetch("https://www.boredapi.com/api/activity/")
    .then((data) => data.json())
    .then((result) => {
      
      const activity = result.activity;
      const status = result.ok;
      if (result == status) {
        document.querySelector('#subtitle').classList.add('loader')
      }else {
        document.querySelector('#subtitle').classList.remove('loader')
      }
      
      document.querySelector("#subtitle").innerHTML = `
            ${activity}
            `;
      document.querySelector("#title").innerHTML = `
            Ура, теперь не скучно 🔥
            `;

      document.querySelector("body").classList.add("active");

      
    });
};
