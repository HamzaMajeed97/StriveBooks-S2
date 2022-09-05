import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import WarningSign from './components/WarningSign'
import MyBadge from './components/MyBadge'
import SingleBook from './components/SingleBook'
import BookList from './components/BookList'
import fantasyBooks from './fantasyBooks.json'
import { Component } from 'react'
import CommentArea from './components/CommentArea'

class  App extends Component() {

  state = {
    comments: [], // comments will go here
    isLoading: true,
    isError: false,
  }


render(){

  return (
    <div className="App">
      <header className="App-header">
       
        <BookList books={fantasyBooks} />
        <CommentArea className= 'my-auto' selectedcomment={this.state.comments}/>
      </header>
    </div>
  )
}
}

export default App
