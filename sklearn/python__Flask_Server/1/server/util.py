import json
import pickle
import sklearn

__model = None


def load_artifacts():
    """Load artifacts and other resources.
    Here we load the model.
    :return: None.
    """
    print("Load Model...")

    with open("./server/artefakte/churn_predict.pickle", 'rb') as f:
         global __model
         __model = pickle.load(f)
    print("Model loaded")
    return None


def make_prediction(X):
    """Predict outcome.
    This function takes columns/features that were used for training.
    Here we could perform various transformation before the model gets the data.
    :return: int
    """
    # ...
    load_artifacts()
    return float(__model.predict(X)[0])


if __name__ == '__main__':
    # Load model.
    #load_artifacts()
    # Test the predict function
    print("Make Prediction:")
    print(make_prediction( [ [0.39141414, 0.5, 0., 1.0, 0, 0.5, 0., 0, 1., 0.5627087] ] ) )