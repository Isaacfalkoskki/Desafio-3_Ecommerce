import React, { useState } from 'react';

interface PetFilterProps {
  onFilterChange: (filters: { gender: string[]; size: string[]; vaccinated: string[] }) => void;
}

function PetFilter({ onFilterChange }: PetFilterProps) {
  const [filters, setFilters] = useState({
    gender: [] as string[],
    size: [] as string[],
    vaccinated: [] as string[],
  });

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, checked } = e.target;
    
    setFilters((prev) => ({
      ...prev,
      [name]: checked
        ? [...prev[name as keyof typeof prev], value]
        : prev[name as keyof typeof prev].filter((v) => v !== value),
    }));
  };

  const applyFilters = () => {
    onFilterChange(filters);
  };

  return (
    <div style={{ width: '250px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <h3 style={{ fontSize: '20px', fontWeight: '700', color: '#003459' }}>Filter</h3>

      <div>
        <p style={{
          fontSize: "16px",
          fontWeight: "700",
          color: "#00171F",
          paddingBottom: "10px"
        }}>Gender</p>
        <label>
          <input type="checkbox" name="gender" value="FEMALE" checked={filters.gender.includes("FEMALE")} onChange={handleCheckboxChange} /> Female <br />
        </label>
        <label>
          <input type="checkbox" name="gender" value="MALE" checked={filters.gender.includes("MALE")} onChange={handleCheckboxChange} /> Male
        </label>
      </div>

      <div>
        <p style={{
          fontSize: "16px",
          fontWeight: "700",
          color: "#00171F",
          paddingBottom: "10px"
        }}>Breed</p>
        <label>
          <input type="checkbox" name="size" value="SMALL" checked={filters.size.includes("SMALL")} onChange={handleCheckboxChange} /> Small <br />
        </label>
        <label>
          <input type="checkbox" name="size" value="MEDIUM" checked={filters.size.includes("MEDIUM")} onChange={handleCheckboxChange} /> Medium <br />
        </label>
        <label>
          <input type="checkbox" name="size" value="LARGE" checked={filters.size.includes("LARGE")} onChange={handleCheckboxChange} /> Large
        </label>
      </div>

      <div>
        <p style={{
          fontSize: "16px",
          fontWeight: "700",
          color: "#00171F",
          paddingBottom: "10px"
        }}>Vaccinated</p>
        <label>
          <input type="checkbox" name="vaccinated" value="true" checked={filters.vaccinated.includes("true")} onChange={handleCheckboxChange} /> Yes <br />
        </label>
        <label>
          <input type="checkbox" name="vaccinated" value="false" checked={filters.vaccinated.includes("false")} onChange={handleCheckboxChange} /> No
        </label>
      </div>

      <button 
        onClick={applyFilters} 
        style={{
          backgroundColor: "#003459",
          color: "white",
          padding: "10px 20px",
          borderRadius: "10px",
          fontWeight: "bold",
          border: "none"
        }}>
        Aplicar Filtros
      </button>
    </div>
  );
}

export default PetFilter;