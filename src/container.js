import React from 'react';
import './container.css';

function Header() {
    return (
        <header className="header1">
            <img className="logo" alt="logo" src={process.env.PUBLIC_URL + "./resrc/logo1.png"}></img>
        </header>
    );
}


function Poster(props) {
    return (
        <div className={props.c_name}>
            <img alt="images" src={process.env.PUBLIC_URL + props.url_text} />
        </div>
    );
}
function Stars() {
    return (
        <div className="score">
            <div className="stars">
                <a href="#" data-value="1" title="Votar con 1 estrellas">&#9733;</a>
                <a href="#" data-value="2" title="Votar con 2 estrellas">&#9733;</a>
                <a href="#" data-value="3" title="Votar con 3 estrellas">&#9733;</a>
                <a href="#" data-value="4" title="Votar con 4 estrellas">&#9733;</a>
                <a href="#" data-value="5" title="Votar con 5 estrellas">&#9733;</a>
            </div>
            <TextScore score="4.9" votes="31" />
        </div>
    );
}
function TextScore(props) {
    return (
        <div className="text">
            <h2>Calificación:</h2>
            <p>{props.score} ({props.votes} votos)</p>
        </div>
    );
}
function Date(props) {
    return (
        <li className={props.li_name}>
            <p>{props.day}</p>
            <p>{props.date}</p>
        </li>
    );
}
function Icon(props){
    return(
        <li className={props.nnetwork}>
            <a href={props.urlpage} target="_blank" rel="noopener noreferrer">
                <i className={props.nicon} aria-hidden="true"></i>
            </a>
        </li>
    );
}

function Info(props){
    return(
        <div className={props.f_name}>
            <p>{props.cpright}</p>
            <p>{props.business}</p>
        </div>
        
    ); 
}

function Footer(){
    return(
        <div className="contain">
            <ul>
                <li>
                    <div className="line1">
                        <p>¡No</p>
                    </div>
                    <div className="line2">
                        <p>te lo</p>
                    </div>
                    <div className="line3">
                        <p>Pierdas!</p>
                    </div>
                </li>
                <li>
                    <div className="social">
                        <ul>
                            <Icon nnetwork="facebook" urlpage="https://www.facebook.com/RoyalFilms" nicon="fab fa-facebook-square"/>
                            <Icon nnetwork="twitter" urlpage="http://twitter.com/ClubRoyalFilms" nicon="fab fa-twitter-square"/>
                            <Icon nnetwork="youtube" urlpage="http://https://www.youtube.com/user/clubroyalfilms" nicon="fab fa-youtube"/>
                        </ul>
                    </div>
                    <Info f_name="info" cpright="Copyright© 2012 todos los derechos reservados" business="Royal Flims ® SAS."/>
                </li>
                
            </ul>
        </div>
    );
}

function App() {
    return (
        <div className="container">
            <Header />
            <section className="main">
                <div className="posters">
                    <Poster c_name="guason" url_text="./resrc/guason.jpg" />
                    <Poster c_name="guason1" url_text="./resrc/guason1.jpg" />
                    <Poster c_name="guason2" url_text="./resrc/guason2.jpg" />
                </div>
                <Stars />

                <div className="time">
                    <ul>
                        <Date li_name="first" day="JUE." date="03 OCT.2019" />
                        <Date day="VIE." date="04 OCT.2019" />
                        <Date day="SÁB." date="05 OCT.2019" />
                        <Date day="DOM." date="06 OCT.2019" />
                    </ul>
                </div>
            </section>
            <footer><Footer/></footer>
        </div>
    );
}


export default App;