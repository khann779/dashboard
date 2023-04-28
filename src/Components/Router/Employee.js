import React from 'react';

const Employee = () => {
  const [employee, setEmployee] = React.useState([]);

  //React.useEffect(() => {
  //  fetch('https://jsonplaceholder.typicode.com/users')
  //    .then((res) => res.json())
  //    .then((employee) => setEmployee(employee))
  //    .catch((err) => console.log(err));
  //}, []);

  const requestEmployee = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();
    setEmployee(data);
  };

  React.useState(() => {
    requestEmployee();
  }, []);

  return (
    <div className='body'>
      {employee.map((item, key) => (
        <div key={key}>{item.address.street}</div>
      ))}
    </div>
  );
};

export default Employee;
