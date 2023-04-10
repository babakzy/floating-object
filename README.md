# floating-object
Floating object liberary that changes the position of an element based on the cursor position that makes floating interactive animation effect.

## 1.Install
run this command
```bash
npm install floating-object
```

## 2.import 
import the package in your project
```bash
import { floating } from 'floating-object'
```

## 3.Apply floating effect on an object 
Use this function
floating-container: it is ID of parent element of floating object
floating-object:it is ID of floating object
30: it is coefficient value that effects on object movement for example here the object will floats(moves) maximum 30px based on mouse position
```bash
floating('floating-container' , 'floating-object',30);
```

### * under development - not totaly finished