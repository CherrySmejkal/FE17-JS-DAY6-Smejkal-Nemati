let sw = JSON.parse(sandwiches);
let fr = JSON.parse(fries);

document.write(
  `My favourite sandwich is a ${sw.sandwich} which has approximately ${sw.calories} calories, along with it I enjoy eating ${fr.fries_size} which have about  ${fr.calories} calories. `
);
