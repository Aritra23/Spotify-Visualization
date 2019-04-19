import plotly.plotly as py
from plotly.graph_objs import *
function buildPlot(){
trace1 = {
  "x": ["Global", "USA", "Great Britain", "Mexico", "Taiwan", "Singapore"], 
  "y": [2.54, 1.45, 2.47, 1.75, 2.11, 2.7], 
  "name": "Shape of You", 
  "type": "bar", 
  "uid": "d81641", 
  "visible": True, 
  "xsrc": "sweetmusicality:7:ff97bb", 
  "ysrc": "sweetmusicality:7:593809"
}
trace2 = {
  "x": ["Global", "USA", "Great Britain", "Mexico", "Taiwan", "Singapore"], 
  "y": [1.48, 0, 1.4, 0, 0, 1.48], 
  "name": "Despacito - Remix", 
  "type": "bar", 
  "uid": "c15c84", 
  "visible": True, 
  "xsrc": "sweetmusicality:7:ff97bb", 
  "ysrc": "sweetmusicality:7:724a8c"
}
trace3 = {
  "x": ["Global", "USA", "Great Britain", "Mexico", "Taiwan", "Singapore"], 
  "y": [0, 0, 0, 0, 1.97, 1.78], 
  "name": "Something Just Like This", 
  "type": "bar", 
  "uid": "1dbc1b", 
  "xsrc": "sweetmusicality:7:ff97bb", 
  "ysrc": "sweetmusicality:7:31cdb8"
}
trace4 = {
  "x": ["Global", "USA", "Great Britain", "Mexico", "Taiwan", "Singapore"], 
  "y": [1.3, 0, 0, 2.22, 0, 0], 
  "name": "Despacito (Featuring Daddy Yankee)", 
  "type": "bar", 
  "uid": "c6b042", 
  "xsrc": "sweetmusicality:7:ff97bb", 
  "ysrc": "sweetmusicality:7:4583e2"
}
trace5 = {
  "x": ["Global", "USA", "Great Britain", "Mexico", "Taiwan", "Singapore"], 
  "y": [0, 0, 0, 2.16, 0, 0], 
  "name": "Me Rehúso", 
  "type": "bar", 
  "uid": "be7d95", 
  "xsrc": "sweetmusicality:7:ff97bb", 
  "ysrc": "sweetmusicality:7:b9ea50"
}
trace6 = {
  "x": ["Global", "USA", "Great Britain", "Mexico", "Taiwan", "Singapore"], 
  "y": [0, 1.2, 0, 0, 0, 0], 
  "name": "Mask Off", 
  "type": "bar", 
  "uid": "60d6b8", 
  "xsrc": "sweetmusicality:7:ff97bb", 
  "ysrc": "sweetmusicality:7:989da6"
}
trace7 = {
  "x": ["Global", "USA", "Great Britain", "Mexico", "Taiwan", "Singapore"], 
  "y": [0, 0, 0, 0, 1.23, 0], 
  "name": "演員", 
  "type": "bar", 
  "uid": "f912b1", 
  "xsrc": "sweetmusicality:7:ff97bb", 
  "ysrc": "sweetmusicality:7:cd61ac"
}
trace8 = {
  "x": ["Global", "USA", "Great Britain", "Mexico", "Taiwan", "Singapore"], 
  "y": [0, 0, 1.67, 0, 0, 0], 
  "name": "Castle on the Hill", 
  "type": "bar", 
  "uid": "c01a7b", 
  "xsrc": "sweetmusicality:7:ff97bb", 
  "ysrc": "sweetmusicality:7:083ede"
}
trace9 = {
  "x": ["Global", "USA", "Great Britain", "Mexico", "Taiwan", "Singapore"], 
  "y": [0, 1.51, 0, 0, 0, 0], 
  "name": "HUMBLE.", 
  "type": "bar", 
  "uid": "d9ea4a", 
  "xsrc": "sweetmusicality:7:ff97bb", 
  "ysrc": "sweetmusicality:7:1008dc"
}

//assign the data and create the layout for the barplot
data = [trace1, trace2, trace3, trace4, trace5, trace6, trace7, trace8, trace9]
layout = {
  "annotations": [
    {
      "x": 1.09648221896, 
      "y": 0.671878877124, 
      "font": {"size": 21}, 
      "showarrow": False, 
      "text": "<b>Song</b>", 
      "xanchor": "middle", 
      "xref": "paper", 
      "yanchor": "bottom", 
      "yref": "paper"
    }
  ], 
  "autosize": True, 
  "barmode": "stack", 
  "font": {"size": 18}, 
  "hovermode": "closest", 
  "legend": {
    "x": 1.01935845381, 
    "y": 0.673239347844, 
    "borderwidth": 0, 
    "orientation": "v", 
    "traceorder": "normal"
  }, 
  "margin": {"b": 80}, 
  "title": "<b>Top 3 Streamed Songs on Spotify from Jan 2017 - Aug 2017 by Country</b>", 
  "titlefont": {"size": 28}, 
  "xaxis": {
    "autorange": False, 
    "domain": [0, 1.01], 
    "range": [-0.5, 5.51343670089], 
    "side": "bottom", 
    "title": "<b>Country</b>", 
    "type": "category"
  }, 
  "yaxis": {
    "anchor": "x", 
    "autorange": False, 
    "domain": [-0.01, 1], 
    "range": [0, 6.66421250763], 
    "title": "<b>% this song was streamed in its country</b>", 
    "type": "linear"
  }
}


fig = go.Figure(data = data, layout = layout)
py.iplot(fig)
}