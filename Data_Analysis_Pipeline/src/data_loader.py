import pandas as pd


def load_data(file_path):
    """
    Load data from a CSV file.

    Parameters:
        file_path (str): Path to the CSV file.

    Returns:
        DataFrame: Loaded data.
    """
    return pd.read_csv(file_path)
