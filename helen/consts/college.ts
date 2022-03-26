let data: any;

try {
  data = require('../app.json');
} catch (err) {
  data = require('../app[example].json');
}

export const LOGO = data.name;

export const SECRET_CODE = data.secretCode;

export const SLOGAN = data.slogan;
