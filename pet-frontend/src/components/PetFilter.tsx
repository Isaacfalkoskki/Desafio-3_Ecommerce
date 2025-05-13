import React, { useState, useEffect } from 'react';

interface PetFilterProps {
  onFilterChange: (filters: {
    gender: string[];
    size: string[];
    vaccinated: string[];
    color: string[];
    price: { min: string; max: string };
  }) => void;
}

const colors = [
  { label: 'Red', value: 'red', hex: '#F44336' },
  { label: 'Apricot', value: 'apricot', hex: '#FFCC99' },
  { label: 'Black', value: 'black', hex: '#000000' },
  { label: 'Black & White', value: 'black_white', hex: 'linear-gradient(to right, black 50%, white 50%)' },
  { label: 'Silver', value: 'silver', hex: '#C0C0C0' },
  { label: 'Tan', value: 'tan', hex: '#FAF0A6' },
];

const priceOptions = ['100', '200', '300', '400', '500'];

function PetFilter({ onFilterChange }: PetFilterProps) {
  const [filters, setFilters] = useState({
    gender: [] as string[],
    size: [] as string[],
    vaccinated: [] as string[],
    color: [] as string[],
    price: { min: '', max: '' },
  });

  const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>, name: string) => {
    const { value } = e.target;
    setFilters((prev) => ({
      ...prev,
      [name]: [value],
    }));
  };

  const handleColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;
    setFilters((prev) => ({
      ...prev,
      color: checked
        ? [...prev.color, value]
        : prev.color.filter((c) => c !== value),
    }));
  };

  const handlePriceChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFilters((prev) => ({
      ...prev,
      price: {
        ...prev.price,
        [name]: value,
      },
    }));
  };

  const resetFilters = () => {
    setFilters({
      gender: [],
      size: [],
      vaccinated: [],
      color: [],
      price: { min: '', max: '' },
    });
  };

  useEffect(() => {
    onFilterChange(filters);
  }, [filters, onFilterChange]);

  return (

    <div style={{ 
      width: '250px', 
      display: 'flex', 
      flexDirection: 'column', 
      gap: '20px' 
      }}>

      <h3 style={{ 
        fontSize: '20px', 
        fontWeight: '700', 
        color: '#003459' }}>Filter</h3>

      <div>

        <p style={{ 
          fontSize: '16px', 
          fontWeight: '700', 
          color: '#00171F', 
          paddingBottom: '10px' }}>Gender</p>

        <div style={{ 
          display: 'flex', 
          gap: '10px' 
          }}>

          <label>

            <input
              type="radio"
              name="gender"
              value="FEMALE"
              checked={filters.gender.includes('FEMALE')}
              onChange={(e) => handleRadioChange(e, 'gender')}
              style={{ 
                display: 'none' 
              }}/>

            <button
              type="button"
              onClick={() => handleRadioChange({ target: { value: 'FEMALE' } } as React.ChangeEvent<HTMLInputElement>, 'gender')}
              style={{
                backgroundColor: filters.gender.includes('FEMALE') ? '#007BFF' : '#fff',
                color: filters.gender.includes('FEMALE') ? '#fff' : '#000',
                padding: '8px 16px',
                border: '1px solid #ccc',
                borderRadius: '5px', cursor: "pointer" }}>Female </button>

          </label>

          <label>

            <input
              type="radio"
              name="gender"
              value="MALE"
              checked={filters.gender.includes('MALE')}
              onChange={(e) => handleRadioChange(e, 'gender')}
              style={{ 
                display: 'none' 
                }}/>

            <button
              type="button"
              onClick={() => handleRadioChange({ target: { value: 'MALE' } } as React.ChangeEvent<HTMLInputElement>, 'gender')}
              style={{
                backgroundColor: filters.gender.includes('MALE') ? '#007BFF' : '#fff',
                color: filters.gender.includes('MALE') ? '#fff' : '#000',
                padding: '8px 16px',
                border: '1px solid #ccc',
                borderRadius: '5px', 
                cursor: "pointer" }}>Male </button>

          </label>

        </div>

      </div>

      <div>

        <p style={{ 
          fontSize: '16px', 
          fontWeight: '700', 
          color: '#00171F', 
          paddingBottom: '10px' }}>Color</p>

        <ul style={{ 
          listStyle: 'none', 
          padding: 0 
          }}>

          {colors.map((color) => (
            <li key={color.value} style={{ display: 'flex', alignItems: 'center', marginBottom: '8px' }}>
              <input
                type="checkbox"
                value={color.value}
                checked={filters.color.includes(color.value)}
                onChange={handleColorChange} />

              <span
                style={{
                  width: '14px',
                  height: '14px',
                  borderRadius: '50%',
                  background: color.hex.includes('linear') ? undefined : color.hex,
                  backgroundImage: color.hex.includes('linear') ? color.hex : undefined,
                  marginLeft: '8px',
                  marginRight: '8px',
                  border: '1px solid #ccc',
                  }}></span>{' '} {color.label}

            </li>

          ))}

        </ul>

      </div>

      <div>

        <p style={{ 
          fontSize: '16px', 
          fontWeight: '700', 
          color: '#00171F', 
          paddingBottom: '10px' }}>Price</p>

        <div style={{ 
          display: 'flex', 
          gap: '10px' 
          }}>

          <select name="min" value={filters.price.min} onChange={handlePriceChange} style={{ flex: 1 }}>

            <option value="">Min</option>

            {priceOptions.map((price) => (
              <option key={price} value={price}>
                ${price}

              </option>

            ))}

          </select>

          <select name="max" value={filters.price.max} onChange={handlePriceChange} style={{ flex: 1 }}>

            <option value="">Max</option>

            {priceOptions.map((price) => (
              <option key={price} value={price}>
                ${price}

              </option>

            ))}

          </select>

        </div>

      </div>

      <div>

        <p style={{ 
          fontSize: '16px', 
          fontWeight: '700', 
          color: '#00171F', 
          paddingBottom: '10px' }}>Size</p>

        <div style={{ 
          display: 'flex', 
          gap: '10px' 
          }}>

          <label>

            <input
              type="radio"
              name="size"
              value="SMALL"
              checked={filters.size.includes('SMALL')}
              onChange={(e) => handleRadioChange(e, 'size')}
              style={{ 
                display: 'none' 
                }}/>

            <button
              type="button"
              onClick={() => handleRadioChange({ target: { value: 'SMALL' } } as React.ChangeEvent<HTMLInputElement>, 'size')}
              style={{
                backgroundColor: filters.size.includes('SMALL') ? '#007BFF' : '#fff',
                color: filters.size.includes('SMALL') ? '#fff' : '#000',
                padding: '8px 16px',
                border: '1px solid #ccc',
                borderRadius: '5px', cursor: "pointer"}}>Small</button>

          </label>

          <label>

            <input
              type="radio"
              name="size"
              value="MEDIUM"
              checked={filters.size.includes('MEDIUM')}
              onChange={(e) => handleRadioChange(e, 'size')}
              style={{ 
                display: 'none' 
                }}/>

            <button
              type="button"
              onClick={() => handleRadioChange({ target: { value: 'MEDIUM' } } as React.ChangeEvent<HTMLInputElement>, 'size')}
              style={{
                backgroundColor: filters.size.includes('MEDIUM') ? '#007BFF' : '#fff',
                color: filters.size.includes('MEDIUM') ? '#fff' : '#000',
                padding: '8px 16px',
                border: '1px solid #ccc',
                borderRadius: '5px', cursor: "pointer" }}>Medium</button>
          </label>

          <label>

            <input
              type="radio"
              name="size"
              value="LARGE"
              checked={filters.size.includes('LARGE')}
              onChange={(e) => handleRadioChange(e, 'size')}
              style={{ 
                display: 'none' 
              }}/>
              
            <button
              type="button"
              onClick={() => handleRadioChange({ target: { value: 'LARGE' } } as React.ChangeEvent<HTMLInputElement>, 'size')}
              style={{
                backgroundColor: filters.size.includes('LARGE') ? '#007BFF' : '#fff',
                color: filters.size.includes('LARGE') ? '#fff' : '#000',
                padding: '8px 16px',
                border: '1px solid #ccc',
                borderRadius: '5px', 
                cursor: "pointer" }}>Large</button>

          </label>

        </div>

      </div>

      <div>

        <p style={{ 
          fontSize: '16px', 
          fontWeight: '700', 
          color: '#00171F', 
          paddingBottom: '10px' }}>Vaccinated</p>

        <label>

          <input
            type="radio"
            name="vaccinated"
            value="true"
            checked={filters.vaccinated.includes('true')}
            onChange={(e) => handleRadioChange(e, 'vaccinated')}
            style={{ display: 'none' 
            }} />

          <button
            type="button"
            onClick={() => handleRadioChange({ target: { value: 'true' } } as React.ChangeEvent<HTMLInputElement>, 'vaccinated')}
            style={{
              backgroundColor: filters.vaccinated.includes('true') ? '#007BFF' : '#fff',
              color: filters.vaccinated.includes('true') ? '#fff' : '#000',
              padding: '8px 16px',
              border: '1px solid #ccc',
              borderRadius: '5px', 
              cursor: "pointer" }}> Vaccinated </button>

        </label>

        <label>

          <input
            type="radio"
            name="vaccinated"
            value="false"
            checked={filters.vaccinated.includes('false')}
            onChange={(e) => handleRadioChange(e, 'vaccinated')}
            style={{ display: 'none' 
            }}/>

          <button
            type="button"
            onClick={() => handleRadioChange({ target: { value: 'false' } } as React.ChangeEvent<HTMLInputElement>, 'vaccinated')}
            style={{
              backgroundColor: filters.vaccinated.includes('false') ? '#007BFF' : '#fff',
              color: filters.vaccinated.includes('false') ? '#fff' : '#000',
              padding: '8px 16px',
              border: '1px solid #ccc',
              borderRadius: '5px', 
              cursor: "pointer"
              }}>Not Vaccinated </button>

        </label>

      </div>

      <div>
        <button
          type="button"
          onClick={resetFilters}
          style={{
            padding: '10px 20px',
            backgroundColor: '#FF5722',
            color: '#fff',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            fontWeight: 'bold',
            }}>Reset Filters</button>

      </div>

    </div>

  )

}

export default PetFilter;