import api from './app';

api.listen(process.env.PORT, () => console.log(`Express listening, PORT: ${process.env.PORT}`));
