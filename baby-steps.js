const sum = () => {
  let s = 0;
  for (let index = 2; index < process.argv.length; index++) {
    s = s + Number(process.argv[index]);
  }
  return s;
};

console.log(sum());
