const { db } = require('@vercel/postgres');

const {
  categories,
  events,
  timeSpent,
  users,
  hashtags,
} = require('./seed-data.js');
const bcrypt = require('bcrypt');

async function seedUsers(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
    // Create the "users" table if it doesn't exist
    const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS users (
        id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        email TEXT NOT NULL UNIQUE,
        password TEXT NOT NULL
      );
    `;

    console.log(`Created "users" table`);

    // Insert data into the "users" table
    const insertedUsers = await Promise.all(
      users.map(async (user) => {
        const hashedPassword = await bcrypt.hash(user.password, 10);
        return client.sql`
        INSERT INTO users (id, name, email, password)
        VALUES (${user.id}, ${user.name}, ${user.email}, ${hashedPassword})
        ON CONFLICT (id) DO NOTHING;
      `;
      }),
    );

    console.log(`Seeded ${insertedUsers.length} users`);

    return {
      createTable,
      users: insertedUsers,
    };
  } catch (error) {
    console.error('Error seeding users:', error);
    throw error;
  }
}

async function seedCategories(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

    // Create the "categories" table if it doesn't exist
    const createTable = await client.sql`
    CREATE TABLE IF NOT EXISTS categories (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL
  );
`;

    console.log(`Created "categories" table`);

    // Insert data into the "categories" table
    const insertedCategories = await Promise.all(
      categories.map(
        (category) => client.sql`
        INSERT INTO categories (id, name)
        VALUES (${category.id}, ${category.name})
        ON CONFLICT (id) DO NOTHING;
      `,
      ),
    );

    console.log(`Seeded ${insertedCategories.length} categories`);

    return {
      createTable,
      categories: insertedCategories,
    };
  } catch (error) {
    console.error('Error seeding categories:', error);
    throw error;
  }
}

async function seedHashtags(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

    // Create the "hashtags" table if it doesn't exist
    const createTable = await client.sql`
    CREATE TABLE IF NOT EXISTS hashtags (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL
  );
`;

    console.log(`Created "hashtags" table`);

    // Insert data into the "hashtags" table
    const insertedHashtags = await Promise.all(
      hashtags.map(
        (tag) => client.sql`
        INSERT INTO hashtags (id, name)
        VALUES (${tag.id}, ${tag.name})
        ON CONFLICT (id) DO NOTHING;
      `,
      ),
    );

    console.log(`Seeded ${insertedHashtags.length} hashtags`);

    return {
      createTable,
      hashtags: insertedHashtags,
    };
  } catch (error) {
    console.error('Error seeding hashtags:', error);
    throw error;
  }
}

async function seedEvents(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

    // Create the "events" table if it doesn't exist
    const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS events (
        id SERIAL PRIMARY KEY,
        name VARCHAR(20)[]  CHECK (array_length(name, 1) > 0),
        image_url VARCHAR(255),
        category_id INTEGER REFERENCES categories
      );
    `;

    console.log(`Created "events" table`);

    // Insert data into the "events" table
    const insertedEvents = await Promise.all(
      events.map(
        (event) => client.sql`
        INSERT INTO events (id, name, category_id, image_url)
        VALUES (${event.id}, ${event.name}, ${event.category_id}, ${event.image_url})
        ON CONFLICT (id) DO NOTHING;
      `,
      ),
    );

    console.log(`Seeded ${insertedEvents.length} events`);

    return {
      createTable,
      events: insertedEvents,
    };
  } catch (error) {
    console.error('Error seeding events:', error);
    throw error;
  }
}

async function seedTimeSpent(client) {
  try {
 
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

    // // Create the "events" table if it doesn't exist
    const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS timeSpent (
        id SERIAL PRIMARY KEY,
        start_event TIMESTAMP,
        end_event TIMESTAMP,
        user_id UUID REFERENCES users,
        event_id INTEGER REFERENCES events,
        note TEXT
      );
    `;

    console.log(`Created "timeSpent" table`);

    // // Insert data into the "timeSpent" table
    const insertedTimeSpent = await Promise.all(
      timeSpent.map(
        (time) => client.sql`
        INSERT INTO timeSpent (id, start_event, end_event, user_id, event_id, note)
        VALUES (${time.id}, ${time.start}, ${time.end}, ${time.user_id}, ${time.event_id}, ${time.note})
        ON CONFLICT (id) DO NOTHING;
      `,
      ),
    );

    console.log(`Seeded ${insertedTimeSpent.length} timeSpent`);

    return {
      createTable,
      timeSpent: insertedTimeSpent,
    };
  } catch (error) {
    console.error('Error seeding timeSpent:', error);
    throw error;
  }
}

async function main() {
  const client = await db.connect();

   await seedUsers(client);
   await seedCategories(client);
   await seedHashtags(client);
   await seedEvents(client);
   await seedTimeSpent(client);

  await client.end();
}

main().catch((err) => {
  console.error(
    'An error occurred while attempting to seed the database:',
    err,
  );
});