// TODO: write your code here

const shortDesc = (obj) => {
  if (obj === undefined) return null;
  const {
    name, type, health, level, attack, defence,
  } = obj;
  const firstSymbolName = name.charAt(0);
  let typeSymbol;
  if (type === 'Bowman') {
    typeSymbol = String.fromCodePoint(0x1F620);
  } if (type === 'Swordsman') {
    typeSymbol = String.fromCodePoint(0x1F621);
  } if (type === 'Magician') {
    typeSymbol = String.fromCodePoint(0x1F9D0);
  } if (type === 'Daemon') {
    typeSymbol = String.fromCodePoint(0x1F47F);
  } if (type === 'Undead') {
    typeSymbol = String.fromCodePoint(0x1F480);
  } if (type === 'Zombie') {
    typeSymbol = String.fromCodePoint(0x1F9D);
  }
  const attackSymbol = String.fromCodePoint(0x2694);
  const defenceSymbol = String.fromCodePoint(0x1F6E1);
  const healthSymbol = String.fromCodePoint(0x2764);
  const message = `${typeSymbol}${firstSymbolName}(${level})${attackSymbol}${attack}${defenceSymbol}${defence}${healthSymbol}${health}`;
  console.log(message);
  return message;
};

shortDesc({
  name: 'Лучник',
  type: 'Bowman',
  health: 50,
  level: 1,
  attack: 40,
  defence: 10,
});

export default shortDesc;
