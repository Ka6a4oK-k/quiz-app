CREATE DATABASE quizoff;

CREATE TABLE users(
    user_id SERIAL PRIMARY KEY,
    username VARCHAR(20) UNIQUE,
    email VARCHAR(50) UNIQUE,
    password VARCHAR(255)
);