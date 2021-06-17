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
            <div className="anime-image"/>
              <div className="anime-body" style={{backgroundImage:'url('+anime.image_url+')'}}>
                <div className="anime-score">
                  {anime.score}
                </div>
                <div className="anime-members">
                  {Numeral(anime.members).format('0.00a')}
                </div>
              </div>
              <div className="anime-title">{anime.title}</div>
          </div>
          )}
      </div>
    );
  }
  kFormatter(num) {
    return Math.abs(num) > 999 ? Math.sign(num)*((Math.abs(num)/1000).toFixed(1)) + 'k' : Math.sign(num)*Math.abs(num)
  }
}
