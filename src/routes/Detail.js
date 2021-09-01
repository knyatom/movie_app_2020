import React from 'react';

class Detail extends React.Component {

  componentDidMount() {
    const { location, history } = this.props;

    if(location.state===undefined){
      history.push('/');
    }
  }

  render() {
    
    const {location}=this.props;

    if(location.state){
      console.log(location.state);
      return <div>
        <span>{location.state.title}</span>
        <h2>{location.state.genres}</h2>
        <section><img src={location.state.poster} /></section>
        <footer>
          {location.state.summary}
        </footer>
        
        </div>

    }else{
      return null;
    }
    
  }
};

export default Detail;