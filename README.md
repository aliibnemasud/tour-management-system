# tour-management-system is a back-end node js application made my mongoose with MVC pattern

API LINK [Here](https://tour-management-system-beige.vercel.app)

## You can use this endpoints to check my api

* GET /tours
Get all the tours
The client can select some specific fields for getting the information he needs as query. 
Example: /tours?fields=name,image
Must be paginated.
The client can send a field (e.g. price) as query to sort the data with it.
Example: /tours?sort=price

* POST /tours
Add a tour

* GET /tours/:id

Get a tour details by id
Send all the information of the tour
Increase the view count by 1 for this tour every time a user hits this endpoint.

PATCH /tour/:id
Update a tour

* GET /tour/trending
Get top 3 viewed tour
* GET /tour/cheapest
Get top 3 cheapest tours
