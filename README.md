Product Backend This is a simple backend project made on NodeJS for
e-commerce website.

All Available Routes:

Root Route: /api/v1 Health Route: /health \[GET\] Description: Check the
health of the API. Response: \"Api is working\".

Authentication Route: /auth Signup: /auth/signup \[POST\] Description:
Create a new user account. Request Body: { \"username\":
\"your_username\", \"email\": \"your_email@example.com\" \"password\":
\"your_password\", } Response: send response if signup is successful or
not.

Login: /auth/login \[POST\] Description: Authenticate and obtain a token
for accessing protected routes. Request Body: { \"email\":
\"your_email@example.com\" \"password\": \"your_password\" } Response:
Token if login is successful.

Get All Users: /auth/allUsers \[GET\] Description: Retrieve a list of
all users (Admin access required). Headers: Authorization token.
Response: Give the list of all registered users.

Products Route: /products

Get All Products: /products \[GET\] Description: Retrieve a list of all
available products. Response: List of products.

Add New Product: /products \[POST\] Description: Add a new product to
the database. Request Body: { \"name\": \"product_name\",
\"description\": \"product_description\" \"price\": 19.99, } Response:
Details of the added product.

Update Existing Product: /products/:id \[PUT\] Description: Update an
existing product by ID. Request Body: { \"name\": \"new_product_name\",
\"description\": \"new_product_description\" \"price\": 24.99, }
Response: Details of the updated product.

Delete Product: /products/:id \[DELETE\] Description: Delete a product
by ID. Response: Success message.

Cart Route: /cart

Get All Cart Items: /cart/all \[GET\] Description: Retrieve all items in
the user\'s cart. Headers: Authorization token.

Add Item to Cart: /cart/add/:productId \[POST\] Description: Add a new
item to the user\'s cart by product ID. Headers: Authorization token.
Response: Details of the added item.

Remove Item from Cart: /cart/remove/:id \[DELETE\] Description: Remove
an item from the user\'s cart by product ID. Headers: Authorization
token. Response: Success message.

Setup Clone the repository: git clone
https://github.com/ShafiulSumon/product-backend.git Install
dependencies: npm install Start the server: npm start
