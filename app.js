const express = require('express');
const app = express();

const path = require('path');
const morgan = require('morgan');
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


//set up our express application
app.use(morgan('dev')); // log every request to the console
app.use(express.static(path.join(__dirname, 'public')));

//app.set('views', path.join(__dirname, 'app/views'));
app.set('views', [path.join(__dirname, 'app/views'), path.join(__dirname, 'app/views/_shared/')]);
app.set('view engine', 'ejs');

app.set('badges',[path.join(__dirname, 'app/badges')]);

//require('./config/routes.js')(app);

app.listen(3000, () => console.log('Example app listening on port 3000!'));

app.get('/', function(req, res) {
    res.render('index', {title: 'Open BadgeBot'});
});


const { spawn } = require('child_process');
const badgebot = spawn('node', ['./app/badgebot.js']);

badgebot.stdout.on('data', (data) => {
  console.log(`stdout: ${data}`);
});
