---
layout: post
title: Coding Conventions
description: "Coding Conventions: this short lesson is a refresher on programming etiquette and common practice. Web-Craft is an online curriculum written to help design students become fluent with the web."
category: fundamentals
---

Before you write your first line of code, it is important that you know how to write code. If you’re a programmer or have from a scripting or programming background, you might already know what this means. The learning curve of web-craft can be steep because progressing beyond the basics requires proper form, just like writing, music or sports. This lesson is an introduction to the conventions, common practice and general guidlines of writing HTML and CSS correctly, legibly and responsibly.

<!-- more start -->
   
## 1. General Practice {: .hN .beta #general}

There is only one universal rule when it comes to coding: **always be consistent**. Whichever system or pattern you decide on adopting, either the ones outlined below or your own, they should be stuck to like glue. Consistency (and thus reliability) saves time and makes it easier for others to understand your work.

### 1.1 Naming Files {: .hN .gamma #naming-files}

In the days of MS-DOS, all files followed the `8.3` naming system: there could be a maximum of 8 characters in the file name before the period, and after the period (the file extension) there were no more than 3 characters. It may be old-fashioned, but following the `8.3` system can still be a good idea. Your file names will be short, easy to type and if you do it right, easy to remember.

	g7a2C9.txt    fatponys.jpg    a_bad_file-name.doc

The first two files in the above example have valid `8.3` filenames&mdash;the third is not. Even if you don't strictly follow the 8-character restricton and use longer file names, the principles can still apply.

There are several things to remember no matter what system you use. Not all special symbols are allowed in file names, so to be safe you should stick to using hyphens `-`, underscores `_`, parentheses `()` and square brackets `[]`.

	my_super_file-name.txt    this-won't,work.doc    but(this)will.jpg

Readability is paramount&mdash;use common sense when abbreviating words and make sure your file names are easy to read at a glance. Stay away from entirely upper-case or lower-case names with multiple words, unless you use plenty of special symbols. A common style for multi-word naming is _camel-case_. In camel-case, words are joined together without spaces, but the first letter of each new word is capitalized. This is very easy to read and avoids much of the confusion caused by special symbols.

	ALLCAPSPAGE.html    lowercasepage.html    camelCasePage.html
	
The camel-case file name in the example above is clearly the most legible.

Though this section has focused on file-naming conventions, these principles also apply to naming objects or entities in the code itself. Each coding language has its own syntactical conventions, but consistency across naming files, classes and ids in HTML/CSS and variables in Javascript is handy.


### 1.2 Readability {: .hN .gamma #readability}

Though code is chiefly written to be interpreted by machines, we should also write code to be understood by humans. The readability of the code you write becomes very important when working on long-term projects, maintaining a large code-base, inheriting a pre-existing project or handing a project off to someone new.

> A programmer's job is to write code that is as readable as it is functional.
> {: .freight .delta}
> [Harry Roberts, for Smashing Magazine](http://coding.smashingmagazine.com/2011/08/26/writing-css-for-others/)
> {: .attribution .micro}


#### 1.2.1 White Space {: .hN .delta #white-space}

There is a constant tension between readability and efficiency in code. With every additional character, the file-size of a document increases, and will take longer to display to the user. Though it is tempting to code with as little white space as possible to save bytes, liberal use of line breaks and spacing can make code not only more readable, but even pleasing to work with. Compare below the same code written without ample white space,

	.dark-area{
	background-color:#111;/*fallback*/
	background-color:rgba(5,5,5,0.85);
	background-image:url(../img/bg-dark.png);
	color: #f0f0f0;/*fallback*/
	color: rgb(240,240,240);}

and with it:

	.dark-area {
		background-color: #111; /* fallback */
		background-color: rgba(5, 5, 5, 0.85);
		
		background-image: url(../img/bg-dark.png);
		
		color: #f0f0f0; /* fallback */
		color: rgb(240, 240, 240);
	}
	
Clearly the latter is more readable, easier to understand and easier to edit. 

> We prefer readability over file-size savings \[…] Plenty of whitespace is encouraged, along with ASCII art, where appropriate. There is no need for any developer to purposefully compress HTML or CSS, nor obfuscate JavaScript.
> {: .freight .delta}
> [isobar Front-End Coding Standards](http://na.isobar.com/standards)
> {: .attribution .micro}

To keep code clean and readable, make liberal use of line breaks and spacing within single lines. Common convention is for documents to follow longstanding English reading conventions. For example, adding one space after each comma and colon (and semi-colon where applicable), but no spaces immediately inside the right and left sides of parenthesis `()`. Additionally, braces `{}` should always appear on the same line as their preceding argument or selector. In all of these cases, the rules of syntax are more important (if adding extra spaces in a line of code will invalidate or break it, they should be omitted).

Conventions for white space in HTML and CSS will be touched on further in §2 and §3, respectively.


#### 1.2.2 Indenting {: .hN .delta #indenting}

Closely tied with white space is indentation. In the example code above, a large part of what made the first sample difficut to read was the poor indentation. Indenting lines of code introduce a hierarchy to the document, not only making it easier to scan, but also communicating information about the structure of the code visually.

	<article>
		<h1>Shopping List</h1>
		<ul>
			<li>Broccoli</li>
			<li>Eggs</li>
			<li>Pie Crust</li>
			<li>Milk
				<ul>
					<li>Skim</li>
					<li>Partly-Skimmed</li>
					<li>Homogenized</li>
				</ul>
			</li>
		</ul>
	</article>

The above example shows a high level of organization and nesting, and implies a clear hierarchy of information through the indentation of each line.

#### 1.2.3 Character Case {: .hN .delta #character-case}

HTML markup can be written in either lower-case or upper-case characters, and you can even switch between the two in the same element or attribute. In practice, however, you should always write HTML markup consistently in one case or the other, and not mix the two.

	<H1 CLASS="masthead">My Title</H1>
	<FigURE>
	    <iMg SRC="Kittens.JPG">
	</FIgurE>
	<p>My awesome CAPTION.</P>

It might work, but it isn't pretty. There are some advantages to choosing one style over the other, but conventional wisdom currently favors writing HTML in lower-case. Lower-case markup is often more legible & more readable than if it were written in uppercase.

Sticking to either upper- or lower-case characters will also prevent common problems that arise from working with mixed-case code. In the following example, an upper-case “I”, a lower-case “l”, and the number “1” are arranged side-by-side. Can you tell them apart?

	I l 1
	
Some fonts (especially monospace ones) are good at keeping these characters distinct, but many _sans serif_ fonts are not&mdash;so it's best to just be safe.
  
Lastly, a more technical reason to consistently use lowercase is server compatibility. Many websites are hosted on servers running on Linux (or other \*NIX-based operating systems). In Linux, file names are always case-sensitive, as opposed to on Windows operating systems where the are not. On Windows, these file paths all point to the same image, but on Linux they don’t:

	kitty.jpg    Kitty.jpg    KITTY.JPG
	
If you write some new code and your site starts throwing 404 errors, it could very well be because you used lowercase file names but wrote your HTML markup in uppercase or mixed case. To avoid any confusion, this author recommends always writing HTML in lower-case characters and using a simple, consistent file-naming convention like camelCase (see [§1.1 Naming Files](#naming-files)).



## 2. HTML Etiquette {: .hN .beta #html-etiquette}

Unlike writing in English - or any other natural language - writing clean HTML markup means making sure both human and computer readers can understand what you’re writing. This means striking a balance between efficiency and readability in how you format and organize code, and making sure you’re writing concise, syntactically-correct markup.


### 2.1 Something {: .hN .gamma #something}


<!-- more end -->