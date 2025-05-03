import HeaderBox from '@/components/HeaderBox'
import RightSidebar from '@/components/RightSidebar'
import TotalBalanceBox from '@/components/TotalBalanceBox'
import { getLoggedInUser } from '@/lib/actions/user.actions'

import React from 'react'

const Home = async () => {
  // const loggedIn = {firstName: 'John', lastName: 'Doe', email: 'contact@tjbank.com'};

  const loggedIn = await getLoggedInUser();
  return (
    <section className='home'>
      <div className='home-content'>
        <header className='home-header'>
          <HeaderBox 
          type='greeting'
          title= 'Welcome'
          user= {loggedIn?.name || 'Guest'}
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