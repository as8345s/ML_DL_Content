from flask import Flask, request, jsonify
import util

app = Flask(__name__)


# A route to a dir. Here: it's blank and we just print Hallo.
# - Can be used to test basic functionality.
# - After Start: localhost:port/my_function
@app.route('/my_function')
def my_function():
    """Test Function
    - This function just returns Hello. A test to see if the server and Flask work.
    """
    return "Hallo"


@app.route('/make_prediction', methods=['POST', 'GET'])
def predict():
    """Route to the site /make_prediction
    Here we collect the data that is needed for the model to make predictions.
    :return:
    """
    # Collect all data.
    # - Data can be checked for errors and so on.
    country     =   float(request.form['country'])
    gender      =   float(request.form['gender'])
    age         =   float(request.form['age'])
    products_number = float(request.form['products_number'])
    active_member   = float(request.form['active_member'])
    credit_card     = float(request.form['credit_card'])

    response = jsonify({
        'churn_prediction': util.make_prediction([[country, gender, age, \
                                                  products_number, credit_card, active_member]])
    })
    response.headers.add('Access-Control-Allow-Origin', '*')

    return response


if __name__ == "__main__":
    """Starting point of the server.
    """
    print("Starting server")

    app.run()