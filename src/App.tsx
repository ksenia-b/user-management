import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from './store';
import { getUsers } from './store/userSlice';
import './App.css';
import UserTable from './components/UserTable';

const App: React.FC = () => {
  const dispatch = useDispatch();
  const { users, loading, error } = useSelector((state: RootState) => state.users);

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  return (
    <div className="App">
      <h1>User Management Table</h1>

      {loading && <div className="loading">Loading...</div>}
      {error && <div className="error">Error: {error}</div>}

      {users.length > 0 && (
        !loading && !error && (<UserTable users={users} />)
      )}
    </div>
  );
};

export default App;
