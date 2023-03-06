import React from 'react'
import { useParams } from 'react-router'
import MainPage from './MainPage/MainPage';
const AllinOnePage = () => {
    const params= useParams();
  return (
    <MainPage params={params==='new'?'new':params.pageTitle} />
  )
}

export default AllinOnePage
