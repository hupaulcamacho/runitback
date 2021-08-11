import './App.css';
import { useState, useEffect } from 'react'
import { supabase } from './supabaseClient'
import { Route, Switch } from 'react-router-dom';

// component imports
import Home from './Components/Home';
import GuiltyGear from './Components/GuiltyGear';
import DragonBallFighterz from './Components/DragonBallFighterz';
import Character from './Components/Character';

// import Auth from './Auth'
// import Account from './Account'

export default function App() {
  // const [session, setSession] = useState(null)

  // useEffect(() => {
  //   setSession(supabase.auth.session())

  //   supabase.auth.onAuthStateChange((_event, session) => {
  //     setSession(session)
  //   })
  // }, [])
  
  return (
    <div className="App">
      {/* {!session ? <Auth /> : <Account key={session.user.id} session={session} />} */}
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/GGST/:character" render={(props) => (
          <Character {...props} />
          )} 
        />
        <Route path="/GGST" component={GuiltyGear} />
        <Route path="/DBFZ" component={DragonBallFighterz} />
      </Switch>
    </div>
  )
}