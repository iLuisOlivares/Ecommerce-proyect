import React from 'react'
import { ListItem } from '../components/ListItem'
import ShopState from '../ShopState'
export const Home = () => {
  return (
   <ListItem products={ShopState.products}/>
  )
}
