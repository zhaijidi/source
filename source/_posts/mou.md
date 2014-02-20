title: Mou 使用帮助
date: 2014年2月20日 下午4:37
tags: [Mou,Markdown] 
categories: 
- 技术杂项

--- 


# Mou

![Mou icon](http://mouapp.com/Mou_128.png)

### Shortcuts 快捷键

#### View

* Toggle live preview（`显示或隐藏预览`）: Shift + Cmd + I
* Toggle Words Counter（`显示字符数`）: Shift + Cmd + W
* Toggle Transparent（`窗口透明`）: Shift + Cmd + T
* Toggle Floating: Shift + Cmd + F
* Left/Right = 1/1（`编辑和预览窗口分屏比例`）: Cmd + 0
* Left/Right = 3/1（`编辑和预览窗口分屏比例`）: Cmd + +
* Left/Right = 1/3（`编辑和预览窗口分屏比例`）: Cmd + -
* Toggle Writing orientation（`文字方向`）: Cmd + L
* Toggle fullscreen（`全屏`）: Control + Cmd + F

#### Actions

* Copy HTML（`拷贝HTML`）: Option + Cmd + C
* Strong（***`加粗`***）: Select text, Cmd + B
* Emphasize（*`斜体`*）: Select text, Cmd + I
* Inline Code（`着色`）: Select text, Cmd + K
* Strikethrough（~~`删除线`~~）: Select text, Cmd + U
* Link（`插入超链接`）: Select text, Control + Shift + L
* Image（`插入图片`）: Select text, Control + Shift + I
* Select Word（`选中当前字符`）: Control + Option + W
* Select Line（`选中当前行`）: Shift + Cmd + L
* Select All（`全选`）: Cmd + A
* Deselect All（`取消选中`）: Cmd + D
* Convert to Uppercase（`选中字符变大写`）: Select text, Control + U
* Convert to Lowercase（`选中字符变小写`）: Select text, Control + Shift + U
* Convert To Titlecase: Select Text, Control + Option + U
* Convert to List（`选中行变成list`）: Select lines, Control + L
* Convert to Blockquote（`选中行变成引用`）: Select lines, Control + Q
* Convert to H1（`变为H1`）: Cmd + 1
* Convert to H2（`变为H2`）: Cmd + 2
* Convert to H3（`变为H3`）: Cmd + 3
* Convert to H4（`变为H4`）: Cmd + 4
* Convert to H5（`变为H5`）: Cmd + 5
* Convert to H6（`变为H6`）: Cmd + 6
* Convert Spaces to Tabs(`插入tab`): Control + [
* Convert Tabs to Spaces（`删除tab`）: Control + ]
* Insert Current Date（`插入当前日期`）: Control + Shift + 1
* Insert Current Time（`插入当前时间`）: Control + Shift + 2
* Insert entity <（`插入&lt;`）: Control + Shift + ,
* Insert entity >（`插入&gt;`）: Control + Shift + .
* Insert entity &（`插入&amp;`）: Control + Shift + 7
* Insert entity Space: Control + Shift + Space
* Insert Scriptogr.am Header（`插入Scriptogr.am文件头信息`）: Control + Shift + G
* Shift Line Left（`选中行右移`）: Select lines, Cmd + [
* Shift Line Right（`选中行左移`）: Select lines, Cmd + ]
* New Line（`插入新行`）: Cmd + Return
* Comment（`插入注释`）: Cmd + /
* Hard Linebreak（`插入换行符`）: Control + Return

<!--more-->
#### Edit

* Auto complete current word（`自动补全`）: Esc
* Find（`查找`）: Cmd + F
* Close find bar（`关闭查找`）: Esc

#### Post

* Post on Scriptogr.am: Control + Shift + S
* Post on Tumblr: Control + Shift + T

#### Export

* Export HTML（`导出HTML`）: Option + Cmd + E
* Export PDF（`导出PDF`）:  Option + Cmd + P


### And more?

Don't forget to check Preferences, lots of useful options are there.

Follow [@chenluois](http://twitter.com/chenluois) on Twitter for the latest news.

For feedback, use the menu `Help` - `Send Feedback`

## Overview

**Mou**, the missing Markdown editor for *web developers*.

### Syntax

#### Strong and Emphasize 

**strong** or __strong__ ( Cmd + B )

*emphasize* or _emphasize_ ( Cmd + I )

**Sometimes I want a lot of text to be bold.
Like, seriously, a _LOT_ of text**

#### Blockquotes

> Right angle brackets &gt; are used for block quotes.

#### Links and Email

An email <example@example.com> link.

Simple inline link <http://chenluois.com>, another inline link [Smaller](http://smallerapp.com), one more inline link with title [Resize](http://resizesafari.com "a Safari extension").

A [reference style][id] link. Input id, then anywhere in the doc, define the link with corresponding id:

[id]: http://mouapp.com "Markdown editor on Mac OS X"

Titles ( or called tool tips ) in the links are optional.

#### Images

An inline image ![Smaller icon](http://smallerapp.com/favicon.ico "Title here"), title is optional.

A ![Resize icon][2] reference style image.

[2]: http://resizesafari.com/favicon.ico "Title"

#### Inline code and Block code

Inline code are surround by `backtick` key. To create a block code:

	Indent each line by at least 1 tab, or 4 spaces.
    var Mou = exactlyTheAppIwant; 

####  Ordered Lists

Ordered lists are created using "1." + Space:

1. Ordered list item
2. Ordered list item
3. Ordered list item

#### Unordered Lists

Unordered list are created using "*" + Space:

* Unordered list item
* Unordered list item
* Unordered list item 

Or using "-" + Space:

- Unordered list item
- Unordered list item
- Unordered list item

#### Hard Linebreak

End a line with two or more spaces will create a hard linebreak, called `<br />` in HTML. ( Control + Return )  
Above line ended with 2 spaces.

#### Horizontal Rules

Three or more asterisks or dashes:

***

---

- - - -

#### Headers

Setext-style:

This is H1
==========

This is H2
----------

atx-style:

# This is H1
## This is H2
### This is H3
#### This is H4
##### This is H5
###### This is H6


### Extra Syntax

#### Footnotes

Footnotes work mostly like reference-style links. A footnote is made of two things: a marker in the text that will become a superscript number; a footnote definition that will be placed in a list of footnotes at the end of the document. A footnote looks like this:

That's some text with a footnote.[^1]

[^1]: And that's the footnote.


#### Strikethrough

Wrap with 2 tilde characters:

~~Strikethrough~~


#### Fenced Code Blocks

Start with a line containing 3 or more backticks, and ends with the first line with the same number of backticks:

```
Fenced code blocks are like Stardard Markdown’s regular code
blocks, except that they’re not indented and instead rely on
a start and end fence lines to delimit the code block.
```

#### Tables

A simple table looks like this:

First Header | Second Header | Third Header
------------ | ------------- | ------------
Content Cell | Content Cell  | Content Cell
Content Cell | Content Cell  | Content Cell

If you wish, you can add a leading and tailing pipe to each line of the table:

| First Header | Second Header | Third Header |
| ------------ | ------------- | ------------ |
| Content Cell | Content Cell  | Content Cell |
| Content Cell | Content Cell  | Content Cell |

Specify alignement for each column by adding colons to separator lines:

First Header | Second Header | Third Header
:----------- | :-----------: | -----------:
Left         | Center        | Right
Left         | Center        | Right

 
### Shortcuts 快捷键

#### View

* Toggle live preview（`显示或隐藏预览`）: Shift + Cmd + I
* Toggle Words Counter（`显示字符数`）: Shift + Cmd + W
* Toggle Transparent（`窗口透明`）: Shift + Cmd + T
* Toggle Floating: Shift + Cmd + F
* Left/Right = 1/1（`编辑和预览窗口分屏比例`）: Cmd + 0
* Left/Right = 3/1（`编辑和预览窗口分屏比例`）: Cmd + +
* Left/Right = 1/3（`编辑和预览窗口分屏比例`）: Cmd + -
* Toggle Writing orientation（`文字方向`）: Cmd + L
* Toggle fullscreen（`全屏`）: Control + Cmd + F

#### Actions

* Copy HTML（`拷贝HTML`）: Option + Cmd + C
* Strong（***`加粗`***）: Select text, Cmd + B
* Emphasize（*`斜体`*）: Select text, Cmd + I
* Inline Code（`着色`）: Select text, Cmd + K
* Strikethrough（~~`删除线`~~）: Select text, Cmd + U
* Link（`插入超链接`）: Select text, Control + Shift + L
* Image（`插入图片`）: Select text, Control + Shift + I
* Select Word（`选中当前字符`）: Control + Option + W
* Select Line（`选中当前行`）: Shift + Cmd + L
* Select All（`全选`）: Cmd + A
* Deselect All（`取消选中`）: Cmd + D
* Convert to Uppercase（`选中字符变大写`）: Select text, Control + U
* Convert to Lowercase（`选中字符变小写`）: Select text, Control + Shift + U
* Convert To Titlecase: Select Text, Control + Option + U
* Convert to List（`选中行变成list`）: Select lines, Control + L
* Convert to Blockquote（`选中行变成引用`）: Select lines, Control + Q
* Convert to H1（`变为H1`）: Cmd + 1
* Convert to H2（`变为H2`）: Cmd + 2
* Convert to H3（`变为H3`）: Cmd + 3
* Convert to H4（`变为H4`）: Cmd + 4
* Convert to H5（`变为H5`）: Cmd + 5
* Convert to H6（`变为H6`）: Cmd + 6
* Convert Spaces to Tabs(`插入tab`): Control + [
* Convert Tabs to Spaces（`删除tab`）: Control + ]
* Insert Current Date（`插入当前日期`）: Control + Shift + 1
* Insert Current Time（`插入当前时间`）: Control + Shift + 2
* Insert entity <（`插入&lt;`）: Control + Shift + ,
* Insert entity >（`插入&gt;`）: Control + Shift + .
* Insert entity &（`插入&amp;`）: Control + Shift + 7
* Insert entity Space: Control + Shift + Space
* Insert Scriptogr.am Header（`插入Scriptogr.am文件头信息`）: Control + Shift + G
* Shift Line Left（`选中行右移`）: Select lines, Cmd + [
* Shift Line Right（`选中行左移`）: Select lines, Cmd + ]
* New Line（`插入新行`）: Cmd + Return
* Comment（`插入注释`）: Cmd + /
* Hard Linebreak（`插入换行符`）: Control + Return

#### Edit

* Auto complete current word（`自动补全`）: Esc
* Find（`查找`）: Cmd + F
* Close find bar（`关闭查找`）: Esc

#### Post

* Post on Scriptogr.am: Control + Shift + S
* Post on Tumblr: Control + Shift + T

#### Export

* Export HTML（`导出HTML`）: Option + Cmd + E
* Export PDF（`导出PDF`）:  Option + Cmd + P


### And more?

Don't forget to check Preferences, lots of useful options are there.

Follow [@chenluois](http://twitter.com/chenluois) on Twitter for the latest news.

For feedback, use the menu `Help` - `Send Feedback`