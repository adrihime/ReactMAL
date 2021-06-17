import React from 'react';
import DynamicFont from 'react-dynamic-font';
import Numeral from 'numeral';
import logo from '../logo.svg';
import Jikan from 'jikan-node'
import StarBorderRoundedIcon from '@material-ui/icons/StarBorderRounded';
import PeopleAltRoundedIcon from '@material-ui/icons/PeopleAltRounded';

export default class  Search extends React.Component{
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
      <div className="search-main">
          {this.state.top.map((anime, i)=>
          <div className="anime" title={anime.title} key={i} style={{animationDelay:i*0.05+'s'}}>
            <div className="anime-body" style={{backgroundImage:'url('+anime.image_url+')'}}>
              <div className="anime-footer">
                <div className="anime-score">
                  <StarBorderRoundedIcon/>
                  <div>
                    {anime.score}
                  </div>
                </div>
                <div className="anime-members">
                  <PeopleAltRoundedIcon/>
                  <div>
                    {Numeral(anime.members).format('0.00a')}
                  </div>
                </div>
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
