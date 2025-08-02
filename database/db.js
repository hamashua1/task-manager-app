import {MongoClient} from 'mongodb'

MongoClient.connect(process.env.MONGO_URI, (err, db) => {
  if (err) throw err

  db.collection('td').find().toArray((err, result) => {
    if (err) throw err

    console.log(result)
  })
})

