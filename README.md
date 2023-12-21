# Routes:

## Root route: api/v1

### health route: /health --> response: "Api is working"
### authentication route: /auth
  #### signup: api/v1/auth/signup [POST]
  #### login: api/v1/auth/login [POST]
  #### getAllUsers: api/v1/auth/allUsers [GET]
### products route: /products
  #### get all the available products: api/v1/products [GET]
  #### add new products to the db: api/v1/products [POST]
  #### update existing products: api/v1/products/:id [PUT]
  #### delete any products: api/v1/products/:id [DELETE]
### cart route: /cart
  #### get all the items in the user cart: api/v1/cart/all [GET]
  #### add new item to the cart: api/v1/cart/add/:id [POST]
  #### delete item from the cart: api/v1/cart/remove/:id [DELETE]
