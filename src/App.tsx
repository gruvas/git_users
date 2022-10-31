import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import Commits from './pages/Commits/Commits';
import Projects from './pages/Projects/Projects';
import UserSearchDom from './pages/UserSearch/UserSearch';


function App() {
  return (
    <div className='max-w-[1250px] ml-auto mr-auto 
    pl-3.5 pr-3.5 pt-0 pb-0'>
      <Routes>
        <Route path={'/'} element={<UserSearchDom/>}/>
        <Route path={'/projects/:login'} element={<Projects/>}/>
        <Route path={'/commits/:login/:name/:full_name'} element={<Commits/>}/>
        <Route path="*" element={<Navigate replace to="/" />} />
      </Routes>
    </div>
  );
}

export default App;
