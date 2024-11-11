from sklearn.preprocessing import StandardScaler


def process_data(data):
    """
    Process the data by standardizing features.

    Parameters:
        data (DataFrame): Data to process.

    Returns:
        DataFrame: Processed data.
    """
    scaler = StandardScaler()
    processed_data = scaler.fit_transform(data)
    return processed_data
