---
date: 2023-11-11T22:07
tags:
  - python
  - timeline
---

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
        
