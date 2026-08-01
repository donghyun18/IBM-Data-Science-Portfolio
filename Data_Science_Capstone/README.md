# IBM Data Science Capstone

# 🚀 Applied Data Science Capstone Project

## Overview

This capstone project aims to develop a machine learning solution that predicts whether the Falcon 9 first-stage booster will land successfully.

Since SpaceX significantly reduces launch costs by reusing its rocket boosters, accurately predicting landing success provides valuable insights into launch cost estimation and competitive analysis.

This project follows the complete data science workflow, including data collection, preprocessing, visualization, feature engineering, and machine learning model development.

---

## Objectives

The project is organized into seven major stages, each contributing to the development of a reliable prediction model.

---

## 1. SpaceX API Integration and Data Preparation

- **Launch Data Collection**
  - Retrieved Falcon 9 launch records using the official SpaceX API.

- **Data Preprocessing**
  - Cleaned, formatted, and organized the collected data to ensure consistency and prepare it for further analysis.

---

## 2. Web Scraping Launch Information

- **Wikipedia Data Extraction**
  - Collected additional launch information from Wikipedia using BeautifulSoup.

- **HTML Processing**
  - Converted the extracted tables into structured Pandas DataFrames for further analysis.

---

## 3. Exploratory Data Analysis (EDA)

- **Data Exploration**
  - Investigated relationships between launch variables through statistical analysis and visualization.

- **Training Label Creation**
  - Generated the target variable required for machine learning classification.

---

## 4. Database Management with IBM Db2

- **Database Loading**
  - Imported the processed dataset into an IBM Db2 database.

- **SQL Analysis**
  - Executed SQL queries to analyze launch statistics and answer business-related questions.

---

## 5. Feature Engineering and Data Visualization

- **Feature Engineering**
  - Created new predictive features and encoded categorical variables.

- **Visualization**
  - Built interactive launch site maps using Folium to explore geographical patterns.

---

## 6. Interactive Dashboard Development

- **Dashboard Design**
  - Developed an interactive dashboard using Plotly Dash.

- **Interactive Components**
  - Added dropdown menus, sliders, and dynamic charts for user-friendly data exploration.

---

## 7. Machine Learning Modeling and Optimization

- **Data Preparation**
  - Standardized the dataset and divided it into training and testing sets.

- **Model Training**
  - Trained multiple classification algorithms, including:
    - Logistic Regression
    - Support Vector Machine (SVM)
    - K-Nearest Neighbors (KNN)
    - Decision Tree

- **Hyperparameter Optimization**
  - Improved model performance using GridSearchCV.

- **Model Evaluation**
  - Compared model performance and identified the best-performing algorithm.

---

# Results

| Model | Accuracy |
|-------|---------:|
| Decision Tree | **94.44%** |
| Support Vector Machine (SVM) | **83.33%** |
| K-Nearest Neighbors (KNN) | **83.33%** |

The Decision Tree classifier achieved the highest prediction accuracy and outperformed the other evaluated models.

---

# Conclusion

This project successfully demonstrated the complete data science pipeline, from data collection and preprocessing to machine learning model development and evaluation.

The results show that predictive analytics can effectively estimate Falcon 9 first-stage landing success, providing valuable insights for launch cost estimation and reusable rocket operations.

Future improvements may include incorporating additional mission-related variables and evaluating more advanced machine learning techniques to further enhance prediction performance.
