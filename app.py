from flask import Flask, render_template
import pymongo
import unidecode

app = Flask(__name__)

# setup mongo connection
conn = "mongodb://localhost:27017"
client = pymongo.MongoClient(conn)

# connect to mongo db and collection
db = client.spotify_db
collection = db.spotify_data


@app.route("/")
def index():
    # write a statement that finds all the items in the db and sets it to a variable
    spotify = list(collection.find())

    # render an index.html template and pass it the data you retrieved from the database
    return render_template("index.html", spotify=spotify)


if __name__ == "__main__":
    app.run(debug=True)
