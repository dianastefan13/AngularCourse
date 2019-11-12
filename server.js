var express = require('express')
var cors = require('cors')

var app = express()
app.use(cors())

var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

var id = 0

// app.get('*.*', express.static('dist/curs-angular-project', {maxAge: '1y'}));
// app.all('*', function (req, res) {
//     res.status(200).sendFile(`/`, {root: 'dist/curs-angular-project'});
// });

// var interceptAllRequests = function (req, res, next) {
//     console.log(req)
//     if (req.query.ok = 'curs') {
//         next()
//     } else {
//         res.send('Nope')
//     }
// }

// app.use(interceptAllRequests)

var heroes = [
    { id: ++id, name: "Hero1"},
    { id: ++id, name: "Hero2"}
]

app.get('/heroes', function(req, res) {
    res.json({ heroes: heroes })
})

app.get('/hero/:id', function(req, res) {
    let hero = heroes.find(hero => hero.id == req.params.id)
    res.json(hero ? hero : { "error": "No hero found with id = " + req.params.id})
})

app.delete('/hero/:heroId([0-9]{1,})', function(req, res) {
    heroes = heroes.filter(hero => hero.id != req.params.heroId)
    res.json({ "msg": "Delete was successful!"})
})

app.post('/hero', function(req, res) {
    var hero = req.body
    hero.id = req.body.id ? req.body.id : ++id
    heroes.push(hero)

    res.json({ "msg": "Create was successful!", "payload": hero})
})

app.put('/hero/:id', function(req, res) {
    let hero = heroes.find(hero => hero.id == req.params.id)
    if (!hero) {
        res.json({ "error": "No hero found with id = " + req.params.id })    
        return 
    }
    hero.name = req.body.name

    res.json({ "msg": "Update was successful!", "payload": hero})
})

app.get('*', function(req, res) {
    res.send('Nothing to see here!')
})

app.listen(3000)

