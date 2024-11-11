from pyspark.sql import SparkSession
from src.data_loader import load_data
from src.data_processor import process_data
from src.visualization import plot_data


def main():
    # Create Spark session
    spark = SparkSession.builder.appName("Data Analysis Pipeline").getOrCreate()

    # Load data
    data = load_data("data/sample_data.csv")

    # Convert DataFrame to Spark DataFrame
    spark_df = spark.createDataFrame(data)

    # Process data
    processed_data = process_data(spark_df)

    # Visualize data
    plot_data(processed_data)

    # Stop Spark session
    spark.stop()


if __name__ == "__main__":
    main()
