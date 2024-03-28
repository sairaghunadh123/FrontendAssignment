import React, { useState, useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const PopulationGraph = () => {
    const [populationData, setPopulationData] = useState([]);

    useEffect(() => {
        // Fetch population data from the API
        const fetchData = async () => {
            try {
                const response = await fetch('https://datausa.io/api/data?drilldowns=Nation&measures=Population');
                const data = await response.json();

                // Assuming the population data is in data.data array
                // Extracting nation, population, and year from the response
                const formattedData = data.data.map(entry => ({
                    nation: entry.Nation,
                    population: entry.Population,
                    year: entry.Year
                }));

                setPopulationData(formattedData);
            } catch (error) {
                console.error('Error fetching population data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            <h2>Population Data</h2>
            <LineChart width={800} height={400} data={populationData}>
                <CartesianGrid stroke="#ccc" />
                <XAxis dataKey="year" />
                <YAxis />
                <Tooltip />
                <Legend />

                <Line type="monotone" dataKey="population" stroke="#8884d8" name="Population" />

                <Line type="monotone" dataKey="nation" stroke="#82ca9d" name="Nation" />
            </LineChart>
        </div>
    );
};

export default PopulationGraph;
