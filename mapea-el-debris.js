function orbitalPeriod(arr) {
  const GM = 398600.4418;
  const earthRadius = 6367.4447;
  const pi2 = 2 * Math.PI;
  const arrKepler = [];

  const obtenerPeriodoOrbital = (objElement) => {
      const a = Math.pow(earthRadius + objElement.avgAlt, 3);
      const raizDivision = Math.sqrt(a / GM);
      const periodoOrbital = Math.round(pi2 * raizDivision);
      return {name: objElement.name, orbitalPeriod: periodoOrbital};
  }
  for (let element of arr) {
    arrKepler.push(obtenerPeriodoOrbital(element));
  }
  return arrKepler
}

orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]);