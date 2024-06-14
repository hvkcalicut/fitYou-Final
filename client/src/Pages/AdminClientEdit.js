import React, { useEffect } from 'react';
import { UserEdit,AdminNav } from '../Components';
import { useNavigate } from 'react-router-dom';
import jwt from 'jwt-decode';

function AdminClientEdit() {
  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem('Admintoken');
    if (token) {
      const user = jwt(token);

      // setUserName(user.name);

      if (!user) {
        localStorage.removeItem('Admintoken');
        navigate('/adminLogin');
      } else {
        // populateQuote()
      }
    } else {
      navigate('/adminLogin');
    }
  }, [navigate]);
  return (
    <div>
      <AdminNav authentication />
      <UserEdit />
    </div>
  );
}

export default AdminClientEdit;
