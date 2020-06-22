import React from 'react';
import './App.css';
import {FaArrowCircleLeft} from 'react-icons/fa';
import {FaArrowCircleRight} from 'react-icons/fa';


let count = 1;
let query = window.matchMedia("(max-width: 686px)");
let size = 380;
        
class App extends React.Component {
    constructor(props) {
        super(props);
        this.slider = React.createRef();
        this.pic1 = React.createRef();
        this.pic2 = React.createRef();
        this.pic3 = React.createRef();
        this.pic4 = React.createRef();
        this.pic5 = React.createRef();
        this.pic6 = React.createRef();
        this.pic7 = React.createRef();
        this.pic0= React.createRef();
        this.pic8 = React.createRef();
        this.images = [this.pic0, this.pic1, this.pic2, this.pic3, this.pic4, this.pic5, this.pic6, this.pic7,  this.pic8];
        this.Previous = this.Previous.bind(this);
        this.Next = this.Next.bind(this);
        this.GoToSlide1 = this.GoToSlide1.bind(this);
        this.GoToSlide2 = this.GoToSlide2.bind(this);
        this.GoToSlide3 = this.GoToSlide3.bind(this);
        this.GoToSlide4 = this.GoToSlide4.bind(this);
        this.GoToSlide5 = this.GoToSlide5.bind(this);
        this.GoToSlide6 = this.GoToSlide6.bind(this);
        this.GoToSlide7 = this.GoToSlide7.bind(this);
      }
      
     Previous(){
        if(query.matches){
            size = 240;
        }
        if (count <= 0) return;
        count--;
        this.slider.current.style.transform = 'translateX(' + (-size * count) + 'px)';
        this.slider.current.style.transition = "transform 1s ease-in-out";
        this.slider.current.addEventListener("transitionend", () => {
            if (this.images[count] === this.pic0) {
                this.slider.current.style.transition = "none";
                count = 7;
                this.slider.current.style.transform = 'translateX(' + (-size * count) + 'px)';
            }
        })
      }
      
 Next(){
     if(query.matches){
            size = 240;
        }
    if (count >= 8) return;
        count++;
        this.slider.current.style.transform = 'translateX(' + (-size * count) + 'px)';
        this.slider.current.style.transition = "transform 1s ease-in-out";
        this.slider.current.addEventListener("transitionend", () => {
     if (this.images[count] === this.pic8) {
            this.slider.current.style.transition = "none";
            count = 1;
            this.slider.current.style.transform = 'translateX(' + (-size * count) + 'px)';
        } 
        })
      }

GoToSlide1(){
    count = 1;
    if(query.matches){
            size = 240;
        }
    this.slider.current.style.transform = 'translateX(' + (-size * count) + 'px)';   
}

GoToSlide2(){
    count = 2;
    if(query.matches){
            size = 240;
        }
    this.slider.current.style.transform = 'translateX(' + (-size * count) + 'px)';  
}

GoToSlide3(){
    count = 3;
    if(query.matches){
            size = 240;
        }
    this.slider.current.style.transform = 'translateX(' + (-size * count) + 'px)';   
}

GoToSlide4(){
    count = 4;
    if(query.matches){
            size = 240;
        }
    this.slider.current.style.transform = 'translateX(' + (-size * count) + 'px)';  
}

GoToSlide5(){
    count = 5;
    if(query.matches){
            size = 240;
        }
    this.slider.current.style.transform = 'translateX(' + (-size * count) + 'px)';
}

GoToSlide6(){
    count = 6;
    if(query.matches){
            size = 240;
        }
    this.slider.current.style.transform = 'translateX(' + (-size * count) + 'px)';
}

GoToSlide7(){
    count = 7;
    if(query.matches){
            size = 240;
        }
    this.slider.current.style.transform = 'translateX(' + (-size * count) + 'px)';
}
     
    render(){
        
    return ( 
        <div class="wrapper">
        <i id="prevBtn" ><FaArrowCircleLeft onClick={this.Previous}/></i>
        <i id="nextBtn"><FaArrowCircleRight onClick={this.Next}/></i>
        <div class="slider-container">
            <div class="slider" id="sliderid" ref={this.slider}>
                <div class="pic7" ref={this.pic0}></div>
                <div class="pic2" ref={this.pic2}></div>
                <div class="pic1" ref={this.pic1}></div>
                <div class="pic3" ref={this.pic3}></div>
                <div class="pic4" ref={this.pic4}></div>
                <div class="pic5" ref={this.pic5}></div>
                <div class="pic6" ref={this.pic6}></div>
                <div class="pic7" ref={this.pic7}></div>
                <div class="pic2" ref={this.pic8}></div>
            </div>
        </div>
        <button onClick = {this.GoToSlide1}>1</button>
        <button onClick = {this.GoToSlide2}>2</button>
        <button onClick = {this.GoToSlide3}>3</button>
        <button onClick = {this.GoToSlide4}>4</button>
        <button onClick = {this.GoToSlide5}>5</button>
        <button onClick = {this.GoToSlide6}>6</button>
        <button onClick = {this.GoToSlide7}>7</button>
    </div>
    );
    }
}

export default App;