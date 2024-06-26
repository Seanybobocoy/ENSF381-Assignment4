from flask import Flask, request, jsonify, redirect, url_for, session
app = Flask(__name__)

users = []

@app.route('/register', methods=['POST'])
def register():
    data = request.json  # Get data from POST request
    username = data.get('username')
    password = data.get('password')
    email = data.get('email')

    # Check if the username already exists
    for user in users:
        if user['username'] == username:
            return jsonify({'error': 'Username already exists'}), 400

    # Add the new user to the users list
    users.append({
        'username': username,
        'password': password,
        'email': email
    })

    return jsonify({'message': 'User registered successfully'}), 201

@app.route('/login', methods=['POST'])
def login():
    data = request.json  # Get data from POST request
    username = data.get('username')
    password = data.get('password')

    # Validate credentials
    for user in users:
        if user['username'] == username and user['password'] == password:
            session['user'] = username  # Store the username in session
            return jsonify({'message': 'Login successful'}), 200

    return jsonify({'error': 'Invalid username or password'}), 401

# Placeholder for product page route
@app.route('/product')
def product_page():
    return "Welcome to the Product Page!"

@app.route('/products', methods=['GET'])
def get_products():
    if 'user' not in session:
        return jsonify({'error': 'Unauthorized'}), 401
    return jsonify(products)

@app.route('/logout', methods=['GET'])
def logout():
    session.pop('user', None)  # Remove 'user' from session
    return jsonify({'message': 'Logged out successfully'}), 200

products = [
 {
 "id": 1,
 "name": "Product 1",
 "description": "Description for Product 1",
 "price": 10.99,
 "image": 'images/product1.png'
 },
 {
 "id": 2,
 "name": "Product 2",
 "description": "Description for Product 2",
 "price": 20.99,
 "image": 'images/product2.jpg'
 },
 {
 "id": 3,
 "name": "Product 3",
 "description": "Description for Product 3",
 "price": 10.99,
 "image": 'images/product3.jpg'
 },
 {
 "id": 4,
 "name": "Product 4",
 "description": "Description for Product 4",
 "price": 10.99,
 "image": 'images/product4.jpg'
 },
 {
 "id": 5,
 "name": "Product 5",
 "description": "Description for Product 5",
 "price": 10.99,
 "image": 'images/product5.jpg'
 },
 {
 "id": 6,
 "name": "Product 6",
 "description": "Description for Product 6",
 "price": 10.99,
 "image": 'images/product6.jpg'
 },
 {
 "id": 7,
 "name": "Product 7",
 "description": "Description for Product 7",
 "price": 10.99,
 "image": 'images/product7.jpg'
 },
 {
 "id": 8,
 "name": "Product 8",
 "description": "Description for Product 8",
 "price": 10.99,
 "image": 'images/product8.jpg'
 },
 {
 "id": 9,
 "name": "Product 9",
 "description": "Description for Product 9",
 "price": 10.99,
 "image": 'images/product9.jpg'
 },
 {
 "id": 10,
 "name": "Product 10",
 "description": "Description for Product 10",
 "price": 10.99,
 "image": 'images/product10.jpg'
 }
]

if __name__ == '__main__':
    app.run(debug=True)