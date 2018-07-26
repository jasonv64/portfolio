const express =  require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const FormData = require('form-data');
const app = express();

app.use(morgan('dev'));
app.use(express.static('public'))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

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
    data.submit(url, function(err, res) {
    });

    res.render('thanks', { contact: req.body});
});

app.listen(8080, () => {
    console.log('listening at http://localhost:8080');
});