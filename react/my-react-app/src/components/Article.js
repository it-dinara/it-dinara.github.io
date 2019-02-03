import React, {Component} from 'react'

class Article extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isOpen: props.defaultOpen
        }
    }

    ComponentWillMount() {
        console.log('---', 'mounting')
    }
    

    ComponentWillRecieveProps(nextProps) {
        if(nextProps.defaultOpen !== this.props.defaultOpen) this.setState({
            isOpen: nextProps.defaultOpen
        })
    }


    render() {
        const {article} = this.props;
        const body = this.state.isOpen && <section>{article.text}</section>
        return (
            <div>
                <h2 >
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