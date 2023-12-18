const profiles = require('../package.json');
const app = require('../app');

app.get('/', function(req, res){
    res.json("Hello world");
})

app.get('/profile', function(req, res){
    res.json(profiles)
})





/*
app.get('/', function(req, res){
    if (req.query.name){
        const name = req.query.name;
        const profile = profiles.find(function(item){
            if(item.name === name){
                return true
            } else {
                return false
            }
        });
        res.json(profile)
    } else {
        res.json(profiles)
    }
});

app.post('/parrot', function(req, res){
    console.log(req.body);
    res.json(req.body)
})

*/