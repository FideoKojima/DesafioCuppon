document.addEventListener("DOMContentLoaded", function() {
  const form = document.querySelector("form");
  const nameInput = document.getElementById("exampleInputName1");
  const emailInput = document.getElementById("exampleInputEmail1");

  form.addEventListener("submit", function(event) {
      event.preventDefault();  // Evitar el envío predeterminado del formulario

      let valid = true;

      if (!nameInput.value.trim()) {
          alert("Por favor ingrese su nombre.");
          valid = false;
      }

      if (!emailInput.value.trim()) {
          alert("Por favor ingrese su correo electrónico.");
          valid = false;
      }

      if (valid) {
          alert("Formulario enviado con éxito.");
          form.reset();  // Limpiar el formulario
      }
  });
});
