import { MongoClient, ServerApiVersion } from 'mongodb'

if (!process.env.MONGODB_URI) {
  throw new Error('Invalid/Missing evironment variable: "MONGODB_URI"')
}

const uri = process.env.MONGODB_URI
const options = {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
}

let client: MongoClient

if (process.env.NODE_ENV === 'development') {
  const globalWidthMongo = global as typeof globalThis & {
    _mongoClient?: MongoClient
  }

  if (!globalWidthMongo._mongoClient) {
    globalWidthMongo._mongoClient = new MongoClient(uri, options)
  }
  client = globalWidthMongo._mongoClient
} else {
  client = new MongoClient(uri, options)
}

export default client
