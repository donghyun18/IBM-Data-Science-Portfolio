import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns

# Load data
URL = "https://cf-courses-data.s3.us.cloud-object-storage.appdomain.cloud/IBMDeveloperSkillsNetwork-DV0101EN-SkillsNetwork/Data%20Files/historical_automobile_sales.csv"
df = pd.read_csv(URL)

# --------- Line Plot of Average Automobile Sales per Year ---------
df_line = df.groupby('Year')['Automobile_Sales'].mean()
plt.figure(figsize=(10, 6))
df_line.plot(kind='line')
plt.xticks(list(range(1980, 2024)), rotation=75)
plt.xlabel('Year')
plt.ylabel('Average Automobile Sales')
plt.title('Average Automobile Sales Per Year')
plt.text(1982, 650, '1981-82 Recession')
plt.legend()
plt.savefig("Line_Plot_1.png")
plt.show()

# --------- Normalized Sales by Vehicle Type during Recession ---------
df_rec = df[df['Recession'] == 1]
df_Mline = df_rec.groupby(['Year', 'Vehicle_Type'], as_index=False)['Automobile_Sales'].mean()
df_Mline['Normalized_Sales'] = df_Mline.groupby('Vehicle_Type')['Automobile_Sales'].transform(lambda x: x / x.mean())
df_Mline.set_index('Year', inplace=True)

plt.figure(figsize=(12, 8))
for vehicle_type in df_Mline['Vehicle_Type'].unique():
    data = df_Mline[df_Mline['Vehicle_Type'] == vehicle_type]
    plt.plot(data.index, data['Normalized_Sales'], label=vehicle_type, marker='o')

for year in df_rec['Year'].unique():
    plt.axvline(x=year, color='gray', linestyle='--', alpha=0.5)

plt.legend(title="Vehicle Type", bbox_to_anchor=(1.05, 1), loc='upper left')
plt.ylabel("Normalized Sales")
plt.xlabel("Year")
plt.title("Normalized Sales by Vehicle Type During Recession")
plt.tight_layout()
plt.show()

# --------- Grouped Bar Chart for Recession vs Non-Recession ---------
dd = df.groupby(['Recession', 'Vehicle_Type'])['Automobile_Sales'].mean().reset_index()
plt.figure(figsize=(10, 6))
sns.barplot(x='Recession', y='Automobile_Sales', hue='Vehicle_Type', data=dd)
plt.xticks(ticks=[0, 1], labels=['Non-Recession', 'Recession'])
plt.xlabel('Economic Period')
plt.ylabel('Average Automobile Sales')
plt.title('Sales by Vehicle Type: Recession vs Non-Recession')
plt.show()

# --------- GDP Comparison Plot ---------
rec_data = df[df['Recession'] == 1]
non_rec_data = df[df['Recession'] == 0]

fig, (ax0, ax1) = plt.subplots(1, 2, figsize=(12, 6))
sns.lineplot(x='Year', y='GDP', data=rec_data, ax=ax0)
ax0.set_title('GDP during Recession')
ax0.set_xlabel('Year')
ax0.set_ylabel('GDP')

sns.lineplot(x='Year', y='GDP', data=non_rec_data, ax=ax1)
ax1.set_title('GDP during Non-Recession')
ax1.set_xlabel('Year')
ax1.set_ylabel('GDP')

plt.tight_layout()
plt.show()

# --------- Seasonality Effect (Bubble Chart) ---------
plt.figure(figsize=(10, 6))
sns.scatterplot(data=non_rec_data, x='Month', y='Automobile_Sales', size='Seasonality_Weight', legend=False)
plt.xlabel('Month')
plt.ylabel('Automobile Sales')
plt.title('Seasonality Impact on Automobile Sales')
plt.show()

# --------- Consumer Confidence vs Sales ---------
plt.figure(figsize=(8, 6))
plt.scatter(rec_data['Consumer_Confidence'], rec_data['Automobile_Sales'])
plt.xlabel('Consumer Confidence')
plt.ylabel('Automobile Sales')
plt.title('Sales vs Consumer Confidence (Recession)')
plt.show()

# --------- Pie Chart: Ad Spending in Recession vs Non-Recession ---------
Rdata = df[df['Recession'] == 1]
NRdata = df[df['Recession'] == 0]
RAtotal = Rdata['Advertising_Expenditure'].sum()
NRAtotal = NRdata['Advertising_Expenditure'].sum()

plt.figure(figsize=(8, 6))
plt.pie([RAtotal, NRAtotal], labels=['Recession', 'Non-Recession'], autopct='%1.1f%%', startangle=90)
plt.title('Advertising Expenditure: Recession vs Non-Recession')
plt.show()

# --------- Pie Chart: Ad Spend by Vehicle Type during Recession ---------
VTexpenditure = Rdata.groupby('Vehicle_Type')['Advertising_Expenditure'].sum()
plt.figure(figsize=(8, 6))
plt.pie(VTexpenditure.values, labels=VTexpenditure.index, autopct='%1.1f%%', startangle=90)
plt.title('Advertising by Vehicle Type (Recession)')
plt.show()

grouped = df[df['Recession'] == 1].groupby(['unemployment_rate', 'Vehicle_Type'])['Automobile_Sales'].mean().reset_index()
plt.figure(figsize=(12, 6))
for v in grouped['Vehicle_Type'].unique():
    subset = grouped[grouped['Vehicle_Type'] == v]
    plt.plot(subset['unemployment_rate'], subset['Automobile_Sales'], label=v)
plt.xlabel("Unemployment Rate")
plt.ylabel("Average Sales")
plt.title("Effect of Unemployment Rate on Vehicle Type Sales (Recession)")
plt.legend()
plt.savefig("Line_plot_3.png")
plt.show()
