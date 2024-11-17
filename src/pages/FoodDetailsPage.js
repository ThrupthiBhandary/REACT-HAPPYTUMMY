import React from 'react';
import { useParams } from 'react-router-dom';

const CakeDetailsPage = () => {
  const { id } = useParams();

  return (
    <div>
      <h1>Cake Details for Cake ID: {id}</h1>
      <p>Here you can display detailed information about the cake.</p>
      {/* You can fetch specific details for each cake here */}
    </div>
  );
};

export default FoodDetailsPage;
