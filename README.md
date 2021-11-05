# Review-CSS

### CSS Syntax
```css
selector {
    property : value,
    property : value
}
```


### CSS Selectors

| Selector          |   Example                 |  Description                                          |
|-------------------|---------------------------|-------------------------------------------------------|
| #id               |   #theId                  | Selects the element with id = "theId"                 |
| .class            |   .theClasses             | Selects all elements with class = "theClasses"        |
| element.classes   |   p.theClasses            | Selects only p tags with class = "theClasses"         |
| *                 |   *                       | Selects all elements                                  |
| element           |   p                       | Selects all p tags                                    |
| element,element,..|   div,p                   | Selects all div tags and all p tags                   |  


### CSS Declaration and Priority
There are three ways of inserting a style sheet:
1. External CSS
```html
<!DOCTYPE html>
<html>
    <head>
        <!-- External CSS -->
        <link rel="stylesheet" href="style.css"/>
    </head>
    <body>        
    </body>
</html>
```
2. Internal CSS
```html
<!DOCTYPE html>
<html>
    <head>
        <!-- Internal CSS -->
        <style>

        </style>
    </head>
    <body>
    </body>
</html>
```
3. Inline CSS
```html
<!DOCTYPE html>
<html>
    <head></head>
    <body>
        <!-- Inline CSS -->
        <p style="color:red">This is an inline CSS</p>
    </body>
</html>
```

The priority level of selectors

| Order |   CSS Selectors           |
|-------|---------------------------|
| 1     |   !important              |
| 2     |   Inside style attribute  |
| 3     |   Combined selectors      |
| 4     |   ID                      |
| 5     |   class                   |
| 6     |   attribute               |
| 7     |   element                 |
| 8     |   *                       |

- \* vs element
```html
<!DOCTYPE html>
<html>
    <head>
        <style>
            p {
                color : red
            }

            * {
                color : violet
            }            
        </style>
    </head>
    <body>
        <h3>This tag will color violet<h3>
        <p>Examples for priority level of selectors</p>
    </body>
</html>
```
[Click to View](https://codepen.io/michaelphamngo/pen/NWvyYzB)

- element vs attribute
```html
<!DOCTYPE html>
<html>
    <head>
        <style>       
            [setColor] {
                color : red;
                font-size: 12px;
            }

            p {
                color : orange;
                font-size: 16px;
            }            
        </style>
    </head>
    <body>
        <p>This is a paragraph</p>
        <p setColor>Examples for priority level of selectors</p>
    </body>
</html>
```
[Click to View](https://codepen.io/michaelphamngo/pen/vYJdRQZ)

- attribute vs class
```html
<!DOCTYPE html>
<html>
    <head>
        <style>       
            .myStyle {
                color : violet;                
            }                             

            [setColor] {
                color : red;
                font-size: 12px;
            }

            p {
                color : orange;
                font-size: 16px;
            }
        </style>
    </head>
    <body>
        <p>This is a paragraph</p>
        <p setColor class="myStyle">Examples for priority level of selectors</p>
    </body>
</html>
```
[Click to View](https://codepen.io/michaelphamngo/pen/dyzdmEW)

- class vs id
```html
<!DOCTYPE html>
<html>
    <head>
        <style>                        
            #myId {
                border: 2px solid purple;
            }            

            .myStyle {
                color : violet;                
                font-weight: bold;
                border: 1px dashed violet;        
            }            

            p {
                color : orange;
                font-size: 16px;
            }
        </style>
    </head>
    <body>
        <p>This is a paragraph</p>
        <p class="myStyle" id="myId">Examples for priority level of selectors</p>
    </body>
</html>
```
[Click to View](https://codepen.io/michaelphamngo/pen/VwzQxZz)

- id vs combine selectors
```html
<!DOCTYPE html>
<html>
    <head>
        <style>                        
            #myId.myStyle {
                color : violet;                
                font-weight: bold;
                border: 1px dashed violet;        
            }            

            #myId {
                border: 2px solid purple;
            } 

            p {
                color : orange;
                font-size: 16px;
            }
        </style>
    </head>
    <body>
        <p>This is a paragraph</p>
        <p class="myStyle" id="myId">Examples for priority level of selectors</p>
    </body>
</html>
```
[Click to View](https://codepen.io/michaelphamngo/pen/VwzQxLM)

- combine selectors vs inline style
```html
<!DOCTYPE html>
<html>
    <head>
        <style>                        
            #myId.myStyle {
                color : violet;                
                font-weight: bold;
                border: 1px dashed violet;        
            }            

            #myId {
                border: 2px solid purple;
            } 

            p {
                color : orange;
                font-size: 16px;
            }
        </style>
    </head>
    <body>
        <p>This is a paragraph</p>
        <p class="myStyle" id="myId" style="color: blue; border: 3px dotted pink;">Examples for priority level of selectors</p>
    </body>
</html>
```
[Click to View](https://codepen.io/michaelphamngo/pen/mdMXLex)

- !important vs inline style
```html
<!DOCTYPE html>
<html>
    <head>
        <style>        
            p {
                color: blue !important;
                border: 2px solid orangered !important;
                font-size: 14px !important;
            }                
            #myId.myStyle {
                color : violet;                
                font-weight: bold;
                border: 1px dashed violet;        
            }            

            #myId {
                border: 2px solid purple;
            } 

            p {
                color : orange;
                font-size: 16px;
            }
        </style>
    </head>
    <body>
        <p>This is a paragraph</p>
        <p class="myStyle" id="myId" style="color: blue; border: 3px dotted pink;">Examples for priority level of selectors</p>
    </body>
</html>
```
[Click to View](https://codepen.io/michaelphamngo/pen/WNEMJrW)

### BEM (Block Element Modifier)
```javascript
[block]__[element]--[modifier]
/*
 *  1. Block: The outermost parent element of the component
 *  2. Element: Inside of the component may be one or more children
 *  3. Modifier: Either a block or element may have a variation signified by a modifier
 */
```

- Example 1:
<img src="https://github.com/MichaelPhamNgo/Review-CSS/blob/main/toast%20message.png" alt="Toast Message" height=350/>

> - Block: Toast <br/>
> - Elements: Icon, Title, Message, Close Button <br/>
> - Modifier: Success, Info, Warning  <br/>



### CSS units

### CSS functions

### CSS font and text

### CSS padding, margin, and border

### CSS Shadow

### CSS Pseudo Classes

### CSS Pseudo Element

### CSS list and table

### CSS Background

### CSS overflow and float

### CSS position and display

### CSS Animation

### CSS Flexbox

### CSS Grid

### Components in Website
#### Header

#### Footer

#### Navigation

#### Content

### WebPages


