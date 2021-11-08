# Review-HTML-CSS

## I. CSS Syntax

### I.1 CSS Declaration
```css
selector {
    property : value,
    property : value
}
```

### I.2 CSS Selectors
| Selector          |   Example                 |  Description                                          |
|-------------------|---------------------------|-------------------------------------------------------|
| #id               |   #theId                  | Selects the element with id = "theId"                 |
| .class            |   .theClasses             | Selects all elements with class = "theClasses"        |
| element.classes   |   p.theClasses            | Selects only p tags with class = "theClasses"         |
| *                 |   *                       | Selects all elements                                  |
| element           |   p                       | Selects all p tags                                    |
| element,element,..|   div,p                   | Selects all div tags and all p tags                   |  

### I.3 CSS Selector Combinations
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

### I.4 Import CSS to HTML file
> There are three ways of inserting a style sheet:

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

### I.5 The priority level of selectors

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

1. \* vs element
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

2. element vs attribute
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

3. attribute vs class
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

4. class vs id
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

5. id vs combine selectors
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

6. combine selectors vs inline style
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

7. !important vs inline style
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

## II. BEM (Block Element Modifier)
> BEM is a popular naming convention for classes in HTML and CSS. Its goal is to help developers better understand the relationship between the HTML and CSS in a given project.

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

## III. CSS units and functions
### III.1 CSS units
> The common css units using in a website

| Unit |  Description                                                                                   |
|------|------------------------------------------------------------------------------------------------|
| px   | Pixels (px) are relative to the viewing device. 1px is one device pixel (dot) of the display.  |
| em   | Relative to the font-size of the parent element which contains font-size                       |
| rem  | Relative to font-size of the root element                                                      |
| vw   | Relative to 1% of the width of the viewport*                                                   |
| vh   | Relative to 1% of the height of the viewport*                                                  |
| %    | Relative to the parent element                                                                 |  

### III.2 CSS functions
> The common css functions using in a website

