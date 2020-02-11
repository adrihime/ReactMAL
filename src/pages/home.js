import React from 'react';
import {Card, Button, CardColumns} from 'react-bootstrap';
import logo from '../logo.svg';
import Jikan from 'jikan-node'

export default class Home extends React.Component{
  constructor(props){
    super(props);
    this.state = {top:null, loading: true};
  }
  componentDidMount(){
    const mal = new Jikan();
    mal.findTop('anime').then((response)=>{
        console.log(response);
        this.setState({top: response.top, loading: false});
    })
  }
  render(){
    return(
      this.state.loading ? <div>Loading</div> : this.renderAnime()
    )
  }
  renderAnime(){
    return(
      <div className="container-fluid body-main">
        <CardColumns>
      {this.state.top.map((anime, i)=>

            <Card className="anime" title={anime.title} key={i}>
              <div className="container-imagem">
                <Card.Img src={anime.image_url} alt="Card image" className="imagem-anime"/>
              </div>
              <Card.ImgOverlay className="p-0">
              <Card.Header style={{backgroundColor:'white'}}>{anime.title}</Card.Header>
                <Card.Body>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card.ImgOverlay>
            </Card>
      )}
      </CardColumns>
      </div>
    );
  }
}
