import yCard from './assets/Dark_Mag.png'
const Card = () => {
    return(
        <div className="card">
            <img className="card-image" src={yCard} alt="Dark Magician"></img>
            <h1 className=" card-title" style={{color: "Black", fontWeight: '900'}}>Dark Magician</h1>
            <p className= "card-text" >A sinister spellcaster who possesses both power and defense</p>
        </div>
    );
}
export  default Card;