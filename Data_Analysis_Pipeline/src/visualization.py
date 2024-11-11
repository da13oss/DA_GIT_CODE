import matplotlib.pyplot as plt


def plot_data(data):
    """
    Plot the data using Matplotlib.

    Parameters:
        data (DataFrame): Data to plot.
    """
    plt.plot(data)
    plt.xlabel("X-axis")
    plt.ylabel("Y-axis")
    plt.title("Sample Data Plot")
    plt.show()
