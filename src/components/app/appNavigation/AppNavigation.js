import { View, Text } from 'react-native'
import React, { useContext } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import UsersNavigation from '../users/navigation/UsersNavigation'
import NewsNavigation from '../news/navigation/NewsNavigation'
import { UsersContext } from '../users/utilities/UsersContext'

const AppNavigation = () => {
    const {isLoggedIn} = useContext(UsersContext);
  return (
<NavigationContainer>
    {isLoggedIn ? <NewsNavigation/> : <UsersNavigation/>}
</NavigationContainer>
  )
}

export default AppNavigation