import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import jwt from 'jwt-decode';
import AdminNav from '../Components/AdminNav/AdminNav';
import { useDispatch } from 'react-redux';
import { loginInfo } from '../redux/adminReducer';
function AdminHome() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    const token = localStorage.getItem('Admintoken');
    if (token) {
      const user = jwt(token);
      dispatch(loginInfo(user));
      console.log(user);
      if (!user) {
        localStorage.removeItem('Admintoken');
        navigate('/adminLogin');
      } else {
        // populateQuote()
      }
    } else {
      navigate('/adminLogin');
    }
  }, [dispatch, navigate]);

  return (
    <div>
      <AdminNav home />
    </div>
  );
}

export default AdminHome;
