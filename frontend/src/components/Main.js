import React, {useState, useEffect} from 'react';
import Contact from './Contact';
import Footer from './Footer';
import Header from './Header';
import Home from './Home';
import Vault from './Vault'
import {Switch, Route, Redirect, withRouter} from 'react-router-dom'

function Main () {

    const [cards, setCards] = useState([])

    const addCardToState = cardObj => {
      setCards([...cards,cardObj])
    }
  
    useEffect(() => {
      fetch('http://localhost:3001/cards')
        .then(r=>r.json())
        .then(setCards)
    }, [])
  
    return(
        <div>
            <Header />
            <Switch>
                <Route path='/home' component={Home}/>
                <Route path='/vault' component={Vault}/>
                <Route path='/contact' component={Contact}/>
                <Redirect to='/home'/>
            </Switch>
            <Footer />    
        </div>
    )
}

export default withRouter(Main);