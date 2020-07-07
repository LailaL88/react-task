# Image slider that slides 7 items into left and right direction.
Images slide by clicking the right and left arrow.
It is also possible to go to the selected slide by clicking on the number below the slider.
The slider slides infinitely.
The slider works on any screen size from mobile to desktop.
# To use the slider
Clone the repository to your computer.
In the Test-slider-react folder you can make changes to the project.
To put a different content into the slider in app.css remove the background images then in app.js render method add the needed content into the div.slider divs.


# Usage
Remove the img tags and put the desired content into div.slider li
```
<div class="slider" id="sliderid" ref={this.slider} onTouchStart = {this.Swipe}>
                <li  ref={this.lastImg}>
                <img src="https://github.com/LailaL88/test-task/blob/master/pic7.jpg?raw=true" alt=""></img>
                </li>
                <li >
                    <img src="https://github.com/LailaL88/test-task/blob/master/pic1.jpg?raw=true" alt=""></img>
                </li>
                <li  >
                <img src="https://github.com/LailaL88/test-task/blob/master/pic2%20.jpg?raw=true" alt=""></img>
                </li>
                <li >
                <img src="https://github.com/LailaL88/test-task/blob/master/pic3.jpg?raw=true" alt=""></img>
                </li>
                <li  >
                <img src="https://github.com/LailaL88/test-task/blob/master/pic4.jpg?raw=true" alt=""></img>
                </li>
                <li  >
                <img src="https://github.com/LailaL88/test-task/blob/master/pic5.jpg?raw=true" alt=""></img>
                </li>
                <li >
                <img src="https://github.com/LailaL88/test-task/blob/master/pic6.jpg?raw=true" alt=""></img>
                </li>
                <li >
                <img src="https://github.com/LailaL88/test-task/blob/master/pic7.jpg?raw=true" alt=""></img>
                </li>
                <li ref={this.firstImg}>
                <img src="https://github.com/LailaL88/test-task/blob/master/pic1.jpg?raw=true" alt=""></img>
                </li>
            </div>
```
If you wat to put the content as first or last slider item, make sure that ```<li  ref={this.lastImg}>``` content repeats the last item content and ```<li ref={this.firstImg}>``` repeats the first item content.

If you have more than 7 items add ```<button onClick = {this.GoToSlide(1)}></button>``` tags with numbers of your items into 
```     
        <nav>
        <button onClick = {this.GoToSlide(1)}></button>
        <button onClick = {this.GoToSlide(2)}></button>
        <button onClick = {this.GoToSlide(3)}></button>
        <button onClick = {this.GoToSlide(4)}></button>
        <button onClick = {this.GoToSlide(5)}></button>
        <button onClick = {this.GoToSlide(6)}></button>
        <button onClick = {this.GoToSlide(7)}></button>
        </nav>
```
            
