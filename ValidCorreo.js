//este es el codigo de js para que cuando se envie se haga un test o alert mejor dicho
// function submitForm() {
//   const name = document.getElementById("name").value;
//   const email = document.getElementById("email").value;
//   const message = document.getElementById("message").value;

//   if (name && email && message) {
//     alert(
//       currentLang === "es"
//         ? "¡Gracias por contactarnos! Te responderemos pronto."
//         : "Thank you for contacting us! We will respond soon."
//     );
//     document.getElementById("name").value = "";
//     document.getElementById("email").value = "";
//     document.getElementById("message").value = "";
//   } else {
//     alert(
//       currentLang === "es"
//         ? "Por favor completa todos los campos."
//         : "Please fill in all fields."
//     );
//   }
// }

//solo es de testeo el primero codigo de js pasra ver si responde el boton

emailjs.init("Qt76x6T8DfLhwn--A"); //esta es la public key de emailjs

const formContacto = document.getElementById("formContacto");

if (formContacto) {
  formContacto.onsubmit = function (event) {
    event.preventDefault();

    //basico tomamos los datos primeros
    const name = document.querySelector('input[name="name"]').value;
    const email = document.querySelector('input[name="email"]').value;
    const message = document.querySelector('textarea[name="message"]').value;

    emailjs
      .send("service_7rheup2", "template_3chxtc4", {
        name: name || "Desconocido", // por si el input viene vacío
        email: email || "no-reply@noreply.com",
        message: message || "(Sin mensaje)",
        title: "Nuevo mensaje desde Nexo Website",
        time: new Date().toLocaleString(),
      })
      .then(() => {
        alert("Gracias por contactarnos, te hablaremos pronto :)");
        formContacto.reset();
      })
      .catch((err) => {
        console.error("Error al enviar:", err);
        alert("Hubo un error enviando el correo, trabajaremos en eso pronto.");
      });

    //   .then(function () {
    //     console.log("Gracias por contactarnos, te hablaremos pronto :)");
    //     alert("Gracias por contactarnos, te hablaremos pronto :)");
    //   })
    //   .catch(function (error) {
    //     console.error("Tuvimos un error enviando el correo:", error);
    //     alert("Tuvimos un error enviando el correo, lo solucionaremos pronto.");
    //   });
  };
}
//este codigo no funcionabien y no se porque

// problemas porque el emailjs no coicinde con el codigo, cree nueva cuenta.
// codigo que no funcionaba pero deje ahi por si acaso lp ocupaba.
