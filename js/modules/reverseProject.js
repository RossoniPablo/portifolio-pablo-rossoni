const reverseProject = () => {
  const projects = document.querySelectorAll(".project");

  projects.forEach((project, index) => {
    if (index % 2 !== 0) {
      project.classList.add("reverse");
    }
  });
};

document.addEventListener("DOMContentLoaded", reverseProject);

export default reverseProject