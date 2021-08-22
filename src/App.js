import './App.css';
import Protypes from 'prop-types';


function Food({fav2, pic, rating}){
  return (
    <div>
    <h1>I Like {fav2}</h1>
    <img src={pic} style={{width:'100px', border:'3px solid red'}} alt={fav2} />
    <h4>{rating}/5.0</h4>
    </div>
  )
}
const foodLike=[
  { id:1,name:'kimchi',
  image:'https://img.huffingtonpost.com/asset/5ef1bbda2500002930eb3d3e.jpeg?cache=A4S3uCXvP2&ops=crop_0_254_2744_1936,scalefit_630_noupscale',
rating:5},
  { id:2,name:'ramun', image:'https://mblogthumb-phinf.pstatic.net/MjAyMDA1MjZfMjcw/MDAxNTkwNDgxNTI0OTI5.cElkTRG2bnYaUn0RlCq58_227T8KT_g2H1riUFYdYmYg.ZxnDFMZfaOq-jt4Qa5lk2gz3kr1Z-OG7HTVRiLYGEsAg.JPEG.naverschool/GettyImages-647266676.jpg?type=w800',
rating:4},
  { id:3,name:'guksoo', image:'https://img.huffingtonpost.com/asset/5ef1bbda2500002930eb3d3e.jpeg?cache=A4S3uCXvP2&ops=crop_0_254_2744_1936,scalefit_630_noupscale'},
  { id:4,name:'된장찌개', image:'https://img.huffingtonpost.com/asset/5ef1bbda2500002930eb3d3e.jpeg?cache=A4S3uCXvP2&ops=crop_0_254_2744_1936,scalefit_630_noupscale'},
]

function App() {

 const renderFood = (dish) => {
    return <Food key={dish.id} fav2={dish.name} pic={dish.image} rating={dish.rating} />
  }
console.log(foodLike.map(renderFood));
  return (
    <div className="App">
      <h1> Hello</h1>
     
      <hr />
     
      {foodLike.map(renderFood)}
    </div>
  );
}


Food.prototype={
  name:Protypes.string.isRequired,
  picture:Protypes.string.isRequired,
  rating:Protypes.string.isRequired,
  
}


export default App;
