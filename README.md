# floating-object
Floating object liberary that changes the position of an element based on the cursor position that makes floating interactive animation effect.

## 1.Install
run this command
```bash
npm install floating-object
```

## 2.import 
import the package in your project

CSS
```html
<link rel="stylesheet" href="./node_modules/floating-object/floating.css">
```

JavaScript
```javascript
import { floating } from 'floating-object'
```
Or 
```javascript
import { floating } from './node_modules/floating-object/index.js'
```

## Add ID for floating Object
add "floating-container" for parent and "floating-object" for floating object in your HTML
```html
	<div id="floating-container">
        <img id="floating-object" width="200px" src="./assets/earth.png" alt="🌍 Floating earth ">
	</div>	
```
*floating-container is a 100vw * 100vh ID which specifies the mouse interactive area. you can make it smaller but the best performance is when it's full width an height.

## 3.Apply floating effect on an object 
Use this function
floating-container: it is ID of parent element of floating object
floating-object:it is ID of floating object
30: it is coefficient value that effects on object movement for example here the object will floats(moves) maximum 30px based on mouse position
```javascript
floating('floating-container' , 'floating-object',30);
```
