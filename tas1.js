function orderPizza() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Pizza ordered");
    }, 1000);
  });
}

function preparePizza() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Pizza prepared");
    }, 2000);
  });
}

function pickupPizza() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Delivery boy picked up pizza");
    }, 1000);
  });
}

function deliverPizza() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Pizza delivered");
    }, 1000);
  });
}

orderPizza()
  .then((msg) => {
    console.log(msg);
    return preparePizza();
  })
  .then((msg) => {
    console.log(msg);
    return pickupPizza();
  })
  .then((msg) => {
    console.log(msg);
    return deliverPizza();
  })
  .then((msg) => {
    console.log(msg);
    console.log("Success");
  });