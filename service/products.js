const { MongoClient, ObjectId } = require('mongodb')

class productService {

    collection

    constructor() {
        const uri = 'mongodb+srv://UsuarioAlmacen:pZFTyqVOgryq5S57@almacencluster.tvso3a3.mongodb.net/?retryWrites=true&w=majority'
        const client = new MongoClient(uri)
        client.connect()
        const db = client.db('warehouse');
        this.collection = db.collection('products');

    }

    async list() {
        try {
            var result = await this.collection.find().toArray()
            return result
        } catch (error) {
            console.log(error)
            return
        }
    }

    async get(id) {
        try {

            var objectId = new ObjectId(id)
            var result = await this.collection.find({ "_id": ObjectId }).toArray()
            return result
        } catch (error) {
            console.log(error);
            return
        }
    }
    async getByName(name) {
        try {
            var result = await this.collection.find({ "name": name }).toArray()
            return result
        } catch (error) {
            console.log(error);
            return
        }
    }
    async delete(id) {
        try {
            var result = await this.collection.deleteOne({ "_id": new ObjectId(id) })
            return (result.acknowledged == true && result.deletedCount == 1)
        } catch (error) {
            console.log(error);
            return
        }
    }
    async save(product) {
        try {
            var result = await this.collection.insertOne(product)
            return result.insertedId
        } catch (error) {
            console.log(error);
            return
        }
    }
    async update(id, product) {
        try {
            // camelCase
            // PascalCase
            // snakecase

            var objectId = new ObjectId(id)
            var result = await this.collection.updateOne({ "_id": objectId }, { $set: product })
            return (result.acknowledged == true && result.modifiedCount == 1)
        } catch (error) {
            console.log(error)
            return
        }
    }

}

module.exports = productService