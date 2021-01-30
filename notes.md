# Notes

- npm install --save-dev nodemon

nodemon allows us to refresh the node app after making changes without the need to restart it everytime.

- npm install express

Express is the basic tool o easily build a node JS server

## Database with MongoDB

- Create a cluster in https://cloud.mongodb.com/

On "database access" area you can create databas users. For this sample project, I've created the user simpletxt with password st101.

## About POST to the database

The definition of the schemas in the js files inside /model, will define the name of the collections once a POST is made by calling the endpoint. The magic happens here:

 * module.exports = mongoose.model('User', userSchema);

 This will create the "users" collection in mongoDB.

## dotenv

npm install dotenv. This package is to create and manage environment variables so that they are save on the app and not shown in the repository.

We add a .env file on the root of the project, and create environment variables, which we can later request on the index.js file by using the dotenv library, and reference them using process.env."your variable name"

## using Prettier to order and standardize code

npm install --save-dev --save-exact prettier 

Make sure to have the .prettierrc file with the desired structure in the root of the project.

## Accesing vs code settings

Go to File, Preferences, Settings, or simply click Ctrl ","

## Joi for validation before allowing a DB Post

npm install joi
https://joi.dev/api/

## JSON web token for creating session tokens

 * npm install jsonwebtoken

## For hashing passwords

 * npm install bcrypt



