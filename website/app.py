from Flask import Flask, render_template

app = Flask(__name__)

catalog = [
    {"id": 1, "name": "Cactus 1", "price": 10, "image": "1.png", "description": "Description for Cactus 1"},
    {"id": 2, "name": "Cactus 2", "price": 15, "image": "2.png", "description": "Description for Cactus 2"}
]

@app.route('/')
def index():
    return render_template('index.html', catalog=catalog)

@app.route('/cactus/<int:id>')
def cactus_details(id):
    cactus = next((c for c in catalog if c['id'] == id), None)
    if cactus:
        return f"Details for {cactus['name']}: {cactus['description']}, Price: ${cactus['price']}"
    return "Cactus not found"

if __name__ == '__main__':
    app.run(debug=True)