import React, {Component} from 'react';
import './App.css';

let elems = {
    header: 'Dinos be dinoin',
    author: 'Richard Scary',
    content: 'THIS IS A POST ABOUT DINOS LISTEN UP PEOPLE'
}

let commentStuff = [
    {
        commentHeader: 'Rawr',
        commentBody: 'Dinobama says hi!'
    },
    {
        commentHeader: 'Radasaurus',
        commentBody: 'RAWRAWRRAWR'
    }
    ]

class Header extends Component {
    render () {
        return(
            <div>
                <h1>{this.props.header}</h1>
                <h3>{this.props.author}</h3>
            </div>
        )
    }
}

class Content extends Component {
    constructor(props) {
        super();
        this.state = {
            content: 'Check out this content property!'
        }
        this.changeContent = this.changeContent.bind(this)
    }

   changeContent(e) {
        e.preventDefault();
        let newContentValue = prompt("What should the new body be?");
        if (newContentValue != null) {
        this.setState((prevState, props) => {
            return {
                content: newContentValue
            }
        })
        }
    }

    render () {
        return(
            <div>
            <p id="content">{this.state.content}</p>
            <button id="button" onClick={this.changeContent}>Edit Body</button>
            </div>
        )
    }
}

  
  class Comment extends Component {
    render() {
        return (
            <div>
                <h3>{this.props.commentHeader}</h3>
                <p>{this.props.commentBody}</p>
            </div>
        )
    }
  }
  
  class Commentpost extends Component {
    render() {
        let comments = [];
        commentStuff.forEach(function(comment, index) {
            comments.push(<Comment commentHeader={comment.commentHeader} commentBody={comment.commentBody} />);
        })
        return (
            <div>
                {comments}
            </div>
        );
    }
  }

  
function App() {
    return(
        <div>
            <Header header={elems.header} author={elems.author}/>
            <Content content={this.state.content} onClick={this.changeContent} />
            <Commentpost />
        </div>
    ) 
}

  export default App;
  