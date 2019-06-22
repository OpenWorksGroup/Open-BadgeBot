const express = require('express');
const app = express();

const path = require('path');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const CronJob = require('cron').CronJob;

const BadgeBot = require("./app/badgebot.js");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


//set up our express application
app.use(morgan('dev')); // log every request to the console
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public/css')));
app.use(express.static(path.join(__dirname, 'public/js')));

//app.set('views', path.join(__dirname, 'app/views'));
app.set('views', [path.join(__dirname, 'app/views')]);
//app.set('shared', [path.join(__dirname, 'app/views/_shared/')]);

app.set('view engine', 'ejs');

app.set('badges',[path.join(__dirname, 'app/badges')]);

require('./config/routes.js')(app);

app.listen(3000, () => console.log('Example app listening on port 3000!'));

console.log('Before job instantiation');
const job = new CronJob('0 */1 * * * *', function() {
    const d = new Date();
    console.log('Every second:', d);
    BadgeBot();
});
console.log('After job instantiation');
job.start();


/**const { spawn } = require('child_process');
const badgebot = spawn('node', ['./app/badgebot.js']);

badgebot.stdout.on('data', (data) => {
  console.log(`stdout: ${data}`);
});**/