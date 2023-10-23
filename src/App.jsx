import React from 'react';
import Card from './Components/Card/Card';

const App = () => {
  let title = "my new Title";
  let another = 'new another title'
  let views = "100K";
  const myObj = {
    views: '300K',
    
  }
  return (
    <>
    <h1 className='text-4xl text-center'>Welcome to our Card</h1>
    <div className='grid grid-cols-3 gap-4 p-12'>
      <Card title={title} another={another} views={views}></Card>
      <Card myObj={myObj}></Card>
      <Card></Card>
    </div></>
  );
};

export default App;