# Review-HTML-CSS

## I. CSS Syntax
```css
selector {
    property : value,
    property : value
}
```


## II. CSS Selectors and Combinations
### II.1 CSS Selectors

| Selector          |   Example                 |  Description                                          |
|-------------------|---------------------------|-------------------------------------------------------|
| #id               |   #theId                  | Selects the element with id = "theId"                 |
| .class            |   .theClasses             | Selects all elements with class = "theClasses"        |
| element.classes   |   p.theClasses            | Selects only p tags with class = "theClasses"         |
| *                 |   *                       | Selects all elements                                  |
| element           |   p                       | Selects all p tags                                    |
| element,element,..|   div,p                   | Selects all div tags and all p tags                   |  

### II.2 CSS Combinations
- There are four different combinators in CSS:
    - The descendant selector (space) matches all elements that are descendants of a specified element.
    - The child selector (>) selects all elements that are the children of a specified element.
    - The adjacent sibling selector (+) is used to select an element that is directly after another specific element.
    - The general sibling selector (~) selects all elements that are next siblings of a specified element.
    
| Selector          | Example |  Description                                          |
|-------------------|---------|-------------------------------------------|
|element element    | div p   | Selects all p elements inside div elements                 |
|element>element    | div > p | Selects all p elements where the parent is a div element        |
|element+element    | div + p | Selects the first p element that are placed immediately after div elements |
|element1~element2  | p ~ ul  | Selects every ul element that are preceded by a p element |

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

### VII.1 CSS font
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
        <h1>Roboto</h1>
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
            <td>font-size:medium|xx-small|x-small|small|large|x-large|xx-large|smaller|larger|length|initial|inherit;</td>            
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

### VII.2 CSS Text
<table>
    <thead>
        <th>Text Property</th>
        <th>Description</th>
        <th>CSS Syntax</th>        
    </thead>
    <tbody>
        <tr>
            <td>color</td>
            <td>Specifies the color of text</td>
            <td>color: color|initial|inherit;</td>            
        </tr>
        <tr>
            <td>text-align</td>
            <td>Specifies the horizontal alignment of text in an element</td>
            <td>text-align: left|right|center|justify|initial|inherit;</td>            
        </tr>
        <tr>
            <td>text-decoration</td>
            <td>Specifies the decoration added to text, and is a shorthand property</td>
            <td>text-decoration: overline|underline|line-through  color solid|wavy|double;</td>            
        </tr>
        <tr>
            <td>text-indent</td>
            <td>Specifies the indentation of the first line in a text-block</td>
            <td>text-indent: length|initial|inherit;</td>            
        </tr>
        <tr>
            <td>text-justify</td>
            <td>Specifies the justification method of text when text-align is set to "justify"</td>
            <td>text-justify: auto|inter-word|inter-character|none|initial|inherit;</td>            
        </tr>
        <tr>
            <td>text-overflow</td>
            <td>Specifies how overflowed content that is not displayed should be signaled to the user. It can be clipped, display an ellipsis (...), or display a custom string</td>
            <td>text-overflow: clip|ellipsis|string|initial|inherit;</td>            
        </tr>
        <tr>
            <td>text-shadow</td>
            <td>Adds shadow to text</td>
            <td>text-shadow: h-shadow v-shadow blur-radius color|none|initial|inherit;</td>            
        </tr>
        <tr>
            <td>text-transform</td>
            <td>Controls the capitalization of text</td>
            <td>text-transform: none|capitalize|uppercase|lowercase|initial|inherit;</td>            
        </tr>
    </tbody>
<table>

## VIII. CSS border, margin and padding
### VIII.1 CSS border
<table>
    <thead>
        <th>Border Property</th>
        <th>Description</th>
        <th>CSS Syntax</th>        
    </thead>
    <tbody>
        <tr>
            <td>border</td>
            <td>A shorthand property for border-width, border-style, border-color</td>
            <td>border: border-width border-style border-color|initial|inherit;</td>            
        </tr>
        <tr>
            <td>border-width</td>
            <td>Sets the width of an element's four borders. This property can have from one to four values.</td>
            <td>border-width: medium|thin|thick|length|initial|inherit;</td>            
        </tr>
        <tr>
            <td>border-style</td>
            <td>Sets the style of an element's four borders. This property can have from one to four values.</td>
            <td>border-style: none|hidden|dotted|dashed|solid|double|groove|ridge|inset|outset|initial|inherit;</td>            
        </tr>
        <tr>
            <td>border-color</td>
            <td>Sets the color of an element's four borders. This property can have from one to four values.</td>
            <td>border-color: color|transparent|initial|inherit;</td>            
        </tr>
        <tr>
            <td>border-image</td>
            <td>Allows you to specify an image to be used as the border around an element.</td>
            <td>border-image: source slice width outset repeat|initial|inherit;</td>            
        </tr>
        <tr>
            <td>border-radius</td>
            <td>Defines the radius of the element's corners.</td>
            <td>border-radius: 1-4 length|% initial|inherit;</td>            
        </tr>        
    </tbody>
<table>

### VIII.2 CSS Margin and Padding
> The CSS Box Model is essentially a box that wraps around every HTML element. It consists of: margins, borders, padding, and the actual content. 
-----------------------------------------
|                 Margin                |  
|  ---------------Border-------------|  | 
|  |              Padding            |  |    
|  |  ----------------------------   |  |    
|  |  |                          |   |  | 
|  |  |          Content         |   |  |
|  |  |__________________________|   |  |
|  |             Padding             |  |
|  |_____________Border______________|  |
|                Margin                 |  
|_______________________________________|

> Note: When you set the width and height properties of an element with CSS, you just set the width and height of the content area. To calculate the full size of an element, you must also add padding, borders and margins.

```css
div {
  width: 320px;
  padding: 10px;
  border: 5px solid gray;
  margin: 0;
}
```

> Here is the total width = 320px + 10px + 10px + 5px + 5px = 350px

<table>    
    <tbody>
        <tr>
            <td>margin</td>
            <td>Sets the margins for an element. This property can have from one to four values.</td>
            <td>margin: length|auto|initial|inherit;</td>            
        </tr>
        <tr>
            <td>padding</td>
            <td>Sets the paddings for an element. This property can have from one to four values.</td>
            <td>padding: length|initial|inherit;</td>            
        </tr>        
    </tbody>
<table>

### CSS box shadow

### CSS outline

### CSS icon

### CSS link

### CSS list

### CSS table

### CSS max width and min width

### CSS inline-block

### CSS align

### CSS pseudo classes

### CSS pseudo element

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


