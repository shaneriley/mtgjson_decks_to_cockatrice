const fs = require('fs');
const path = require('path');
const mtgjsonDir = path.join(__dirname, 'AllDeckFiles');

const jsonDecks = fs.readdirSync(mtgjsonDir).filter((f) => /json$/.test(f));

jsonDecks.forEach((jsonFile) => {
  const file = jsonFile.replace(/\.json$/, '');
  const deck = JSON.parse(fs.readFileSync(`${mtgjsonDir}/${file}.json`)).data;

  const mapCards = (cards) => (
    cards.map((c) => `<card number="${c.count}" name="${c.name}" />`).join("\n    ")
  );

  const sideboard = (cards) => (
    `
  <zone name="sideboard">
    ${mapCards(cards)}
  </zone>`
  );

  const cod = `<?xml version="1.0" encoding="UTF-8"?>
<cockatrice_deck version="1">
  <deckname>${deck.name}</deckname>
  <comments></comments>
  <zone name="main">
    ${mapCards(deck.mainBoard)}
  </zone>${deck.sideBoard.length ? sideboard(deck.sideBoard) : ''}
</cockatrice_deck>
`;

  fs.writeFileSync(`${path.join(__dirname, 'COD')}/${file}.cod`, cod);
});
