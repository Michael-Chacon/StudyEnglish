const divVerbs = document.querySelector(".menu-verbs");
const verbsOption = document.querySelector("#verbs");
const irregular = document.querySelector("#irregular");
const subMenu = document.querySelector(".sub-menu");

desplegar(irregular, subMenu);
desplegar(verbsOption, divVerbs);

function desplegar(ownEvent, showDiv) {
  console.log("click detectado");
  ownEvent.addEventListener("click", () => {
    showDiv.classList.toggle("show-div");
  });
}
