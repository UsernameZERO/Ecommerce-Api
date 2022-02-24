# ECOMMERCE API

The API helps CRUD Operations for Product Inventory.

It has details of products and their quantity.

To use this api, [Click Here](https://ecommerce-api-vamsi.herokuapp.com/).

## Run on local machine

To use this repository you should have following
installed in your machine

- node
- npm
- mongoDB
- git

Clone the project

```bash
  git clone https://github.com/UsernameZERO/Ecommerce-Api
```

Go to the project directory

```bash
  cd Ecommerce-Api/

```

Install Dependencies

```bash
npm install
```

- Make sure to start Mongodb, as it differ from system to system

Now run the application

```bash
npm start
```

# To Check Api

- I have used [PostmanApi](https://www.postman.com/postman/workspace/postman-public-workspace/documentation/12959542-c8142d51-e97c-46b6-bd77-52bb66712c9a).

## Folder Structure

```bash
ECOMMERCE API
├── configs
├── controllers
|    └──Api
|       └──v1
├── models
|── node_modules
├── routes
|    └──Api
|       └──v1
├── index.js
├── package-lock.json
├── package.json
└── readme.md
```

## Working with CRUD Operations in API

To create a product you can create in this way, use POST Method.

- AFTER_URL/api/products/create

To view the products in an api, use GET Method.

- AFTER_URL/api/products

To delete the product from api, you have to paste id of the product, with DELETE Method.

- AFTER_URL/api/products/:id

To update quantity of a product in an api, you have to enter a number o quantityyou have to update, use POST Method.

- AFTER_URL/api/products/:id/update_quantity/?
