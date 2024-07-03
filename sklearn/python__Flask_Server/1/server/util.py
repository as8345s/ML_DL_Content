import json
import pickle
import sklearn

__model = None


def load_artifacts():
    print("Lade Model...")

    with open("./artefakte/churn_predict.pickle", 'rb') as f:
         __model = pickle.load(f)
    print("Model geladen")



if __name__ == '__main__':
    load_artifacts()