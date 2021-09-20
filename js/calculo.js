function calculoCalorias() {
    let calorias1 = document.orderform.calorias1.value;
    let calorias2 = document.orderform.calorias2.value;
    totalcalorias = Number(calorias1) + Number(calorias2);
    document.orderform.totalcal.value = totalcalorias;
  
  }
  
  function calculoAzucares() {
    let azucares1 = document.orderform.azucares1.value;
    let azucares2 = document.orderform.azucares2.value;
    totalazucares = Number(azucares1) + Number(azucares2);
    document.orderform.totalazu.value = totalazucares;
  
  }
  
  function calculoGrasas() {
    let grasas1 = document.orderform.grasas1.value;
    let grasas2 = document.orderform.grasas2.value;
    totalgrasas = Number(grasas1) + Number(grasas2);
    document.orderform.totalgra.value = totalgrasas;
  
  }
  function calculoSodio() {
    let sodio1 = document.orderform.sodio1.value;
    let sodio2 = document.orderform.sodio2.value;
    totalsodio = Number(sodio1) + Number(sodio2);
    document.orderform.totalso.value = totalsodio;
  
  }

