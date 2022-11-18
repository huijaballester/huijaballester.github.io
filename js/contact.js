function sendEmail() {
  const data = {
    name: document.getElementById("name")?.value,
    email: document.getElementById("email")?.value,
    message: document.getElementById("message")?.value,
    message_honey: document.getElementById("message_honey")?.value?.length ? "honey" : null,
  };

  if (data.name && data.email && data.message) {
    var headers = new Headers();
    headers.append("Content-Type", "application/json");

    var requestOptions = {
      method: "POST",
      headers: headers,
      body: JSON.stringify(data),
      redirect: "follow",
    };

    fetch("https://martingoiriz.com.ar/api/mg/sendHuijaEmail.php", requestOptions)
      .then((response) => response.json())
      .then(({ status }) => {
        if (status === 200) {
          alert("Tu mensaje fue enviado. Muy pronto nos pondremos en contacto. ¡Gracias!");
          setTimeout(
            () =>
              document.querySelectorAll("#name, #email, #message").forEach((i) => (i.value = null)),
            500
          );
        }
      })
      .catch((error) => console.log("error", error));
  } else {
    alert("Por favor, completá todos los campos para enviar tu mensaje");
  }
}
