import React, { useEffect, useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import axios from 'axios';

const columns = [
    { field: 'id', headerName: 'ID', width: 50 },
    { field: 'title', headerName: 'Product title', width: 330 },
    { field: 'description', headerName: 'Product description', width: 480 },
    {
      field: 'price',
      headerName: 'Product price',
      type: 'number',
      width: 110,
    },
    {
        field: 'category',
        headerName: 'Product category',
        width: 130,
      },
  ];
  

const About = () => {
    const [data, setData] = useState([]);
    useEffect(()=>{
        axios.get('https://fakestoreapi.com/products').then((res)=>{
        setData(res.data);
    })
    },[]);
    console.log(data)

  return (
    <div className='container'>
       <div style={{ height: 400, width: '100%', marginTop: 50 }}>
      <DataGrid
        rows={data}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
    </div>
  )
}

export default About;
