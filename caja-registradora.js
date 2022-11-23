function checkCashRegister(price, cash, cid) {
  let fondos = [];
  let cantidadChange = cash - price;
  let change = [];

  for(let i = 0; i < cid.length; i++){
    fondos.push(cid[i][1]);
  }

  let verificarFondos = () => {
    let valoresBilletes = [
      ["PENNY", 0.01],
      ["NICKEL", 0.05],
      ["DIME", 0.1],
      ["QUARTER", 0.25],
      ["ONE", 1],
      ["FIVE", 5],
      ["TEN", 10],
      ["TWENTY", 20],
      ["ONE HUNDRED", 100]
    ].reverse();
    cid.reverse();
    fondos.reverse();

    let cantidadContenida = fondos.reduce((acc,sgt) => acc + sgt).toFixed(2);

    if(cantidadChange < cantidadContenida) {
        for(let i = 0; i < fondos.length;i++){
          if(valoresBilletes[i][1] <= cantidadChange){
          let division = Math.floor(cantidadChange / valoresBilletes[i][1]);
          let cantidadDisponible = fondos[i] / valoresBilletes[i][1];
          if(division <= cantidadDisponible) {
            change.push([valoresBilletes[i][0], valoresBilletes[i][1]*division])
            cantidadChange = (cantidadChange - valoresBilletes[i][1]*division).toFixed(3);
            cid[i][1] -= valoresBilletes[i][1]*division;
          }
          else {
            change.push([valoresBilletes[i][0], valoresBilletes[i][1]*cantidadDisponible])
            cantidadChange -= (valoresBilletes[i][1]*cantidadDisponible).toFixed(2);
            cid[i][1] -= valoresBilletes[i][1]*cantidadDisponible;
          }
        }
      }
      if(cantidadChange == 0) return change;
      else return false
    }
    return false
  }

  if(fondos.includes(cantidadChange) && fondos.filter(elements => elements == 0).length == cid.length - 1){
    return {status: "CLOSED", change: [...cid]}
  }

  else if (verificarFondos()){
    console.log(cantidadChange)
    return {status: "OPEN", change: [...change]} 
  }

  else {
    return {status: "INSUFFICIENT_FUNDS", change: []}
  }
}

checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);