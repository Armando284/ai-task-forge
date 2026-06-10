import Fastify from 'fastify';
const app = Fastify();

app.get('/', async () => {
  return { message: 'Hello, World!' };
});

const start = async () => {
  try {
    await app.listen({ host: '0.0.0.0', port: 3000 });
    console.log('Server is running on http://localhost:3000');
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
}

start();