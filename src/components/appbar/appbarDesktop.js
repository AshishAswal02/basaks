import { ListItemText , Typography} from '@mui/material'
import React from 'react'
import { AppbarContainer, AppbarHeader, MyList } from '../../styles/appbar'

const appbarDesktop = ({matches}) => {
  return (
    //   list
    <AppbarContainer>
        <AppbarHeader>
            Anubhav Designs
        </AppbarHeader>
        <MyList type='row'>
            <ListItemText primary='Home' primaryTypographyProps={{}}/>
            <ListItemText primary='Sites'/>
            <ListItemText primary='Projects'/>
            <ListItemText primary='Contacts'/>
        </MyList>
    </AppbarContainer>
  )
}

export default appbarDesktop