const loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const data = Object.fromEntries(new FormData(loginForm));
  fetch("/api/session/login", {
    method: "POST",
    body: JSON.stringify(data),
    headers: { "Content-type": "application/json" },
  })
    .then((res) => res.json())
    .then((res) => {
      if (res.error) {
        loginForm.firstChild.textContent = `${res.error}`;
        loginForm.innerHTML =`<p>Contraseña incorrecta, Restablece tu contraseña <a href="/session/recover">aquí</a></p>`;
        console.log(res.error);
        return;
      } else {
        console.log(res);
        location.assign("/products");
      }
    });
});
