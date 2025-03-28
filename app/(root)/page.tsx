import HeaderBox from '@/components/HeaderBox'
import RightSidebar from '@/components/RightSidebar'
import TotalBalanceBox from '@/components/TotalBalanceBox'
import React from 'react'

const Home = () => {
  const loggedIn = { firstName: 'Tochukwu', lastName: 'Owunwanne', email: 'contact@tjbank.com.ng' }
  return (
    <section className='home'>
      <div className='home-content'>
        <header className='home-header'>
          <HeaderBox 
          type='greeting'
          title= 'Welcome'
          user= {loggedIn?.firstName}
          subtext= 'Access and manage your account anytime, anywhere.'
          />

          <TotalBalanceBox
            accounts = {[]}
            totalBanks = {1}
            totalCurrentBalance ={2335694.34}
          />
        </header>

        Recent Transactions
      </div>

      <RightSidebar user={loggedIn} transactions={[]} banks={[{currentBalance: 500000.09}, {currentBalance: 3300000}]} />
    </section>
  )
}

export default Home