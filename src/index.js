import { initMongoConnection } from './db/initMongoDB.js';
import { setupServer } from './server.js';

async function Start() {
  await initMongoConnection();
  setupServer();
}

Start();
