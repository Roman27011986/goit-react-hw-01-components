import React from "react";

import Profile from "./Components/Profile/Profile";
import user from "./Components/Profile/user.json";

import Statistics from "./Components/Statistics/Statistics";
import statisticalData from "./Components/Statistics/statistical-data.json";

import FriendList from "./Components/FriendList/FriendList";
import friends from "./Components/FriendList/friends.json";

import transactions from "./Components/Transaction/transactions.json";
import TransactionHistory from "./Components/Transaction/TransactionHistory";
const App = () => {
  return (
    <div>
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={statisticalData} />
      <Statistics stats={statisticalData} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
};

export default App;
