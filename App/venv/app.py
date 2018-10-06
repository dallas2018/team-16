from flask import Flask
from firebase import firebase 

app = Flask(__name__)

@app.route('/mainInfo')
def mainInfoFunc():
    return "<h1>Hello, world!</h1>"

if __name__ == "__main__":
    app.run(debug=True)

