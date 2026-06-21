const express = require("express");
const redis = require("redis");
const { Client } = require("pg");

const app = express();

// PostgreSQL
const pgClient = new Client({
  host: "db",
  user: "admin",
  password: "admin",
  database: "testdb",
  port: 5432,
});

// Redis
const redisClient = redis.createClient({
  url: "redis://docker-project-redis:6379",
});

async function connectServices() {
  try {
    await pgClient.connect();
    console.log("Connected to PostgreSQL");

    await redisClient.connect();
    console.log("Connected to Redis");
  } catch (err) {
    console.error(err);
  }
}

connectServices();

app.get("/", async (req, res) => {
  try {
    // Redis check
    const cachedUser = await redisClient.get("user");

    if (cachedUser) {
      return res.send("Cache Hit: " + cachedUser);
    }

    // PostgreSQL query
    const result = await pgClient.query(
      "SELECT name FROM users LIMIT 1"
    );

    const userName = result.rows[0].name;

    // Save in Redis
    await redisClient.set("user", userName);

    res.send("Cache Miss -> DB: " + userName);

  } catch (err) {
    console.error(err);
    res.status(500).send("Error");
  }
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});