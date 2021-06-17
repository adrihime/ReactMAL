import React from 'react';
import DynamicFont from 'react-dynamic-font';
import Numeral from 'numeral';
import logo from '../logo.svg';
import Jikan from 'jikan-node'

export default class  Home extends React.Component{
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
      <div className="body-main">
          {this.state.top.map((anime, i)=>
          <div className="anime" title={anime.title} key={i}>
            <div className="anime-image" style={{backgroundImage:'url('+anime.image_url+')'}}/>
              <DynamicFont content={anime.title}></DynamicFont>
              <div className="anime-body d-flex h-75 justify-content-between py-0">
                <div className="nime-score">
                  {anime.score}
                </div>
                <div className="anime-members">
                  {Numeral(anime.members).format('0.00a')}
                </div>
              </div>
          </div>
          )}
      </div>
    );
  }
  kFormatter(num) {
    return Math.abs(num) > 999 ? Math.sign(num)*((Math.abs(num)/1000).toFixed(1)) + 'k' : Math.sign(num)*Math.abs(num)
  }
}
