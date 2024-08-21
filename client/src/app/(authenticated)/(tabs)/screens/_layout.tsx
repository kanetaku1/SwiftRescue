import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

const Layout = () => {
    return (
        <Stack>
            <Stack.Screen name="aed-locations" options={{
                headerTitle: "AED Locations"
            }} />
        </Stack>
    )
}

export default Layout