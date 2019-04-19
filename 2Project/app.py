from flask import Flask, render_template, url_for, jsonify
import pandas as pd

app = Flask(__name__)

@app.route('/')
def hello_world():
    return render_template("index.html")

@app.route('/get_data')
def get_data():
    data = pd.read_csv("static/data/spotify_data_lat_long_separated.csv")
    return(data.to_csv())

if __name__ == "__main__":
    app.run()