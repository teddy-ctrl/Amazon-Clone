import React from 'react'
import MenuBanner from './MenuBanner/MenuBanner'
import TodayBanner from './TodayBanner/TodayBanner'
import TodayMovie from './TodayBanner/TodayMovie'

const HomePage = () => {
  return (
    <>
      <MenuBanner />
      <TodayBanner />
      <TodayMovie />
    </>
  )
}

export default HomePage
