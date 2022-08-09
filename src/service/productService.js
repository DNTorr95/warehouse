const { MongoClient, ObjectId } = require('mongodb')

class ProductService {

    collection

    constructor() {
        const uri = 'mongodb+srv://UsuarioAlmacen:pZFTyqVOgryq5S57@almacencluster.tvso3a3.mongodb.net/?retryWrites=true&w=majority'
        const client = new MongoClient(uri)
        client.connect()
        const db = client.db('warehouse');
        this.collection = db.collection('products');

    }

    async list() {
            var result = await this.collection.find().toArray()
            return result
       
    }

    async get(id) {
        
            var objectId = new ObjectId(id)
            var result = await this.collection.find({ "_id": ObjectId }).toArray()
            return result
        
    }
    async getByName(name) {
      
            var result = await this.collection.find({ "name": name }).toArray()
            return result
        
    }
    async delete(id) {
       
            var result = await this.collection.deleteOne({ "_id": new ObjectId(id) })
            return (result.acknowledged == true && result.deletedCount == 1)
      
    }
    async save(product) {
   
            var result = await this.collection.insertOne(product)
            return result.insertedId
       
    }
    async update(id, product) {
       
            // camelCase
            // PascalCase
            // snakecase

            var objectId = new ObjectId(id)
            var result = await this.collection.updateOne({ "_id": objectId }, { $set: product })
            return (result.acknowledged == true && result.modifiedCount == 1)
      
    }

}

module.exports = ProductService