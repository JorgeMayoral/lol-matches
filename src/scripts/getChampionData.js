const path = require('path');
const fs = require('fs/promises');
const file = require('./champion.json');

const { data } = file;
const champions = Object.keys(data);

const championsData = [];

champions.map((champ) => {
  const champData = {
    name: champ,
    id: data[champ].key,
    image: data[champ].image.full,
  };
  championsData.push(champData);
});

const destination = path.join(process.cwd(), '/data');

const content = JSON.stringify(championsData);

fs.writeFile(`${destination}/championsData.json`, content, 'utf-8').then(() => {
  console.log('✅ champions data file created!');
});
