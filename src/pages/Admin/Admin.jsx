import React from 'react';
import './Admin.css'
import { useGetUsersQuery } from '../../components/context/api/UserApi/UserApi';
import { Link } from 'react-router-dom';

const Admin = () => {
  const { data,isError,isLoading,isSuccess} = useGetUsersQuery();
  console.log(data?.data?.users);

  let links = data?.data?.users?.map((user) =>(
    <div className="card">
     <h5>{user.FirstName}</h5>
     <p>{user.LastName}</p>
    </div>
  ))
  return (
    <div className='container'>
      <button >
        <Link to={'/'}> Logout</Link>
      </button>
      <div className="wrapper">
        {links}
      </div>
      
    </div>
  );
}

export default Admin;
