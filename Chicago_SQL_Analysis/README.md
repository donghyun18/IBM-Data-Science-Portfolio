# Chicago Crime Data SQL Analysis

This project provides a structured SQL-based analysis of Chicago's crime, census, and public school datasets.

The project is divided into two parts:
1. **Data Loading and Preparation**  
   - Loads crime, census, and school datasets into an SQLite database  
   - Organizes data for SQL querying  

2. **SQL-Based Data Analysis**  
   - Executes 10 SQL queries to extract insights on:  
     ✔ Total crimes recorded  
     ✔ Low-income community areas  
     ✔ Crimes involving minors and child abductions  
     ✔ School-related crime types  
     ✔ Community areas with high hardship and poverty rates  
     ✔ Community with most crimes  

## Technologies Used
- Python
- Pandas
- SQLite3

## Data Source
- Chicago Crime, Census, and Public Schools datasets provided by IBM Coursera resources

## How to Run
- Launch `Chicago_SQL_Analysis.ipynb` in Jupyter Notebook  
- Ensure `ChicagoCensusData.csv`, `ChicagoCrimeData.csv`, and `ChicagoPublicSchools.csv` are present in the same directory  
- Run all cells to load data into SQLite and execute analysis

