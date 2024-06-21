import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Employees = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const res = await axios.get('http://localhost:5094/api/Employees/GetEmployees');
        setEmployees(res.data);
      } catch (err) {
        console.error(err.message);
      }
    };

    fetchEmployees();
  }, []);

  return (
    <div>
      <h1>Employees</h1>
      <ul>
        {employees.map(employee => (
          <li key={employee.id}>
            {employee.first_name} {employee.last_name} - {employee.job_title} - {employee.password_em} - {employee.email}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Employees;