import React from 'react'
import { Item, ItemImage, ItemMetaWrapper } from "../../styles/items"
import ItemMeta from './ItemMeta'

const SingleItem = ({item, matches}) => {
  return (
    <Item>
        <ItemImage src={item.image} />
        <ItemMetaWrapper>
        <ItemMeta item = {item} matches = {matches} />
        </ItemMetaWrapper>
    {/* 
    item
    image
    meta
    actions
    footer
      */}
    </Item>
  )
}

export default SingleItem