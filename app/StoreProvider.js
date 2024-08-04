// 'use client'

import React from 'react'
import store from './(redux)/store'
// const {Provider} = require('react-redux')
import { Provider } from 'react-redux'
export function StoreProvider({children}){
return(
<Provider store={store}> 
 {children}</Provider>
)
}