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

async function pizzaProcess() {
  const order = await orderPizza();
  console.log(order);

  const prepare = await preparePizza();
  console.log(prepare);

  const pickup = await pickupPizza();
  console.log(pickup);

  const deliver = await deliverPizza();
  console.log(deliver);

  console.log("Success");
}

pizzaProcess();