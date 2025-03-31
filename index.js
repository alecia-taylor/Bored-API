const express = require('express');
const fetch = require('node-fetch');
const app = express();
const port = 3000;

const activities = [
    "Go for a walk",
    "Read a book",
    "Watch a new movie",
    "Try a new recipe",
    "Learn a new programming language",
    "Do a home workout",
    "Listen to a podcast",
    "Write a short story",
    "Meditate for 10 minutes",
    "Call a friend"
];

app.get('/activity', async (req, res) => {
    try {
        const response = await fetch('https://www.boredapi.com/api/activity');
        const data = await response.json();
        res.json({ activity: data.activity });
    } catch (error) {
        const randomActivity = activities[Math.floor(Math.random() * activities.length)];
        res.json({ activity: randomActivity, source: "local" });
    }
});

app.listen(port, () => {
    console.log(`Bored API is running at http://localhost:3000`);
});
