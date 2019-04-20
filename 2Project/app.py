from flask import Flask, render_template, url_for, jsonify
import pandas as pd

app = Flask(__name__)

@app.route('/')
def hello_world():
    return render_template("index.html")

@app.route('/get_data')
def get_data():
    data = pd.read_csv("static/data/Most_popular_songs_per_region.csv")
    return(data.to_csv())

@app.route('/get_selected_data')
def get_selected_data():
    data = pd.read_csv("static/data/Most_popular_artist_per_region.csv")
    return(data.to_csv()) 

@app.route('/table')
def table_data():
    return render_template('tables.html')

@app.route('/tech')
def tech_data():
    return render_template('Tech.html')

@app.route('/maps')
def map_plots():
    return render_template('Maps.html')

if __name__ == "__main__":
    app.run()