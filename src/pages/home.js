import React from 'react';
import {Card, Button, CardColumns} from 'react-bootstrap';
import DynamicFont from 'react-dynamic-font';
import Numeral from 'numeral';
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
              <Card.Header className="h-25">
                <DynamicFont content={anime.title}></DynamicFont>
              </Card.Header>
                <Card.Body className="card-body d-flex h-75 justify-content-between py-0">
                  <Card.Text className="mt-auto mb-3 anime-score">
                    {anime.score}
                  </Card.Text>
                  <Card.Text className="mt-auto mb-3 anime-members">
                    {Numeral(anime.members).format('0.00a')}
                  </Card.Text>
                </Card.Body>
              </Card.ImgOverlay>
            </Card>
      )}
      </CardColumns>
      </div>
    );
  }
  kFormatter(num) {
    return Math.abs(num) > 999 ? Math.sign(num)*((Math.abs(num)/1000).toFixed(1)) + 'k' : Math.sign(num)*Math.abs(num)
  }
}
