import React from "react";
import "./style.css";
import Wrapper from "../Wrapper";
import ScoreBoard from "../ScoreBoard";
import Tile from "../Tile";
// import icons from "../../icons.json";

//create a slotted system  starting with the icons.
//cards on the table, the code starts here...
//pass the icons through a random selector to bring to 12, (future feature, and larger selections might be possible) 
//followed by the randomizer for the 12 selected. pass that to the tile generator, with a button property from here
//next, accept the click, and compare the id against a recorded 'state' array of clicked ids. 
// clicking an already clicked id gets you the boot, clicking a differnt one each time gets you a score for each until 12. 
//(you win at 12, game resets by regeneraterating the initial 12, and putting the next array through the ringer. ) 

class TableTop extends React.Component {

  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      grabBag: this.Randomizer(this.props.icons).splice(0, 12),
      glue: [],
      score: 0,
      clicked: [0],
      notClicked: []
    }
    console.log(this.props)
    console.log(this.state)
  };

  //Randomizer(this.props.random).splice(0,12)}

  
  componentDidMount() {
    //this.setState({grabBag: Randomizer(this.props.random).splice(0,12)})
    this.setState({ notClicked: this.state.grabBag.slice() });
    console.log(this.props)
    console.log(this.state)
  };

  handleClick(val, err) {
    //err.preventDefault();
    const clicked = this.state.clicked.slice();
    const tiles = this.state.notClicked.slice();
    const tileBag = tiles.map(obj=>obj.id).sort();
    console.log(tileBag)
    console.log(val+" "+clicked)
    if (clicked.every((click)=> { return val !== click })) {
      clicked.push(val)
      this.setState({ clicked: clicked });
      this.setState({notClicked: this.Randomizer(this.state.notClicked)});
      this.setState({score:this.state.score+1})
      // this.setState({grabBag:[]})
    } else {
      this.setState({ score: 0 })
      this.setState({notClicked: this.state.grabBag.slice()})
      this.setState({clicked:[0]})
    };
    console.log(val);
    console.log(this.state);
  };

  mortar = (values, index, arr) => {
    return <Tile icons={values} key={index + values.name} handleClick={(x, y) => this.handleClick(x, y)} />
  };

  Randomizer = (mixer) => {
    // this should have a "check array" section, to ensure it gets what is needs, but we know what is happening in this project, and it will get and array
    var i = 0
    var x = 0
    const newArray = []
    for (i = mixer.length; i > 0; i--) {
      x = Math.floor(Math.random() * i);
      newArray.push(mixer[x]);
      mixer.splice(x, 1);
    };
    return newArray
  };

  render() {

    const check = this.state;
    console.log(check);
    return (

      <div>
        <ScoreBoard score={this.state.score}>Clicky Memory Game</ScoreBoard>
        <Wrapper>
          {this.state.notClicked.map(this.mortar)}
        </Wrapper>
      </div>
    )
  }
};

export default TableTop; 
