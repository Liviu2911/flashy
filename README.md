## Todo

[] Add light theme


## Api calls

.../api/flashcards
GET
POST - body with front, back, folder's id and user's username
/id
PUT - body with front, back, folder's id
DELETE

.../api/folder
GET
POST - body containing user's username and name
/id 
PUT - body containing the new name { name = newName }
DELETE

.../api/account
/login - body with username and password
/register - body with username, email and password
