import React from 'react'
import SearchForm from  './components/SearchForm';
import Table from './components/Table';
import { useData } from './hooks/useData'
import { filterData } from './signals/customSignals';
import { config } from './config/main';
import './App.css'

function App() {
  const movies = useData(config.moviesCsvUrl);
  
  if (!movies) return <h1>Loading...</h1>;

  const filteredData = filterData(movies);

  return (
    <div id="app" className="wrapper">
      <SearchForm />
      <Table columns={movies.columns} data={filteredData.value} />
    </div>
  )
}

export default App;
