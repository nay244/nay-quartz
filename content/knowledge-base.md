---
title: Knowledge Base
---
# Data Analytics

This section will contain a collection of things regarding data analysis. It will serve as a top-level index page.

## Resources
* [[knowledge-base#python|Python]]
* [[knowledge-base#excel|Excel]]

---

<div class="article-header">
<h1>Excel</h1>
<p>This section will be where I store information embracing the capabilities of Excel for data analysis, financial modeling, and business intelligence.</p>
</div>

# Excel

This section of my blog will be where I store information embracing the capabilities of Excel for data analysis, financial modeling, and business intelligence.

**Why Excel?** My goal is not just to learn a spreadsheet tool but to unlock a new realm of possibilities in data management and analysis. Whether it's understanding financial trends or optimizing business operations.
I want to build a strong foundation in spreadsheet manipulation, master the art of data visualization, and eventually explore advanced features like macros and pivot tables. I am intrigued by the stories of Excel enhancing productivity and providing strategic insights, and I hope to be one of those stories.

## Motivations for Learning Excel

**Business Analysis:** Business analysis is fascinating because it's about turning raw data into strategic insights and informed decisions. With Excel, features like pivot tables and advanced charting can help dissect and visualize data in ways that inform and persuade. It's about extracting actionable intelligence from numbers, and that's something I really look forward to mastering.

**Financial Modeling:** Financial modeling is another area I'm eager to delve into. It's about constructing representations of a company's financial performance. With Excel's functions and formulas, the ability to model complex financial scenarios becomes possible. From budget forecasting to investment analysis, the potential applications are vast and impactful.

## Resources
  * [Exceljet](https://exceljet.net/) Exceljet provides concise Excel tips, tutorials, and shortcuts.
  * [Datacamp](https://www.datacamp.com/cheat-sheet/getting-started-with-excel-cheat-sheet) Excel cheatsheet provided by Datacamp.
  * [Excel Practice](https://excel-practice-online.com/) Website to practice and learn excel functions and tools on the browser window.
  Every function and tool has an explanation followed by an online excel exercise which can be solved within the page itself, no need to download anything.
  * [[knowledge-base#pluralsight-excel-365-training|Pluralsight Excel]]

---

<div class="article-header">
<h1>Pluralsight Excel</h1>
<p>Notes from the Pluralsight course on Excel 365, detailing key features and functionalities essential for mastering Excel in a professional setting.</p>
</div>

# Pluralsight Excel 365 Training
This section of the webpage will contains notes from the Pluralsight course on Excel 365, detailing key features and functionalities that are essential for mastering Excel in a professional setting.

## Formatting
Discusses the importance of cell formatting for readability and data interpretation. Key topics include number formatting, cell styles, and custom formats.

### Custom Number Formats
#### Use Cases
* Specific number formatting (Date, Time, Decimals, Accounting, Percentage, etc..)
* Data from csv file need to be formatted for analysis in 3rd party application (Leading Zeros).
![Custom_Number_Format](/static/excel/numberformats.png)

### International Currency Formats
#### Symbols for Different Currency
Accounting Formats (Does not do conversion)
![International Currency](/static/excel/internationalcurrency.png)

## Working with Data
Covers the basics of data entry, manipulation, and sorting. Emphasizes on efficient data management techniques.

### Outline Data
#### Group Data to Create Outlines
Data > Outline > Group/Ungroup
![Outline Pre](/static/excel/outline_pre.jpg)
![Outline Post](/static/excel/outline_post.png)

### Insert Subtotals
#### Get Subtotal Amount for a Specific Group
Data > Outline > Subtotal </br>
First sort list by criteria to subtotal by.
![Subtotal](/static/excel/subtotal.png)

### Insert References
#### References Rows and Columns
* Relative reference example: =sum(C6:F6)
* Absolute reference example: =sum(G7*$F$3) </br>
![References](/static/excel/references.png)

### Reference Data by Using Structured References
#### Reference Data by Use of Table Names
* Count of fields in table Sales: =COUNT(Sales)
* Max Change of values in table Sales: =MAX(Sales[Change]) </br>
![Structured Reference](/static/excel/structured_reference.png)

### Consolidate Data
#### Consolidating Data From Multiple Workbooks
Data > Data Tools > Consolidate </br>
![Consolidate](/static/excel/consolidate.png)

### Configure Data Validation
#### Limit User Inputs
Data > Data Tools > Data Validation </br>
![Data Validation](/static/excel/data_validate.png)


### Analyze Data
#### Extract Information from Data
Home > Analysis > Analyze Data
* Create PivotTables, PivotCharts, Suggestions, etc.. </br>
![Analyze Data](/static/excel/data_analyze.png)


### Look Up Data by Using the XLOOKUP Function
#### Successor to VLOOKUP, HLOOKUP, LOOKUP
Formulas > Function Library > Lookup & Reference > XLOOKUP</br>
* Find return value in same row </br>
![XLOOKUP](/static/excel/xlookup.png)

### Look Up Data by Using the XMATCH Function
#### New Version of MATCH function
Formulas > Function Library > Lookup & Reference > XMATCH</br>
* Perform a lookup and return a horizontal or vertical position</br>
![XMATCH](/static/excel/xmatch.png)

## Power Query
Explains how to use Power Query for advanced data import and transformation. Highlights include merging and cleaning data sets.

### Import, Transform, and Connect to Data
#### Connect Data from Workbooks Using Power Query
Start with brand new workbook to import data to.
* Data > Get Data > From File
* Select Excel data file in Navigator and click Transform Data to open Power Query editor.
* Choose relevant columns
* Create connection by choosing Close & Load to
* Get Data from another workbook: Data > Get Data > From File </br>
![Import Data 1](/static/excel/import_data_1.png)
![Import Data 2](/static/excel/import_data_2.png)


### Combine and Display Data
#### Use Power Query to Combine and Display Data
Data > Get Data > Launch Power Query Editor
* Merge queries together and gather data into a single usable workbook.
* Home > Combine > Merge Queries
* Data > Combine Queries > Merge
![Import Data 2](/static/excel/merge_queries.png)

## Text Functions
Overview of functions like LEFT, RIGHT, MID, CONCATENATE, and TEXT to manipulate and analyze text data.

### Format Text by Using RIGHT, LEFT, and MID Functions
### Format Text by Using UPPER, LOWER, and PROPER Functions
### Format Text by Using the CONCAT Function


## Logical and Statistical Functions
Details the use of functions such as IF, AND, OR, COUNTIF, and AVERAGEIF for logical operations and statistical analysis.

### Perform Logical Operations by Using the IF Function
### Perform Logical Operations by Using the SUMIF Function
### Perform Logical Operations by Using the AVERAGEIF Function
### Perform Statistical Operations by Using the COUNTIF Function
### Perform Statistical Operations by Using the SUMIFS Function
### Perform Statistical Operations by Using the AVERAGEIFS Function
### Perform Statistical Operations by Using the COUNTIFS Function
### Perform Logical Operations by Using AND, OR, and NOT Functions

## Expanded Functions
Introduces more complex Excel functions and how they can be used for in-depth data analysis.

### Reference the Date and Time by Using the NOW and TODAY Functions
### Serialize Numbers by Using DATE and TIME Functions
### Perform What-If Analysis by Using Goal Seek
### Perform What-If Analysis by Using Scenario Manager
### Calculate Data by Using Financial Functions: PMT
### Calculate Data by Using Financial Functions: PPMT & IPMT
### Calculate Data by Using Financial Functions: FV

## Error Checking
Teaches methods for identifying and correcting errors in Excel worksheets to ensure data accuracy.

### Display Formulas
### Trace Precedents and Dependents
### Evaluate Formulas
### Validate Formulas by Using Error Checking Rules
### Monitor Cells and Formulas by Using the Watch Window

## Conditional Formatting
Explains how to use conditional formatting to highlight key data points, compare data, and identify trends.

### Apply Conditional Formatting
### Create Custom Conditional Formatting Rules
### Create Conditional Formatting Rules That Use Formulas
### Manage Conditional Formatting Rules

## Charts
Covers the creation and customization of various chart types to visually represent data.

### Insert Sparklines
### Create a New Chart
### Add Additional Data Series
### Switch Between Rows and Columns in Source Data
### Analyze Data by Using Quick Analysis
### Resize Charts
### Move Charts to a Chart Sheet
### Add and Modify Chart Elements
### Apply Chart Layouts
### Apply Chart Styles
### Add Trendlines to Charts
### Create Dual-Axis Charts
### Save a Chart as a Template

## Pivot Tables
Detailed walkthrough on creating and manipulating pivot tables for data summarization and analysis.

### Create PivotTables
### Modify Field Selections and Options
### Create Slicers
### Move Piviot Table Rows Fields into Seperate Columns
### Group PivotTable Data
### Format PivotTable Data
### Add Additional Fields
### Add Calculated Fields
### Drill Down Into PivotTable Details
### Create PivotCharts
### Modify Field Selections and Options in PivotCharts
### Apply Styles to PivotCharts
### Drill Down Into PivotChart Details

## Advanced Options
Explores advanced Excel settings and options for customization and enhanced productivity.

### Display Hidden Ribbon Tabs
### Configure Formula Calculation Options

## Finalizing a Workbook
Tips on preparing a workbook for final presentation, including review, protection, and sharing.

### Inspect a Workbook for Hidden Properties or Personal Information
### Inspect a Workbook for Accessibility Issues
### Inspect a Workbook for Compatibility Issues
### Restrict Editiing and Protect a Workbook
### Protect Workbook Structure
### Encrypt a Workbook With a Password
### Manage Workbook Versions

## Macros and Form Controls
Introduces how to automate repetitive tasks and enhance user interaction using macros and form controls.

### Create a Simple Macro
### Modify a Simple Macro
### Copy Macros Between Workbooks
### Create a Maco Button
### Insert and Configure Form Controls

## Notes
These notes are a concise summary of the extensive functionalities of Excel 365 covered in the Pluralsight course, aimed at enhancing skills in data analysis and business intelligence.

---

<div class="article-header">
<h1>Python</h1>
<p>This blog marks the beginning of a new chapter in my professional life, one where I embrace the power of Python for data analysis, machine learning, and data science.</p>
</div>

# Python

This blog marks the beginning of a new chapter in my professional life, one where I embrace the power of Python for data analysis, machine learning, and data science.

**Why Python?** My aim is not just to learn a programming language but to unlock a new realm of possibilities in technology. Whether it's understanding how data shapes decisions or exploring the wonders of artificial intelligence, Python seems to be the key.
I want to build a strong foundation in programming, understand the basics of data analysis, and eventually explore the vast areas of machine learning and data science. I am intrigued by the stories of Python transforming careers and opening doors to new opportunities, and I hope to be one of those stories.

## Motivations for Learning Python

**Data Science:** More Than Just Numbers: Data science is fascinating to me. It's about turning a sea of data into insights and decisions. With Python, tools like Pandas and Matplotlib can help dissect and visualize data in ways that make sense and tell a story. It's about uncovering the hidden narratives in data, and that's something I really look forward to mastering.

**Machine Learning:** Machine learning is another topic I'm eager to explore. It's about teaching computers to learn and make predictions based on data. With Python's libraries like scikit-learn and TensorFlow, the possibilities seem endless. From recognizing patterns to predicting outcomes, the potential applications are vast and exciting.

## Resources
  * [Dataquest](https://www.dataquest.io/course/introduction-to-python/) Dataquest teaches Python syntax in the context of learning data science.
  * [Python Tutorial](https://docs.python.org/3/tutorial/) Tutorial on main Python site.
  * [[knowledge-base#python-cheatsheet|Python Commands]]

---

<div class="article-header">
<h1>Python Commands</h1>
<p>A quick reference for Python commands and basic explanations, based on the official Python quick reference.</p>
</div>

# Python Cheatsheet

This page serves as a quick reference for python commands and basic explanations.

This entire section is based on [this page](https://www.python.org/ftp/python/doc/quick-ref.1.3.html)

## Invocation Options

**python [-diuv] [-c command | script | - ] [args]** 

     -d   Turn on parser  debugging  output  (for  wizards  only,
          depending on compilation options).
     -i   When a script is passed as first  argument  or  the  -c
          option  is used, enter interactive mode after executing
          the script or  the  command.   It  does  not  read  the
          $PYTHONSTARTUP  file.   This  can  be useful to inspect
          global variables or a stack trace when a script  raises
          an exception.
     -s   Suppress auto-printing of expressions in interactive mode.
     -u   Force stdout and stderr to be totally unbuffered.
     -v   Print a message each  time  a  module  is  initialized,
          showing  the  place  (filename or built-in module) from
          which it is loaded.
     -c command
          Specify the command  to  execute  (see  next  section).
          This  terminates the option list (following options are
          passed as arguments to the command).
     -  anything afterward is passed as options to python script or
        command, not interpreted as an option to interpreter itself.
     
## Basic Types and Their Operations
  **Comparisions (defined between _any_ types)**
  
          <	strictly less than	
          <=	less than or equal	
          >	strictly greater than	
          >=	greater than or equal	
          ==	equal	
          !=	not equal  ( "<>" is also allowed)
          is	object identity	(are _objects_ identical, not values)
          is not	negated object identity
	  
  **Numeric types**
  Floats, integers and long integers.
  **Operators on all numeric types**
  
          abs(x)	absolute value of x	
          int(x)	x converted to integer	
          long(x)	x converted to long integer	
          float(x)	x converted to floating point	
          -x	x negated	
          +x	x unchanged	
          x + y	sum of x and y	
          x - y	difference of x and y	
          x * y	product of x and y	
          x / y	quotient of x and y	
          x % y	remainder of x / y
          divmod(x, y)	the tuple (x/y, x%y)
          pow(x, y)	x to the power y	
  
  **Operators on all sequence types (lists, tuples, strings)**
  
  	len(s)		length of s	
  	min(s)		smallest item of s	
  	max(s)		largest item of s	
  	x in s		1 if an item of s is equal to x, else 0
  	x not in s	0 if an item of s is equal to x, else 1
  	s + t		the concatenation of s and t	
  	s * n, n * s	n copies of s concatenated	
  	s[i]		i'th item of s, origin 0
  	s[i:j]		slice of s from i to j	
   
## Function Definition
def <func_id> ([<param_list>]): <suite>
		-- creates a function object and assigns it name 
		   <func_id>.

## Class Definition
class <class_id> [(<super_class1> [,<super_class2>]*)]: 

## Built-In Function

**Functions**

	abs(x)		Return the absolute value of a number
	
	apply(f, args)
			Call func/method <f> with args <args>
	
	callable(x)	Returns 1 if x callable, else 0.
	
	chr(i)		Return one-character string whose ASCII code is
			integer i
	
	cmp(x,y)	Return neg, zero, pos if x <, ==, > to y
	
	coerce(x,y)	Return a tuple of the two numeric arguments converted to
		 	a common type.
	
	compile(string, filename, kind) 
			Compile <string> into a code object.
			<filename> is used in error message, can be
			any string.  <kind> can be 'eval' if
			<string> is a single stmt, or 'single' which
			prints the output of expression statements that
			evaluate to something else than "None" or be 'exec'.
	
	dir([object])	If no args, return the list of names in current local
			symbol table. With a module, class or class instance
			object as arg, return list of names in its attr dict.
	
	divmod(a,b)	Returns tuple of (a/b, a%b)
	
	eval(s, globals, locals)
			Eval string <s> in (optional) <globals>, <locals>. 
			<s> must have no NULL's or newlines. <s> can also be a
			code object.
			E.g.: x = 1; incr_x = eval('x + 1')
	
	filter(function, list)
			Construct a list from those elements of <list> for which
		        <function> returns true. <function> takes one parameter.
	
	float(x)	Convert a number to floating point.
	
	getattr(object, name)
			Get attr called <name> from <object>.
			getattr(x, 'foobar') <=> x.foobar
	
	globals()	Returns a dictionary containing current global variables.
	
	hasattr(object, name)
			Returns true if <object> has attr called <name>.
	
	hash(object)	Return the hash value of the object (if it has one)
	
	hex(x)		Convert a number to a hexadecimal string.
	
	id(object)	Return a unique 'identity' integer for an object.
	
	input([prompt])	Prints prompt, if given. Reads input and evaluates it.
	
	int(x)		Convert a number to a plain integer.
	
	len(s)		Return the length (the number of items) of an object.
	
	local()		Return a dictionary containing current local variables.
	
	long(x)		Convert a number to a long integer.
	
	map(function, list, ...)
			Apply <function> to every item of <list> and return a list
			of the results.  If additional arguments are passed, 
			<function> must take that many arguments and it is given
			to <function> on each call.
	
	max(s)		Return the largest item of a non-empty sequence.
	
	min(s)		Return the smallest item of a non-empty sequence.
	
	oct(x)		Convert a number to an octal string.
	
	open(filename [, mode='r', [bufsize=<implementation dependent>]])
			Return a new file object. First two args are same as 
			those for C's "stdio open" function. <bufsize> is 0
			for unbuffered, 1 for line-buffered, negative for
			sys-default, all else, of (about) given size.
	
	ord(c)		Return integer ASCII value of <c> (str of len 1).
	
	pow(x, y [, z])	Return x to power y [modulo z]
	
	range(start [,end [, step]])
			return list of ints from >= start and < end. 
			With 1 arg, list from 0..<arg>-1
			With 2 args, list from <start>..<end>-1
			With 3 args, list from <start> up to <end> by <step>
	
	raw_input([prompt])
			Print prompt if given, then read string from std
			input.
	
	reduce(f, list [, init])
			Apply the binary function <f> to the items of
			<list> so as to reduce the list to a single value.
			If <init> given, it is "prepended" to <list>.
	
	reload(module)	Re-parse and re-initialize an already imported module.
			Useful in interactive mode, if you want to reload a
			module after fixing it. If module was synactically
			correct but had an error in initialization, must
			import it one more time before calling reload().
	
	repr(object)	Return a string containing a printable representation
			of an object. Equivalent to `object` (using
			backquotes).
	
	round(x,n=0)	Return the floating point value x rounded to n digits
		 		after the decimal point.
	
	setattr(object, name, value)
			This is the counterpart of getattr().
			setattr(o, 'foobar', 3) <=> o.foobar = 3
	
	str(object)	Return a string containing a nicely printable
			representation of an object.
	
	tuple(list)	Creates a tuple with same elements as <list>
	
	type(object)	Return type of an object. E.g.,
			if type(x) == type(''): print 'It is a string'
	
	vars([object])	Without arguments, return a dictionary corresponding
			to the current local symbol table.  With a module,
			class or class instance object as argument   
			returns a dictionary corresponding to the object's
			symbol table. Useful with "%" formatting operator.
	
	xrange(start [, end [, step]])
			Like range(), but doesn't actually store entire list
			all at once. Good to use in "for" loops when there is a
			big range and little memory.
        
