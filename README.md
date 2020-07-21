# React slider
The items slide by clicking the right and left arrow.
It is also possible to go to the selected slide by clicking on the number below the slider.
The slider slides infinitely. The slider supports swipes.
The slider works on any screen size from mobile to desktop.
# Installation
Clone the repository to your computer.

Make sure you have Node on your computer. To see if Node is installed, open the Windows Command Prompt, Powershell or a similar command line tool, and type ```node -v``` . This should print a version number, so you'll see something like this v0. 10.35 .
Run ```npm install``` to intall all the dependencies.

You can make changes to the slider in src folder.
In index.html file change the ```<script src="./dist/main.js">``` to ```<script src="./main.js"```
# Usage
In App.js file remove the img tags and put the desired content into div.slider li
```
          <div
            className="slider"
            ref={this.slider}
            onTouchStart={this.swipe}
          >
            <li ref={this.lastImg}>
              <img
                src="https://github.com/LailaL88/test-task/blob/master/pic7.jpg?raw=true"
                alt=""
              ></img>
            </li>
            <li>
              <img
                src="https://github.com/LailaL88/test-task/blob/master/pic1.jpg?raw=true"
                alt=""
              ></img>
            </li>
            <li>
              <img
                src="https://github.com/LailaL88/test-task/blob/master/pic2%20.jpg?raw=true"
                alt=""
              ></img>
            </li>
           <li ref={this.firstImg}>
              <img
                src="https://github.com/LailaL88/test-task/blob/master/pic1.jpg?raw=true"
                alt=""
              ></img>
            </li>
          </div>
```
If you wat to put the content as first or last slider item, make sure that ```<li  ref={this.lastImg}>``` content repeats the last item content and ```<li ref={this.firstImg}>``` repeats the first item content.

If you have more than 7 items add ```<button onClick={this.goToSlide(1)}></button>``` tags with numbers of your items into 
```     
        <nav>
          <button onClick={this.goToSlide(1)}></button>
          <button onClick={this.goToSlide(2)}></button>
          <button onClick={this.goToSlide(3)}></button>
          <button onClick={this.goToSlide(4)}></button>
          <button onClick={this.goToSlide(5)}></button>
          <button onClick={this.goToSlide(6)}></button>
          <button onClick={this.goToSlide(7)}></button>
        </nav>
```
to add buttons that navigate to each slide. If you have less items, remove the unneeded buttons.

Add "picX" items to ```this.images = [this.lastImg, "pic1", "pic2", "pic3", "pic4", "pic5", "pic6", "pic7",  this.firstImg];``` array so that all slider items are in the array.

To open the slider in the browser type ```npm run start``` command in the terminal.

