document
  .getElementById("suggestionForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const suggestion = document.getElementById("suggestion").value;

    console.log("Nome de usuário:", username);
    console.log("Sugestão:", suggestion);

    document.getElementById("username").value = "";
    document.getElementById("suggestion").value = "";

    alert("Sugestão enviada com sucesso!");
  });


document.addEventListener("DOMContentLoaded", () => {
  const dynamicContent = document.getElementById("dynamic-content");

  function loadContent(url) {
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.text();
      })
      .then((html) => {
        dynamicContent.innerHTML = html;
      })
      .catch((error) => {
        console.error("Falha ao carregar o conteúdo: ", error);
      });
  }

  document.querySelectorAll("a.ajax-link").forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const page_url = link.getAttribute("href");
      history.pushState(null, "", page_url);
      loadContent(page_url);
    });
  });

  window.addEventListener("popstate", () => {
    loadContent(window.location.pathname);
  });
});
