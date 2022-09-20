import {Outlet } from 'react-router-dom';

const Collection = () =>
{
  return (
    <main className="bg-gradient-to-b from-primary-900 to-primary-500">
      <div className="container pt-24 md:pt-48">
        <h1 className="text-center text-2xl lg:text-6xl text-primary-50 py-4 lg:py-8 mb-2 md:mb-4 lg:mb-8">
          Collection
        </h1>
        <div className="mb-2 md:mb-4 lg:mb-8">
          <img src="" alt="" />
        </div>
        <Outlet />
      </div>
    </main>
  );
};

export default Collection;
