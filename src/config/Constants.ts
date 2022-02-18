require('dotenv').config()

export const config = {
	API_URL: 'http://localhost:5000',
	MONGO_CONNECTION:	process.env.MONGO_CONNECT_URL,
	// 'mongodb+srv://<user>:<password>@<database>.yptlq.mongodb.net/url-shortener-dio?retryWrites=true&w=majority',
}
