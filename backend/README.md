# HackerNoon Sample Backend

This is the backend of the sample web application.

## API

- `GET /api/v1/reactions` - get reactions for all posts (paged)
- `POST /api/v1/reactions` - create reactions for a new post
- `GET /api/v1/reactions/<id>` - get reactions for a specific post
- `PUT /api/v1/reactions/<id>` - update reactions for a specific post
- `DELETE /api/v1/reactions/<id>` - remove reactions for a specific post

This service use an H2 in-memory database.

## Source Code

This app is a Java Spring Boot microservice with a full set of CRUD
operations for reactions to HackerNoon posts.
Due to the small number of classes there is only one package.

The main entry point is
[HackerNoonApplication](./src/main/java/it/rafftre/hackernoon/HackerNoonApplication.java).

There is one entity
[Reactions](./src/main/java/it/rafftre/hackernoon/Reactions.java)
with related repository, service and controller classes.
