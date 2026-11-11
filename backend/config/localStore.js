// Local JSON fallback store when MongoDB is not running locally (dev convenience)
const fs = require('fs');
const path = require('path');

const dataDir = path.join(__dirname, '..', 'data');
const dbFile = path.join(dataDir, 'db.json');

// Ensure data directory and file exist
const initStore = () => {
  if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir, { recursive: true });
  }
  if (!fs.existsSync(dbFile)) {
    fs.writeFileSync(
      dbFile,
      JSON.stringify({ users: [], resumes: [] }, null, 2),
      'utf8'
    );
  }
};

const readData = () => {
  initStore();
  try {
    const raw = fs.readFileSync(dbFile, 'utf8');
    return JSON.parse(raw);
  } catch (err) {
    return { users: [], resumes: [] };
  }
};

const writeData = (data) => {
  initStore();
  fs.writeFileSync(dbFile, JSON.stringify(data, null, 2), 'utf8');
};

module.exports = {
  readData,
  writeData,
};
