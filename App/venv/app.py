from flask import Flask, request
from firebase import firebase 

app = Flask(__name__)
firebase = firebase.FirebaseApplication('https://code4good-e67ab.firebaseio.com', None)

@app.route('/', methods=['GET', 'POST'])
def mainInfoFunc():
    firebase.post('/films', new_user)

if __name__ == "__main__":
    app.run(debug=True)

