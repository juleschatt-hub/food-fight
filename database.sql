-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!
CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL,
    "email" VARCHAR (100) NOT NULL,
    "first_name" VARCHAR (100) NOT NULL,
    "last_name" VARCHAR (100) NOT NULL
);

CREATE TABLE "restaurants" (
	"id" SERIAL PRIMARY KEY,
	"fight_id" INT REFERENCES "fights",
	"restaurant_name" VARCHAR(500) NOT NULL,
	"place_id" VARCHAR(500),
	"photo_reference" VARCHAR(500),
	"rating" FLOAT,
	"price_level" INT,
	"diner_like" BOOLEAN,
	"guest_like" BOOLEAN
	
);

CREATE TABLE "fights"(
	"id" SERIAL PRIMARY KEY,
	"diner_id" INT NOT NULL REFERENCES "user",
	"guest_id" INT NOT NULL REFERENCES "user",
	"dinner_date" DATE NOT NULL,
	"restaurant_match_id" INT
);