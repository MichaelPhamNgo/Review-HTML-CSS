# Review-HTML-CSS

## I. CSS Syntax
```css
selector {
    property : value,
    property : value
}
```


## II. CSS Selectors

| Selector          |   Example                 |  Description                                          |
|-------------------|---------------------------|-------------------------------------------------------|
| #id               |   #theId                  | Selects the element with id = "theId"                 |
| .class            |   .theClasses             | Selects all elements with class = "theClasses"        |
| element.classes   |   p.theClasses            | Selects only p tags with class = "theClasses"         |
| *                 |   *                       | Selects all elements                                  |
| element           |   p                       | Selects all p tags                                    |
| element,element,..|   div,p                   | Selects all div tags and all p tags                   |  


## III. CSS Declaration and Priority
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

## IV. BEM (Block Element Modifier)
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

> 1. Block: Toast <br/>
> 2. Elements: Icon, Content (Title, Message), Close <br/>
> 3. Modifier: Success, Info, Warning  <br/>

[Click to View](https://codepen.io/michaelphamngo/pen/XWaEreE)

- Example 2:
<img src="https://github.com/MichaelPhamNgo/Review-CSS/blob/main/bootstrap-buttons.png" alt="Bootstrap Buttons" height=350/>

> 1. Block: btn <br/>
> 2. Elements: No Elements<br/>
> 3. Modifier: Primary, Success, Info, Warning, Danger, Bordered, Border-Radius-5, Border-Radius-40, Shadow  <br/>

[Click to View](https://codepen.io/michaelphamngo/pen/WNEzNVY)

## V. CSS units

The common css units using in a website

| Unit |  Description                                                                                   |
|------|------------------------------------------------------------------------------------------------|
| px   | Pixels (px) are relative to the viewing device. 1px is one device pixel (dot) of the display.  |
| em   | Relative to the font-size of the parent element which contains font-size                       |
| rem  | Relative to font-size of the root element                                                      |
| vw   | Relative to 1% of the width of the viewport*                                                   |
| vh   | Relative to 1% of the height of the viewport*                                                  |
| %    | Relative to the parent element                                                                 |  

## VI. CSS functions

The common css functions using in a website

| Function          |  Description                                                          |   Examples      |
|-------------------|-----------------------------------------------------------------------|-----------------|
| attr              | Returns the value of an attribute of the selected element             |[Click To View](https://codepen.io/michaelphamngo/pen/wvqmzaE)|
| calc              | Allows you to perform calculations to determine CSS property values   |[Click To View](https://codepen.io/michaelphamngo/pen/jOLzMrR)|
| counter           | Returns the current value of the named counter                        |[Click To View](https://codepen.io/michaelphamngo/pen/JjyLRNW)|
| linear-gradient   | Sets a linear gradient as the background image                        |[Click To View](https://codepen.io/michaelphamngo/pen/KKvoeGm)|
| rgba              | Defines colors using the Red-Green-Blue-Alpha model (RGBA)            |[Click To View](https://codepen.io/michaelphamngo/pen/yLoKEwz)|
| rgb               | Defines colors using the Red-Green-Blue model (RGB)                   |[Click To View](https://codepen.io/michaelphamngo/pen/yLoKEwz)|  
| var               | Inserts the value of a custom property                                |[Click To View](https://codepen.io/michaelphamngo/pen/xxLWJwB)|  


## VII. CSS font and text

## VII.1 CSS font
1. The fonts web safe for a website: Georgia, Tahoma, Trebuchet MS, Helvetica, Verdana, Arial
2. Import font for a website
> Import google font to html

```html
<html>
    <head>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto">
    <style>
        body {
            font-family: "Roboto", sans-serif;
            font-size: 30px;    
        }
    </style>
    </head>
    <body>
        <h1>Sofia on Fire</h1>
    </body>
</html>
```

> Import google font to css

```css
@import url('https://fonts.googleapis.com/css?family=Roboto');
body {
    font-family: "Roboto", sans-serif;
    font-size: 30px;    
}
```

> Beautiful google fonts: 

- [Lato] (https://fonts.google.com/specimen/Lato)
- [Montserrat] (https://fonts.google.com/specimen/Montserrat)
- [Muli] (https://fonts.google.com/specimen/Muli)
- [Nunito] (https://fonts.google.com/specimen/Nunito)
- [Barlow] (https://fonts.google.com/specimen/Barlow)
- [Poppins] (https://fonts.google.com/specimen/Poppins)
- [Roboto] (https://fonts.google.com/specimen/Roboto)
- [Source Sans Pro] (https://fonts.google.com/specimen/Source+Sans+Pro)
- [Spectral] (https://fonts.google.com/specimen/Spectral)

> The CSS Font Property

<table>
    <thead>
        <th>Font Property</th>
        <th>Description</th>
        <th>CSS Syntax</th>        
    </thead>
    <tbody>
        <tr>
            <td>font</td>
            <td>Sets all the font properties in one declaration</td>
            <td>font: font-style font-variant font-weight font-size/line-height font-family|caption|icon|menu|message-box|small-caption|status-bar|initial|inherit;</td>            
        </tr>
        <tr>
            <td>font-style</td>
            <td>Specifies the font style for text</td>
            <td>font-style: normal|italic|oblique|initial|inherit;</td>            
        </tr>
        <tr>
            <td>font-variant </td>
            <td>Specifies whether or not a text should be displayed in a small-caps font</td>
            <td>font-variant: normal|small-caps|initial|inherit;</td>            
        </tr>
        <tr>
            <td>font-weight</td>
            <td>Specifies the weight of a font</td>
            <td>font-weight: normal|bold|bolder|lighter|number|initial|inherit;</td>            
        </tr>
        <tr>
            <td>font-size</td>
            <td>Specifies the font size of text</td>
            <td>font-size:medium|xx-small|x-small|small|large|x-large|xx-large|smaller|larger|length|initial|inherit;|</td>            
        </tr>
        <tr>
            <td>line-height</td>
            <td>Specifies the height of a line</td>
            <td>line-height: normal|number|length|initial|inherit;</td>            
        </tr>
        <tr>
            <td>font-family</td>
            <td>Specifies the font family for text</td>
            <td>font-family: family-name|generic-family|initial|inherit;</td>            
        </tr>
    </tbody>
<table>

## VII.2 CSS Text

### CSS padding, margin, and border

### CSS shadow

### CSS pseudo classes

### CSS pseudo element

### CSS list and table

### CSS background

### CSS overflow and float

### CSS position and display

### CSS animation

### CSS flexbox

### CSS grid

### Components in Website
#### Header

#### Footer

#### Navigation

#### Content

### WebPages


