// server/seed.js
require('dotenv').config();
const mongoose = require('mongoose');
const User = require('./models/User');

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/tasktracker';

async function run() {
  await mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });
  const u = new User({ name: 'Me (Demo)' });
  await u.save();
  console.log('Created user id:', u._id.toString());
  await mongoose.disconnect();
}

run().catch(e => { console.error(e); process.exit(1); });
