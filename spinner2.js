// ... fill in the rest yourself ...


const spinner = ['|','/','-','\\', '|', '/', '-', '|'];
let counter = 0;
process.stdout.write('hello from spinner1.js... \rheyyy\n');
for (let spin of spinner) {
  setTimeout(() => {
    process.stdout.write(`\r${spin}   `)
  }, counter += 200);
};

