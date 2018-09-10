const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const FormData = require('form-data');
const app = express();
const PORT = process.env.PORT || 8080;

app.use(morgan('dev'));
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.set('views', './views');

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    const data = {
        person: {
            firstName: 'Jason',
            lastName: 'Valadez',
        }
    }

    res.render('index', data);
});

app.get('/contact', (req, res) => {
    res.render('contact');
});

app.get('/projects', (req, res) => {
    res.render('projects');
})

app.get('/calendar', (req, res) => {
    res.render('./projects/calendar');
})

app.get('/lyricslive', (req, res) => {
    res.render('./projects/hackathon');
})

app.get('/vstda', (req, res) => {
    res.render('./projects/vstda');
})

app.get('/topspots', (req, res) => {
    res.render('./projects/sdtopspots');
})

app.get('/mortgage', (req, res) => {
    res.render('./projects/mortgage');
})

app.get('/about', (req, res) => {
    res.render('about');
})

app.post('/thanks', (req, res) => {
    const url = 'https://script.google.com/macros/s/AKfycbypRrGZB2gLal534CGT547Z3mRIWECZ1PHOzUzu41sP2cySWY8X/exec';
    const data = new FormData();
    const fields = Object.keys(req.body);

    fields.forEach(field => {
        data.append(field, req.body[field])
    })
    data.append('TimeStamp', Date());

    const config = { headers: { 'Content-Type': 'multipart/form-data' } }
    data.submit(url, function (err, res) {
    });

    res.render('thanks', { contact: req.body });
});

app.listen(PORT, () => {
    console.log('listening on port 8080')
});