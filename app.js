let patron = /^\d{2}\D{4}\d{1}$/;
//console.log(patron.test(1211));
function validar(cadena) {
  try {
    if (patron.test(cadena)) {
      document.write("Exitos!!");
      return cadena;
    }
    throw "empty";
  } catch (err) {
    alert("Fracaso ");
  }
}
validar("12ABCD1");

