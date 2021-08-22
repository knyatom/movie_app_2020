import './App.css';
//import Potato from './Potato';
function Potato({fav}){
  return (
        <div>
          <h1> I love Potato !!!{fav} 추가요?</h1>
          <h2> {fav} 또 추가요</h2>
        </div>
       )
}
function Food({fav2, pic}){
  return (
    <div>
    <h1>I Like {fav2}</h1>
    <img src={pic} style={{width:'100px', border:'3px solid red'}} alt={fav2} />
    </div>
  )
}
const foodLike=[
  { id:1,name:'kimchi',
  image:'https://img.huffingtonpost.com/asset/5ef1bbda2500002930eb3d3e.jpeg?cache=A4S3uCXvP2&ops=crop_0_254_2744_1936,scalefit_630_noupscale'},
  { id:2,name:'ramun', image:'https://mblogthumb-phinf.pstatic.net/MjAyMDA1MjZfMjcw/MDAxNTkwNDgxNTI0OTI5.cElkTRG2bnYaUn0RlCq58_227T8KT_g2H1riUFYdYmYg.ZxnDFMZfaOq-jt4Qa5lk2gz3kr1Z-OG7HTVRiLYGEsAg.JPEG.naverschool/GettyImages-647266676.jpg?type=w800'},
  { id:3,name:'guksoo', image:'https://img.huffingtonpost.com/asset/5ef1bbda2500002930eb3d3e.jpeg?cache=A4S3uCXvP2&ops=crop_0_254_2744_1936,scalefit_630_noupscale'},
  { id:4,name:'된장찌개', image:'https://img.huffingtonpost.com/asset/5ef1bbda2500002930eb3d3e.jpeg?cache=A4S3uCXvP2&ops=crop_0_254_2744_1936,scalefit_630_noupscale'},
]

function App() {

 const renderFood = (dish) => {
    return <Food key={dish.id} fav2={dish.name} pic={dish.image} />
  }
console.log(foodLike.map(renderFood));
  return (
    <div className="App">
      <h1> Hello</h1>
      <Potato fav="양념감자" something={true} papa={['hellow',1,2,3,4,true]} />
      <Potato fav="마늘감자"  />
      <Potato fav="치킨감자"  />
      <hr />
      <Food fav2={foodLike[0].name}/>
      <Food fav2={foodLike[1].name}/>
      <Food fav2={foodLike[2].name}/>
      <Food fav2={foodLike[3].name}/><hr />
      {foodLike.map(renderFood)}
    </div>
  );
}

export default App;
