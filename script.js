const form = document.getElementById("deForm");

// Run validation when submit button is clicked
form.addEventListener("submit", function(e) {
  e.preventDefault(); // Prevent default form submission

  // Validate each input
  validateInput("firstname");
  validateInput("lastname");
  validateEmail("email");
  validateInput("password");

  // Check if any input still has errors
  const errors = form.querySelectorAll(".formBox.error").length;
  if (errors === 0) {
    alert("Form submitted successfully!");
    form.submit(); // Submit form if all valid
  }
});

// Validate empty text and password fields
function validateInput(id) {
  const input = document.getElementById(id);
  const formBox = input.parentElement;

  if (input.value.trim() === "") {
    formBox.classList.add("error");
  } else {
    formBox.classList.remove("error");
  }
}

// Validate email format
function validateEmail(id) {
  const input = document.getElementById(id);
  const formBox = input.parentElement;
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailPattern.test(input.value.trim())) {
    formBox.classList.add("error");
    input.placeholder = "email@example/com";
   
  } else {
    formBox.classList.remove("error");
  }
}

