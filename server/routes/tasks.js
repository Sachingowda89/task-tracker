// server/routes/tasks.js
const express = require('express');
const router = express.Router();
const Task = require('../models/Task');
const User = require('../models/User');

// GET /api/tasks
// supports optional query parameters:
// - filter=all|mine|completed
// - assigneeId=<id> (for "mine" filter or explicit)
router.get('/', async (req, res) => {
  try {
    const { filter, assigneeId } = req.query;
    const query = {};
    if (filter === 'completed') query.status = 'done';
    if (filter === 'mine' && assigneeId) query.assigneeId = assigneeId;
    if (assigneeId && !query.assigneeId) query.assigneeId = assigneeId;

    const tasks = await Task.find(query).populate('assigneeId', 'name').sort({ createdAt: -1 });
    res.json(tasks);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// POST /api/tasks
// payload: { title, description, assigneeId (or assigneeName), dueDate }
router.post('/', async (req, res) => {
  try {
    let { title, description, assigneeId, dueDate } = req.body;
    // allow quick creation by name: if assigneeId is not an ObjectId but a string name
    if (assigneeId && typeof assigneeId === 'string' && !assigneeId.match(/^[0-9a-fA-F]{24}$/)) {
      const u = new User({ name: assigneeId });
      await u.save();
      assigneeId = u._id;
    }
    const task = new Task({ title, description, assigneeId: assigneeId || null, dueDate: dueDate || null });
    await task.save();
    await task.populate('assigneeId', 'name');
    res.status(201).json(task);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// GET /api/tasks/:id
router.get('/:id', async (req, res) => {
  try {
    const task = await Task.findById(req.params.id).populate('assigneeId', 'name');
    if (!task) return res.status(404).json({ error: 'Task not found' });
    res.json(task);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// PATCH /api/tasks/:id
router.patch('/:id', async (req, res) => {
  try {
    const updates = req.body;
    const task = await Task.findByIdAndUpdate(req.params.id, updates, { new: true }).populate('assigneeId', 'name');
    if (!task) return res.status(404).json({ error: 'Task not found' });
    res.json(task);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// DELETE /api/tasks/:id
router.delete('/:id', async (req, res) => {
  try {
    const task = await Task.findByIdAndDelete(req.params.id);
    if (!task) return res.status(404).json({ error: 'Task not found' });
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
