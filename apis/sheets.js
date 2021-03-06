const { GoogleSpreadsheet } = require('google-spreadsheet');
// const { promisify } = require('util');

const creds = require('./client_secret.json');

async function accessSpreadsheet() {
    const doc = new GoogleSpreadsheet(
        '1GNWdgqblGMGmJTvC4ml9JKEjLQy3Jwsnifl50Nmu0iQ'
    );
    await doc.useServiceAccountAuth(creds);
    await doc.loadInfo();
    const sheet = doc.sheetsByIndex[0];
    console.log(`Title: ${sheet.title}`);
    const rows = await sheet.getRows();
    console.log(rows);
}

accessSpreadsheet();
