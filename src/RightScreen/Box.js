class Description extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            text: props.text,
            info: props.info
        };

    }
    render(){
        return (
            <div class="userDescription">
                <p> {this.state.text} </p>
                <p> {this.state.info} </p>
            </div>    
        );
    }
}

export default Description;