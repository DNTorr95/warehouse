const { MongoClient } = require('mongodb')
const client = new MongoClient('mongodb://localhost:27017')
class productService {
    
    collection
    
    constructor() {
        client.connect()
        const db = client.db('warehouse');
        this.collection = db.collection('products');

    }

    async list() {
        var result = await this.collection.find().toArray()
        return result
    }

    get() {

    }
    delete() {

    }

    update() {

    }

}

module.exports = productService