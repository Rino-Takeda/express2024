var express = require('express');
const { route } = require('./hello');
var router = express.Router();


//接続情報を設定
const { MongoClient } = require("mongodb");
const uri = "mongodb+srv://Lion:Monk22bdbdFS66@test.ffvg9.mongodb.net/?retryWrites=true&w=majority&appName=Test";
const client = new MongoClient(uri);

router.get('/', async (req, res) => {
    //データベース、コレクションを指定
    const database = client.db('notes');
    const notes = database.collection('notes');

    //idが1のドキュメントを取得
    const query = { id: 2 };
    const note = await notes.findOne(query);

    res.json(note.title);
})

module.exports = router;