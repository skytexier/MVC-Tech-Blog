const express = require('express');
const path = require ('path');

//Handlebars Setup / testing database routes
const exphbs = require('express-handlebars');
const hbs = exphbs.create({});

//Sequelize / Session setup
const session = require('express-session');
const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const sess = {
  secret: 'TechBlogger',
  cookie: {
    maxAge: 24 * 60 * 60 * 1000,
  },
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
  }),
};

// Setting up express application
const PORT = process.env.PORT || 3001;
const app = express();

app.use(session(sess));

//Routing
const routes = require('./controllers')

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname + '/public')));

// Setting Handlebars
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars')

app.use(routes)

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`Now listening to ${PORT}`));
});