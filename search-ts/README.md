### Express Server

We will be having the express server.

### Postgresql

We are using the postgresql in application. We are using the sequalize.

```
docker compose up -d
```

We will add mock present in the docker folder i.e. MOCK_DATA.csv

### API

We currently creating two api to for searching.

- Search By Name
  GET /users/searchName?search=searchTerm

- Search By Name, Account Number, Phone Number
  GET /users/search?search=searchTerm

### Reference

- https://expressjs.com/
- https://www.postgresql.org/docs/16/textsearch.html
- https://www.bezkoder.com/typescript-orm-postgres/
