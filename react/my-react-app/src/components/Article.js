import React, {Component} from 'react'

class Article extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isOpen: props.defaultOpen,
            count: 0
        }
    }

    shouldComponentUpdate(nextProps, nextState) {
        return this.state.isOpen !== nextState.isOpen
    }

    componentWillMount() {
        console.log('---', 'mounting')
    }
    

    componentWillReceiveProps(nextProps) {
        // console.log('---', 'Component Will Recieve Props')
        if(nextProps.defaultOpen !== this.props.defaultOpen) this.setState({
            isOpen: nextProps.defaultOpen
        })
    }

    componentWillUpdate() {
        console.log('---', 'Will Update')
    }


    render() {
        const {article} = this.props;
        const body = this.state.isOpen && <section>{article.text}</section>
        return (
            <div>
                <h2 onClick = {this.incrementCounter}>
                    {article.title}
                    <button onClick={this.handleClick}>
                    {this.state.isOpen ? 'close' : 'open'}
                    </button>
                </h2>
                {body}
                <h3 >creation date: {(new Date(article.date)).toDateString(article.text)}</h3> 
            </div>
        )
    }

    handleClick = () => {
        console.log('---', 'clicked')
        this.setState({
            isOpen: !this.state.isOpen
        })
    }
}

 
export default Article