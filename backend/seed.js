/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */

// Load environment variables from .env file
require("dotenv").config();

// Import database client
const database = require("./database/client");

const seed = async () => {
  try {
    // Declare an array to store the query promises
    // See why here: https://eslint.org/docs/latest/rules/no-await-in-loop
    const queries = [];

    /* ************************************************************************* */

    // Generating Seed Data

    // Insert initial data into the database baby_place
    await database.query("delete from users");
    queries.push(
      database.query(
        "insert into users (email, hashed_password, profile, confirmation_inscription, confirmation_date_sent, created_date, last_connection) values ('picotipicota@structure.fr', 'baby', 'Structure', '1', '2024-01-01 00:00:00', '2024-01-01 00:00:00', '2024-01-01 00:00:00')"
      )
    );
    queries.push(
      database.query(
        "insert into users (email, hashed_password, profile, confirmation_inscription, confirmation_date_sent, created_date, last_connection) values ('papapoule@papaoule.fr', 'papapoule', 'Parent', '1', '2024-01-01 00:00:00', '2024-01-01 00:00:00', '2024-01-01 00:00:00')"
      )
    );

    await database.query("delete from structures");
    queries.push(
      database.query(
        "insert into structures (user_id, name, description, address, address_complements, zip_code, city, phone_number, email, activities, welcomes, experiences, prices) values ('1','BabyWilder', 'lorem ipsum', '33 Wild Code Place', '', '33000', 'Bordeaux', '05.56.56.56.56', 'picotipicota@structure.com', 'Promenade Musique Activités déveil', 'Sorties extérieures Repas maison Foyer non fumeur', 'Formation premier secours Formation nesting Pédagogie Montessori', '3.50')"
      )
    );

    await database.query("delete from parents");
    queries.push(
      database.query(
        "insert into parents (user_id, first_name, last_name, birth_name, terms_accepted, date_acceptance_terms, marital_status, address, address_complements, zip_code, city, phone_number, email, profession) values ('2','Papa', 'Poule', 'Poule', '1', '2024-01-01 00:00:00', 'Married', '12 impasse de la rue imaginaire', '', '33000', 'Bordeaux', '06.07.08.09.10', 'papapoule@papaoule.fr', 'Papa à domicile')"
      )
    );

    /* ************************************************************************* */

    // Wait for all the insertion queries to complete
    await Promise.all(queries);

    // Close the database connection
    database.end();

    console.info(`${database.databaseName} filled from ${__filename} 🌱`);
  } catch (err) {
    console.error("Error filling the database:", err.message);
  }
};

// Run the seed function
seed();
