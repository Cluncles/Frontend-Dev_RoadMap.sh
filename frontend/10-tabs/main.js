const tabBtns = document.querySelectorAll(".tab-btn");
const tabContents = document.querySelectorAll(".tab-content");

tabBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    tabBtns.forEach((b) => b.classList.remove("active"));
    tabContents.forEach((c) => c.classList.remove("active"));

    btn.classList.add("active");

    const targetId = btn.getAttribute("data-target");
    document.getElementById(targetId).classList.add("active");
    const targetContent = document.getElementById(targetId);
    if (targetContent) {
      targetContent.classList.remove("hidden");
    }
  });
});
