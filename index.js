const formulario = document.querySelector("#select-account");
const select = document.querySelector("select");
const body = document.querySelector("body");
const wrapper = document.querySelector("#wrapper");
let selected = [];

const cuentas = [
  { id: 10, nombre: "luis", saldo: '900.00', pin: "0000" },
  { id: 24, nombre: "Enrique", saldo: '990.00', pin: "1234" },
  { id: 11, nombre: "Rodrigo", saldo: '200.00', pin: "8976" },
  { id: 11, nombre: "Elena", saldo: '600.00', pin: "3300" },
  { id: 11, nombre: "Marta", saldo: '1000.00', pin: "6776" },
];

// renderMenu()

const validatePIN = (id, pin) => {
  selected = cuentas.filter((cuenta) => {
    return cuenta.id === parseInt(id);
  });
  if (selected[0].pin === pin) {
    // alert("Bienvenido");
    wrapper.innerHTML = "";
    renderMenu(selected[0].nombre);
  } else {
    alert("Intenta nuevamente");
  }
};

formulario.addEventListener("submit", (event) => {
  event.preventDefault();
  let user_id = event.target["cuenta"].value;

  let pin = prompt("Ingrese su pin", "");
  if (pin != null) {
    validatePIN(user_id, pin);
  }
  // console.log(event.target[0].value)
});

cuentas.forEach((cuenta) => {
  let option = document.createElement("option");
  option.value = cuenta.id;
  option.innerText = cuenta.nombre;
  select.appendChild(option);
});