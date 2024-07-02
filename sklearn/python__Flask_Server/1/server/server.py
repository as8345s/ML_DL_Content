from flask import Flask, request, jsonify

app = Flask(__name__)
@app.route('/my_function')
def my_function():
    """Test Function
    - This function just returns Hello. A test to see if the server and Flask work.
    """
    return "Hallo"






if __name__ =="__main__":
    print("Starting server")

    app.run()