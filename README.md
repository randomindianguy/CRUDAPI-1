# CRUDAPI-1

Whenever we make a desktop application, we need to store the data somewhere. That’s how we build softwares, that’s how we build apps- to work with data.

- So, where can we store this data?
    - Notepad
    - Doc format
    - Databases

Why not just store it in some variable?

→ We *can.* But, it’s preferred to store it in some permanent storage.

This application that we’re creating will store data of an IT/tech professional.  

So, I want to store the following:

1. Name
2. Which Tech you’re working on.
3. Are they liking the tech they’re using/working on? [True/False] By Default, it’ll be False, as they’re just beginning to use the tech stack, but after a while, it’ll be true

REST APIs have multiple methods to work with.

REST APIs mainly uses HTTP. 

You can use multiple methods:

1. GET
2. POST
3. Patch
4. Put
5. Delete

We’ll be using a special client, a REST client (ie, POSTMAN)

We can send GET, POST, PATCH, DELETE etc. using POSTMAN.

If you want to pass data (ie, POST), and want to send data from Client → Server, we have to send data using ‘Body > Raw’ in Postman.

We can write the data in JSON Format in ‘raw’ and then click send to go to the server. 

But, to send it to the server, we’ll need a URL (ie, endpoints)

We need endpoints for our different requests.

We also need a database. For this, we are using MongoDB.

We also need a web framework.

- Why?
    - It’s easier to maintain your code.
    - It’s easier to understand it
    - It will simplify your process

We will be using Express.js as our web framework.

The packages that we need are as follows:

1. express
2. mongodb
3. mongoose
4. nodemon

But, nodemon is not necessary when it comes to the prod server. We only need nodemon when it comes to development. 

How will a client send a request?

→ The client will send a URL. What URL will they be using?
→ The http://localhost:9000/aliens

If it a get request,

GET : http://localhost:9000/aliens

that means, I have to get back ALL the aliens present within the database.

Now, what if I don’t want ALL aliens, I only want it within a particular area?

GET : http://localhost:9000/aliens/<id>

Now, what if I want to send in some POST request?

POST : [http://localhost:9000/aliens](http://localhost:9000/aliens) [sending data from Client → Server]

When mentioning Patch & Delete, we have to mention the ID

PATCH : http://localhost:9000/aliens/<id>

DELETE : http://localhost:9000/aliens/<id>

Now, if we try to run this URL on POSTMAN, we will get back some error.

<ERROR CAME UP HERE WHEN TRYING TO SET UP MONGODB> 

[mongodb - .mongo' is not recognized as an internal or external command, operable program or batch file - Stack Overflow](https://stackoverflow.com/questions/51224959/mongo-is-not-recognized-as-an-internal-or-external-command-operable-program-o)

This was the error that came up. 

It was solved as well!

how do you connect mongoose?

```jsx
mongoose.connect(url);
```

Even after setting up your dependencies, if you try sending a GET request on POSTMAN, it will not work!

This is because your server is not ready to accept the client requests yet.

So, what do you do?

You’ve to build functions to accept your requests.

And for that, what do you need?

→ You need routers.

Once you have your routes and you server started, and then you send a GET request, you’ll be able to see that it has started to work.

Now, we don’t just want to send a request, we want to fetch data from our database. Now what?

## Working With Databases:

When working with databases, we need to make sure that we don’t send a normal request, we’ve to send an async request.

We have this concept of async await.

Therefore, the (req, res) in router will be a async request. so that it will not block your process.

Now, how do you fetch data?

We have the concept of MVC:

### MVC?

What is MVC? 

MVC = Model View Controller.

It separates the concerns we have for a website.

M - MODEL // SCHEMA

V - VIEW // UI

C - CONTROLLER // ROUTER

So, whatever routes we have, we have to create a separate model for it.

| RDBMS | MONGODB |
| --- | --- |
| Database | Database |
| Tables | Collections |
| Rows | Documents |
| Columns | Fields |

So, now that you’ve detailed your schema in your **model**, how do you get the handle of that schema?

```jsx
const Alien = require('../model/alien);
```

MAKE SURE TO EXPORT ALL REQUIRED MODULES.

How do we add data to the alienSchema?

→ You can do that by using the POST request.