| Function          |  Description                                                          |   Examples      |
|-------------------|-----------------------------------------------------------------------|-----------------|
| attr              | Returns the value of an attribute of the selected element             |[Click To View](https://codepen.io/michaelphamngo/pen/wvqmzaE)|
| calc              | Allows you to perform calculations to determine CSS property values   |[Click To View](https://codepen.io/michaelphamngo/pen/jOLzMrR)|
| counter           | Returns the current value of the named counter                        |[Click To View](https://codepen.io/michaelphamngo/pen/JjyLRNW)|
| linear-gradient   | Sets a linear gradient as the background image                        |[Click To View](https://codepen.io/michaelphamngo/pen/KKvoeGm)|
| rgba              | Defines colors using the Red-Green-Blue-Alpha model (RGBA)            |[Click To View](https://codepen.io/michaelphamngo/pen/yLoKEwz)|
| rgb               | Defines colors using the Red-Green-Blue model (RGB)                   |[Click To View](https://codepen.io/michaelphamngo/pen/yLoKEwz)|  
| var               | Inserts the value of a custom property                                |[Click To View](https://codepen.io/michaelphamngo/pen/xxLWJwB)|  

## IV. CSS font and text
### IV.1 CSS font
1. The fonts web safe for a website: Georgia, Tahoma, Trebuchet MS, Helvetica, Verdana, Arial
2. Import google font to html

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

> OR

```css
@import url('https://fonts.googleapis.com/css?family=Roboto');
body {
    font-family: "Roboto", sans-serif;
    font-size: 30px;    
}
```
3. Beautiful google fonts
- [Lato] (https://fonts.google.com/specimen/Lato)
- [Montserrat] (https://fonts.google.com/specimen/Montserrat)
- [Muli] (https://fonts.google.com/specimen/Muli)
- [Nunito] (https://fonts.google.com/specimen/Nunito)
- [Barlow] (https://fonts.google.com/specimen/Barlow)
- [Poppins] (https://fonts.google.com/specimen/Poppins)
- [Roboto] (https://fonts.google.com/specimen/Roboto)
- [Source Sans Pro] (https://fonts.google.com/specimen/Source+Sans+Pro)
- [Spectral] (https://fonts.google.com/specimen/Spectral)

4. The CSS Font Property
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
</table>

### IV.2 CSS Text
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
</table>

## V. CSS border, outline, box shadown, margin and padding
### V.1 CSS border and outline
1. CSS border
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
</table>

2. CSS outline is a line that is drawn around elements, outside the borders.
<table>
    <thead>
        <th>Outline Property</th>
        <th>Description</th>
        <th>CSS Syntax</th>        
    </thead>
    <tbody>
        <tr>
            <td>outline</td>
            <td>A shorthand property for outline-width, outline-style, outline-color</td>
            <td>outline: outline-width outline-style outline-color|initial|inherit;</td>            
        </tr>
        <tr>
            <td>outline-color</td>
            <td>Specifies the color of an outline.</td>
            <td>outline-color: invert|color|initial|inherit;</td>            
        </tr>
        <tr>
            <td>outline-offset</td>
            <td>Adds space between the outline and the edge or border of an element.</td>
            <td>outline-offset: length|initial|inherit;</td>            
        </tr>
        <tr>
            <td>outline-style</td>
            <td>Specifies the style of an outline.</td>
            <td>outline-style: none|hidden|dotted|dashed|solid|double|groove|ridge|inset|outset|initial|inherit;</td>            
        </tr>
        <tr>
            <td>outline-width</td>
            <td>Specifies the width of an outline.</td>
            <td>outline-width: medium|thin|thick|length|initial|inherit;</td>            
        </tr>       
    </tbody>
</table>

3. CSS Box Shadow 
<table>
    <thead>
        <th>Box Shadow Property</th>
        <th>Description</th>
        <th>CSS Syntax</th>        
    </thead>
    <tbody>
        <tr>
            <td>box-shadow</td>
            <td>Attaches one or more shadows to an element</td>
            <td>box-shadow: none|h-offset v-offset blur spread color |inset|initial|inherit;</td>            
        </tr>        
    </tbody>
</table>

### V.2 CSS Margin and Padding
> The CSS Box Model is essentially a box that wraps around every HTML element. It consists of: margins, borders, padding, and the actual content. 

<img src="https://github.com/MichaelPhamNgo/Review-HTML-CSS/blob/main/box%20model.png" alt="Box Model" height=350/>

> Note: When you set the width and height properties of an element with CSS, you just set the width and height of the content area. To calculate the full size of an element, you must also add padding, borders and margins.

Example:

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
        <tr>
            <td>box-sizing</td>
            <td>Defines how the width and height of an element are calculated: should they include padding and borders, or not.</td>
            <td>box-sizing: content-box|border-box|initial|inherit;</td>            
        </tr>        
    </tbody>
</table>

[Click to View](https://codepen.io/michaelphamngo/pen/VwzxaBg)

## VI. CSS icons
### VI.1 Fontawesome icons (https://fontawesome.com/v5.15/icons)
```html
<html>
    <head>
        <!-- Import -->
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"/>
    </head>
    <body>
        <!-- Use -->
        <i class="fab fa-html5"></i>
    </body>
</html>
```

> OR

```css
@import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css");
```

### VI.2 Bootstrap icons (https://icons.getbootstrap.com)
```html
<html>
    <head>
        <!-- Import -->
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.7.0/font/bootstrap-icons.css">
    </head>
    <body>
        <!-- Use -->
        <i class="bi bi-house"></i>
    </body>
</html>
```

> OR

```css
@import url("https://cdn.jsdelivr.net/npm/bootstrap-icons@1.7.0/font/bootstrap-icons.css");
```

### VI.3 Ionic icons (https://ionic.io/ionicons)
```html
<html>
    <head>        
    </head>
    <body>
        <!-- Use -->
        <ion-icon name="alarm-outline"></ion-icon>
        <!-- Import -->
        <script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
        <script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>
    </body>
</html>
```

### VI.4 Google icons (https://fonts.google.com/icons?selected=Material+Icons)
```html
<html>
    <head>
        <!-- Import -->
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
    </head>
    <body>
        <!-- Use -->
        <span class="material-icons">home</span>
    </body>
</html>
```

### VI.5 Line Awesome icons (https://icons8.com/line-awesome)
```html
<html>
    <head>
        <!-- Import -->
        <link rel="stylesheet" href="https://maxst.icons8.com/vue-static/landings/line-awesome/font-awesome-line-awesome/css/all.min.css">
    </head>
    <body>
        <!-- Use -->
        <i class="las la-cat"></i>
    </body>
</html>
```
## VII. CSS link, list and table
### VII.1 CSS link
- The four links states are:
    1. a:link (a normal, unvisited link)
    2. a:visited (a link the user has visited)
    3. a:hover (a link when the user mouses over it)
    4. a:active (a link the moment it is clicked)

- The CSS properties usually go with a link
    1. font
    2. color
    3. background
    4. text-decoration
    5. padding
    6. margin
    7. border
    8. display
    9. text-align
    10. ...

### VII.2 CSS list
- In HTML, there are two main types of lists:
    1. unordered lists (ul) - the list items are marked with bullets
    2. ordered lists (ol) - the list items are marked with numbers or letters

<table>    
    <tbody>
        <tr>
            <td>list-style</td>
            <td>A shorthand for the following properties.</td>
            <td>list-style: list-style-type list-style-position list-style-image|initial|inherit;</td>            
        </tr>
        <tr>
            <td>list-style-type</td>
            <td>Specifies the type of list-item marker in a list.</td>
            <td>list-style-type: disc|circle|none|square|decimal|lower-alpha|lower-latin|lower-roman|upper-alpha|upper-latin|upper-roman;</td>            
        </tr>  
        <tr>
            <td>list-style-image</td>
            <td>Replaces the list-item marker with an image.</td>
            <td>list-style-image: none|url|initial|inherit;</td>            
        </tr>   
        <tr>
            <td>list-style-position</td>
            <td>Specifies the position of the list-item markers (bullet points).</td>
            <td>list-style-position: inside|outside|initial|inherit;</td>            
        </tr>     
    </tbody>
</table>

### VII.3 CSS table
- All table's properties
<table>        
    <tr>
        <td>Table's property</td>
        <td>Description</td>        
        <td>Example</td>        
    </tr>
    <tr>
        <td>table</td>
        <td>The table itself</td>        
        <td><a href="https://codepen.io/michaelphamngo/pen/rNzvQJZ">Click To View</a></td>
    </tr>  
    <tr>
        <td>thead</td>
        <td>The table header</td>              
        <td><a href="https://codepen.io/michaelphamngo/pen/rNzvQJZ">Click To View</a></td>
    </tr>   
    <tr>
        <td>tbody</td>
        <td>The table body</td>        
        <td><a href="https://codepen.io/michaelphamngo/pen/rNzvQJZ">Click To View</a></td>
    </tr>       
    <tr>
        <td>tfoot</td>
        <td>The table footer</td>        
        <td><a href="https://codepen.io/michaelphamngo/pen/rNzvQJZ">Click To View</a></td>
    </tr>    
    <tr>
        <td>tr</td>
        <td>A table row</td>        
        <td><a href="https://codepen.io/michaelphamngo/pen/rNzvQJZ">Click To View</a></td>
    </tr>  
    <tr>
        <td>th</td>
        <td>A table cell that is a header</td>        
        <td><a href="https://codepen.io/michaelphamngo/pen/rNzvQJZ">Click To View</a></td>
    </tr> 
    <tr>
        <td>td</td>
        <td>A table cell that is data</td>        
        <td><a href="https://codepen.io/michaelphamngo/pen/rNzvQJZ">Click To View</a></td>
    </tr> 
    <tr>
        <td>caption</td>
        <td>Defines a table caption</td>        
        <td><a href="https://codepen.io/michaelphamngo/pen/rNzvQJZ">Click To View</a></td>
    </tr>  
    <tr>
        <td>colgroup</td>
        <td>Specifies a group of one or more columns in a table for formatting</td>       
        <td><a href="https://codepen.io/michaelphamngo/pen/rNzvQJZ">Click To View</a></td> 
    </tr> 
    <tr>
        <td>col</td>
        <td>Specifies column properties for each column within a colgroup element</td>    
        <td><a href="https://codepen.io/michaelphamngo/pen/rNzvQJZ">Click To View</a></td>    
    </tr> 
</table>

- All table's attributes
<table>        
    <tr>
        <td>Table's attribute</td>
        <td>Element(s) Found On</td>
        <td>Description</td>        
        <td>Example</td>        
    </tr>
    <tr>
        <td>colspan</td>
        <td>th, td</td>  
        <td>Extends a cell to be as wide as 2 or more cells</td>
        <td><a href="https://codepen.io/michaelphamngo/pen/rNzvoxg">Click To View</a></td> 
    </tr>  
    <tr>
        <td>rowspan</td>
        <td>th, td</td>  
        <td>Extends a cell to be as tall as 2 or more cells</td>
        <td><a href="https://codepen.io/michaelphamngo/pen/rNzvoxg">Click To View</a></td> 
    </tr>       
    <tr>
        <td>span</td>
        <td>col</td>  
        <td>Makes the column apply to more to 2 or more columns</td>
        <td><a href="https://codepen.io/michaelphamngo/pen/rNzvQJZ">Click To View</a></td> 
    </tr>
</table>

- All CSS properties for a table
<table>        
    <tr>
        <td>Property</td>     
        <td>Description</td>        
        <td>CSS Syntax</td>    
        <td>Example</td>          
    </tr>
    <tr>
        <td>border</td>        
        <td>Add a border to a table</td>
        <td>border: border-width border-style border-color|initial|inherit;</td>    
        <td><a href="https://codepen.io/michaelphamngo/pen/rNzvoxg">Click To View</a></td>            
    </tr>  
    <tr>
        <td>width</td>        
        <td>Sets the width of a table</td>
        <td>width: auto|value|initial|inherit;</td>  
        <td><a href="https://codepen.io/michaelphamngo/pen/rNzvoxg">Click To View</a></td>
    </tr>   
    <tr>
        <td>height</td>        
        <td>Sets the height of a table</td>
        <td>height: auto|length|initial|inherit;</td>  
        <td><a href="https://codepen.io/michaelphamngo/pen/rNzvoxg">Click To View</a></td>
    </tr>    
    <tr>
        <td>text-align</td>        
        <td>Specifies the horizontal alignment of text in an element</td>
        <td>text-align: left|right|center|justify|initial|inherit;</td>  
        <td><a href="https://codepen.io/michaelphamngo/pen/rNzvoxg">Click To View</a></td>
    </tr> 
    <tr>
        <td>vertical-align</td>        
        <td>Sets the vertical alignment of an element</td>
        <td>vertical-align: baseline|top|middle|bottom;</td>  
        <td><a href="https://codepen.io/michaelphamngo/pen/rNzvoxg">Click To View</a></td>
    </tr> 
    <tr>
        <td>border-collapse</td>        
        <td>Sets whether table borders should collapse into a single border or be separated as in standard HTML</td>
        <td>border-collapse: separate|collapse|initial|inherit;</td>  
        <td><a href="https://codepen.io/michaelphamngo/pen/rNzvoxg">Click To View</a></td>
    </tr>  
    <tr>
        <td>border-spacing</td>        
        <td>Sets the distance between the borders of adjacent cells</td>
        <td>border-spacing: length|initial|inherit;</td>  
        <td><a href="https://codepen.io/michaelphamngo/pen/rNzvoxg">Click To View</a></td>
    </tr> 
</table>

### CSS inline-block

### CSS align

### CSS overflow

### CSS opacity, visibility and display

### CSS pseudo classes

### CSS pseudo element

### CSS background

### CSS bimage

### CSS overflow and float

### CSS position and display

### CSS animation

### CSS flexbox

### CSS grid

### CSS Tooltips

### Components in Website

#### Header

#### Footer

#### Navigation

#### Dropdown

#### Image Gallery

#### CSS Image Sprites

#### Forms

#### Content

#### Pagination

#### Buttons

#### AutoComplete Input

### WebPages

### CSS Responsive
