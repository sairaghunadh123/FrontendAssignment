import React, { useState, useEffect } from 'react';
import { Card, CardContent, Typography, CircularProgress } from '@mui/material';
import './App.css';

const CryptoCard = ({ title, price }) => {
  return (
    <Card className="card" style={{ maxWidth: 300, padding: '1rem' }}>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          {title}
        </Typography>
        <Typography variant="body1">
          {price}
        </Typography>
      </CardContent>
    </Card>
  );
};

const App = () => {
  const [bitcoinPrices, setBitcoinPrices] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://api.coindesk.com/v1/bpi/currentprice.json');
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        setBitcoinPrices(data.bpi);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="body">
      <div className="container">
        <h1 className="title">Cryptocurrency Prices</h1>
        {loading ? (
          <CircularProgress />
        ) : (
          <div className="cards-section">
            <div className="card-container">
              {bitcoinPrices && (
                <>
                  <CryptoCard title="Bitcoin (USD)" price={bitcoinPrices.USD.rate} />
                  <CryptoCard title="Bitcoin (EUR)" price={bitcoinPrices.EUR.rate} />
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
