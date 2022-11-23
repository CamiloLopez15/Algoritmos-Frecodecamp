const Person = function(firstAndLast) {
  // Cambia solo el código debajo de esta línea
  // Completa el método de abajo e implementa los otros de manera similar
  let fullName = firstAndLast;
  const first = fullName.split(" ")[0];
  const last = fullName.split(" ")[1];

  
  
  //Metodos
  this.getFullName = function() {
    return fullName;
  };

  this.getFirstName = function() {
    return fullName.split(" ")[0];
  };

  this.getLastName = function() {
    return fullName.split(" ")[1];
  };

  this.setFirstName = function (first) {
    fullName = first + " " + fullName.split(" ")[1]; 
  };

  this.setLastName = function (second) {
    fullName = fullName.split(" ")[0] + " " + second;
  }

  this.setFullName = function (full) {
    fullName = full
  }
};

const bob = new Person('Bob Ross');
bob.getFullName();
console.log(Object.keys(bob).length)