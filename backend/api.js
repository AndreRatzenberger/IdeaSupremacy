// Example Express.js API handler for idea generation
const express = require('express');
const router = express.Router();

// Dummy idea generator (replace with AI integration)
router.get('/idea', (req, res) => {
  const ideas = [
    'A social network for pets with AI-generated playdate suggestions.',
    'A productivity app that gamifies your daily tasks and lets you compete with colleagues.',
    'An AI-powered meal planner that creates recipes from what’s in your fridge.',
    'A virtual brainstorming room where AI rates and improves your app ideas.'
  ];
  const idea = ideas[Math.floor(Math.random() * ideas.length)];
  res.json({ idea });
});

module.exports = router;
