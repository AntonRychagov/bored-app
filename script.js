const selectButtonNode = document.querySelector("#btnSelect");

selectButtonNode.addEventListener("click", addActivity);

function addActivity() {
  fetch("http://www.boredapi.com/api/activity/")
    .then((data) => data.json())
    .then((result) => {
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
