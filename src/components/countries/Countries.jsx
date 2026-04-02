import React, { use } from 'react';

const Countries = ({countriesPromised}) => {

    const countriesData = use(countriesPromised);
    const countries = countriesData.countries;

    console.log(countries);
    
    return (
        <div >
            <h1>Counteries Data : {countries.length} </h1>
        </div>
    );
};

export default Countries;