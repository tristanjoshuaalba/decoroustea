---
title: Impossible TicTacToe 
author: Tristan Alba
date: 2020-09-16
hero: ./images/screenshot-tictactoe.png
excerpt: A simple game made purely using HTML, CSS, and JS. 
---
## Overview
At this point, I just finished going over the HTML/CSS and the Basic JavaScript section of Andrei Neagoie's Zero To Mastery Web Development Course. I was thinking of an exercise where I can apply all I have learned so far. I didn't want to do boring JS problems so I opted for a fun tictactoe game.  

### How do you play Tic Tac Toe?
Quoting [Exploratorium.edu](https://www.exploratorium.edu/brain_explorer/tictactoe.html) explanation:

1. The game is played on a grid that's 3 squares by 3 squares.

2. You are X, your friend (or the computer in this case) is O. Players take turns putting their marks in empty squares.

3. The first player to get 3 of her marks in a row (up, down, across, or diagonally) is the winner.

4. When all 9 squares are full, the game is over. If no player has 3 marks in a row, the game ends in a tie.

> Tic-Tac-Toe (along with a lot of other games) involves looking ahead and trying 
> to figure out what the person playing against you might do next.



## What I did: 
Actually, this is not my first time implementing Bootstrap to create landing pages. Bootstrap has been around for a long time. Since I've been putting off studying web development for years now, I always have to revisit HTML + CSS basics which includes some Bootstrap exercise. 

Arguably, I can say that the most difficult aspect in styling (not just in Bootstrap) is alignment, specifically: center align. To manage this, I made use of the `d-flex` the Bootstrap class that allows you to transform **direct children elements** into flex items. 

To organize other elements vertically, I just made use of Bootstrap's Grid, having each line as a single full row. 

To make it look nice, I made use of a high resolution image from Unsplash and utilized color schemes similar to that of the background image. Typography pairing can also be employed to make text content look appealing. 

```html
<body>
    <div class="container d-flex align-items-center h-100">
        <div class="row w-100">
            <header class="text-center col-12">
                <p class="reg-text"><span class="em-text">HANDCRAFTED / </span> FRESHLY ROASTED</p>
                <br>
                <h1>Eclipse Coffee</h1>
            </header>
            <div class="buffer" style="height:12rem"> </div>
            <section class="text-center col-12">
                <p class="reg-text" id="sub">
                    Indulge in a new elevated coffee experience prepared with the finest single-origin fair-trade certified beans crafted by our very own expert coffee brewers.
                </p>
            </section>

            <div class="buffer" style="height:12rem"> </div>
            <section class="text-center col-12">
                <a href="www.google.com">
                    <div class="btn-xl"> PREORDER NOW </div>
                </a>
            </section>
        </div>

    </div>
```
## Check it out:
- [Bootstrap Coffeeshop Landing Page](http://bootstrap-coffee-shop.decoroustea.xyz/)
- [Github Link](https://github.com/tristanjoshuaalba/sandboxwd/tree/master/coffeeShop)

<div className="Image__Small">
  <img
    src="./images/closeup-coffee-shop.png"
    title="Responsive Web Design Using Bootstrap"
    alt="Mobile Ready Web Design for a Coffee Shop"
  />
</div>

<div className="Image__Small">
  <img
    src="./images/responsive-layout-coffee-shop.png"
    title="Responsive Web Design Using Bootstrap"
    alt="Mobile Ready Web Design for a Coffee Shop"
  />
</div>



## Helpful References:
- [Bootstrap 3.4 Documentation](https://getbootstrap.com/docs/3.4/)

<!-- My first post using `@narative/gatsby-theme-novela`. Novela is built by the team at [Narative](https://narative.co), and built for everyone that loves the web.

## Headers

# H1

It is recommended to NOT use H1s as it is reserved for the article heading. Any H1 is set as an H2.

## H2

### H3

#### H4

##### H5

###### H6

## Emphasis

Emphasis, aka italics, with _asterisks_ or _underscores_.

Strong emphasis, aka bold, with **asterisks** or **underscores**.

Combined emphasis with **asterisks and _underscores_**.

Strikethrough uses two tildes. ~~Scratch this.~~

## Lists

1. First ordered list item
2. Another item
3. Actual numbers don't matter, just that it's a number

- Unordered list can use asterisks

* Or minuses

- Or pluses

## Links

[I'm an inline-style link](https://www.google.com)

[I'm an inline-style link with title](https://www.google.com "Google's Homepage")

[I'm a reference-style link][arbitrary case-insensitive reference text]

[I'm a relative reference to a repository file](../blob/master/LICENSE)

[You can use numbers for reference-style link definitions][1]

Or leave it empty and use the [link text itself].

URLs and URLs in angle brackets will automatically get turned into links.
http://www.example.com or <http://www.example.com> and sometimes
example.com (but not on Github, for example).

Some text to show that the reference links can follow later.

[arbitrary case-insensitive reference text]: https://www.mozilla.org
[1]: http://slashdot.org
[link text itself]: http://www.reddit.com

## Images

<div className="Image__Small">
  <img
    src="./images/article-image-2.jpg"
    title="Logo Title Text 1"
    alt="Alt text"
  />
</div>

Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry.

## Code and Syntax Highlighting

```javascript
var s = "JavaScript syntax highlighting";
alert(s);
```

```
No language indicated, so no syntax highlighting.
But let's throw in a <b>tag</b>.
```

### JSX

```jsx
import React from "react";
import { ThemeProvider } from "theme-ui";
import theme from "./theme";

export default props => (
  <ThemeProvider theme={theme}>{props.children}</ThemeProvider>
);
```

## Blockquotes

Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing.

> Blockquotes are very handy in email to emulate reply text.
> This line is part of the same quote.

Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum

## Horizontal Rule

Horizontal Rule

Three or more...

---

Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum

---

Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum -->
