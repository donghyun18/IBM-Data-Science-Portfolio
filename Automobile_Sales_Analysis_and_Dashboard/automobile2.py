from dash import Dash, html, dcc, Input, Output
import pandas as pd
import plotly.express as px

# Load data
data_url = "https://cf-courses-data.s3.us.cloud-object-storage.appdomain.cloud/IBMDeveloperSkillsNetwork-DV0101EN-SkillsNetwork/Data%20Files/historical_automobile_sales.csv"
data = pd.read_csv(data_url)
year_list = sorted(data['Year'].dropna().unique().tolist())

# Initialize the app
app = Dash(__name__)

# Set up layout
app.layout = html.Div([
    html.H1("Automobile Sales Data Dashboard"),
    
    dcc.Dropdown(
        id='dropdown-statistics',
        options=[
            {'label': 'Recession Period Statistics', 'value': 'Recession Period Statistics'},
            {'label': 'Yearly Statistics', 'value': 'Yearly Statistics'}
        ],
        placeholder='Select a Report Type'
    ),
    
    dcc.Dropdown(
        id='select-year',
        options=[{'label': str(i), 'value': i} for i in year_list],
        placeholder='Select Year',
        style={'width': '50%'}
    ),

    html.Div(id='output-container', className='chart-grid', style={'display': 'flex', 'flexDirection': 'column'})
])

# Enable or disable year selection based on report type
@app.callback(
    Output('select-year', 'disabled'),
    Input('dropdown-statistics', 'value')
)
def update_input_container(selected_report):
    return False if selected_report == 'Yearly Statistics' else True

# Render visualizations based on selection
@app.callback(
    Output('output-container', 'children'),
    [Input('dropdown-statistics', 'value'),
     Input('select-year', 'value')]
)
def update_output_container(selected_statistics, input_year):
    if selected_statistics == 'Recession Period Statistics':
        recession_data = data[data['Recession'] == 1]

        # Average sales during recession by year
        yearly_rec = recession_data.groupby('Year')['Automobile_Sales'].mean().reset_index()
        R_chart1 = dcc.Graph(figure=px.line(yearly_rec, x='Year', y='Automobile_Sales', title="Yearly Automobile Sales During Recession"))

        # Average sales during recession by vehicle type
        average_sales = recession_data.groupby('Vehicle_Type')['Automobile_Sales'].mean().reset_index()
        R_chart2 = dcc.Graph(figure=px.bar(average_sales, x='Vehicle_Type', y='Automobile_Sales', title="Average Vehicle Sales During Recession"))

        # Advertising expenditure pie chart during recession
        exp_rec = recession_data.groupby('Vehicle_Type')['Advertising_Expenditure'].sum().reset_index()
        R_chart3 = dcc.Graph(figure=px.pie(exp_rec, values='Advertising_Expenditure', names='Vehicle_Type', title="Ad Expenditure by Vehicle Type"))

        # Effect of unemployment rate on vehicle sales during recession
        unemp_data = recession_data.groupby(['unemployment_rate', 'Vehicle_Type'])['Automobile_Sales'].mean().reset_index()
        R_chart4 = dcc.Graph(
            figure=px.bar(unemp_data, x='unemployment_rate', y='Automobile_Sales', color='Vehicle_Type',
                          labels={'unemployment_rate': 'Unemployment Rate', 'Automobile_Sales': 'Avg Sales'},
                          title='Unemployment Rate vs Vehicle Sales')
        )

        return [
            html.Div(className='chart-item', children=[R_chart1, R_chart2], style={'display': 'flex'}),
            html.Div(className='chart-item', children=[R_chart3, R_chart4], style={'display': 'flex'})
        ]

    elif input_year and selected_statistics == 'Yearly Statistics':
        yearly_data = data[data['Year'] == input_year]

        # Average annual automobile sales trend
        df_line = data.groupby('Year')['Automobile_Sales'].mean().reset_index()
        Y_chart1 = dcc.Graph(figure=px.line(df_line, x='Year', y='Automobile_Sales', title='Average Automobile Sales Per Year'))

        # Total monthly sales
        mas = data.groupby('Month')['Automobile_Sales'].sum().reset_index()
        Y_chart2 = dcc.Graph(figure=px.line(mas, x='Month', y='Automobile_Sales', title='Total Monthly Automobile Sales'))

        # Average sales by vehicle type for the selected year
        avr_vdata = yearly_data.groupby('Vehicle_Type')['Automobile_Sales'].mean().reset_index()
        Y_chart3 = dcc.Graph(
            figure=px.bar(avr_vdata, x='Vehicle_Type', y='Automobile_Sales',
                          title=f'Average Vehicles Sold by Type in {input_year}')
        )

        # Advertising expenditure by vehicle type for the selected year
        exp_data = yearly_data.groupby('Vehicle_Type')['Advertising_Expenditure'].sum().reset_index()
        Y_chart4 = dcc.Graph(
            figure=px.pie(exp_data, values='Advertising_Expenditure', names='Vehicle_Type',
                          title=f'Ad Expenditure by Vehicle Type in {input_year}')
        )

        return [
            html.Div(className='chart-item', children=[Y_chart1, Y_chart2], style={'display': 'flex'}),
            html.Div(className='chart-item', children=[Y_chart3, Y_chart4], style={'display': 'flex'})
        ]

# Run the app
if __name__ == '__main__':
    app.run(debug=True)
