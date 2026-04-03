

const Country = ({country}) => {
    console.log(country);
    
  return (
    <div>
      <img src={country.flags.flags.png} alt="" />
      <h2>Country Name : {country.name.common}</h2>
      <h3>Population : {country.population.population} Peoples</h3>
    </div>
  );
};

export default Country;