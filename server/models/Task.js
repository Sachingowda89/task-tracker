// server/models/Task.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const taskSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, default: '' },
  assigneeId: { type: Schema.Types.ObjectId, ref: 'User', default: null },
  status: { type: String, enum: ['todo','in-progress','done'], default: 'todo' },
  dueDate: { type: Date, default: null },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Task', taskSchema);
