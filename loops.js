function forLoop(array) {
  for (var i = 0; i < 25; i++) {
    if (i === 1) {
      array.push(`I am ${i} strange loop.`);
    } else {
      array.push(`I am ${i} strange loops.`);
    }
  }
    return array;
};

function whileLoop(n) {
  var countdown = n;

  while (countdown > 0) {
    console.log(--countdown);
  }
  return 'done';
}

function doWhileLoop(array) {

  function maybeTrue() {
    return Math.random() >= 0.5
  }

  do {
    //loop body
  } while (array.length > 0 && maybeTrue());

  return array;
}
