function addTogether() {
  if (arguments.length == 2) {
    if (typeof arguments[0] == 'number' && typeof arguments[1] == 'number') return arguments[0] + arguments[1];
    else return undefined;
  }
  else {
    if(typeof arguments[0] == 'number') {
      let argumento1 = arguments[0];
      return argumento2 => {
        if (typeof argumento2 == 'number') return argumento1 + argumento2;
        else return undefined
      }
    }
  }
}

addTogether(2)([3]);