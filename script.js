const selectButtonNode = document.querySelector("#btnSelect");

selectButtonNode.addEventListener("click", addActivity);



function addActivity() {
  fetch("https://www.boredapi.com/api/activity/")
    .then(function(response) {
      document.querySelector('#subtitle').classList.add('loader');
      return response.json()
    })

    .then(function(result) {
      setTimeout(() => document.querySelector('#subtitle').classList.remove('loader'), 500)
      
      const activity = result.activity;
      
      document.querySelector("#subtitle").innerHTML = `
            ${activity}
            `;
      document.querySelector("#title").innerHTML = `
            Ура, теперь не скучно 🔥
            `;

      document.querySelector("body").classList.add("active");

      
    });
};
