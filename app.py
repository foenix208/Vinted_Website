from flask import Flask
from flask import render_template
from flask import request
from flask import jsonify

import random

from src.scraping import scrapping


app = Flask(__name__)


@app.route('/')
def index():
    if request.is_json:
        #print(scrapping())
        #return jsonify({"second":random.randint(0,10)}) 
        return jsonify(scrapping())
    
    return render_template('index.html')

if __name__ == '__main__':
    app.run()