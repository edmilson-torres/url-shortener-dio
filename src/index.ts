import api from './app';

api.listen(process.env.PORT || 5000, () => console.log(`Express listening, PORT: ${process.env.PORT}`));
