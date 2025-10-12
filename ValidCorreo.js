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

emailjs.init("lwrPe5CwSriKGXfx7"); //esta es la public key de emailjs

const formContacto = document.getElementById("formContacto");

if (formContacto) {
  formContacto.onsubmit = function (event) {
    event.preventDefault();

    //basico tomamos los datos primeros
    const name = document.querySelector('input[name="name"]').value;
    const email = document.querySelector('input[name="email"]').value;
    const message = document.querySelector('textarea[name="message"]').value;
    const title = "Nuevo Mensaje de Posible Cliente desde la web";
    const time = new Date().toLocaleDateString();

    emailjs
      .send("service_8qmdlb2", "template_yb7pxyn", {
        title: title,
        name: name,
        time: time,
        email: email,
        message: message,
      })
      .then(function () {
        console.log("Gracias por contactarnos, te hablaremos pronto :)");
        alert("Gracias por contactarnos, te hablaremos pronto :)");
      })
      .catch(function (error) {
        console.log("Tuvimos un error enviando el correo.");
        alert("Tuvimos un error enviando el correo, lo solucionaremos pronto.");
      });
  };
}

// problemas porque el emailjs no coicinde con el codigo, cree nueva cuenta.
