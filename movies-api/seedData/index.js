import genreModel from '../api/genres/genreModel';
import users from './user';
import dotenv from 'dotenv';
import genres from './genres';

dotenv.config();

// deletes all user documents in collection and inserts test data
async function loadUsers() {
  console.log('load user Data');
  try {
    await userModel.deleteMany();
    await userModel.collection.insertMany(users);
    console.info(`${users.length} users were successfully stored.`);
  } catch (err) {
    console.error(`failed to Load user Data: ${err}`);
  }
}
async function loadGenres() {
    console.log('load genre Data');
    try {
      await genreModel.deleteMany();
      await genreModel.collection.insertMany(genres);
      console.info(`${genres.length} genres were successfully stored.`);
    } catch (err) {
      console.error(`failed to Load genre Data: ${err}`);
    }
  }

if (process.env.SEED_DB) {
  loadUsers();
  loadGenres();
}