const functions = require('firebase-functions')
const admin = require('firebase-admin')

admin.initializeApp(functions.config().firebase)

const express = require('express')
const bodyParser = require('body-parser')
const api = require('./api')

const app = express()
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

api(app)

exports.api = functions.https.onRequest(app)
