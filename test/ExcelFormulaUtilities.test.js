module("parser");
/*
test("Test formatFormula ()", function() {
	var inputFormula = "IF('foo' = 'foo', 'foo', 'bar')";
	var formattedFormula = 'IF(\n\t"foo" = "foo",\n\t"foo",\n\t"bar"\n)';
	console.log(formattedFormula);
	console.log(excelFormulaUtilities.formatFormula(inputFormula))
	//equals(excelFormulaUtilities.formatFormula(inputFormula),  "Simple formating example.");
	equals(typeof {}, "object", "foo exsits");
});*/

test("formatFormula", function() {
  var inputFormula = 'IF("foo" = "foo", "foo", "bar")';
  var excpected = 'IF\n(\n\t"foo"= "foo",\n\t"foo",\n\t"bar"\n)';
  
  equals(window.excelFormulaUtilities.formatFormula(inputFormula), excpected, "Simple formating example.");
  
  inputFormula = 'IF(R[39]C[11]>65,R[25]C[42],ROUND((R[11]C[11]*IF(OR(AND(R[39]C[11]>=55, R[40]C[11]>=20),AND(R[40]C[11]>=20,R11C3="YES")),R[44]C[11],R[43]C[11]))+(R[14]C[11] *IF(OR(AND(R[39]C[11]>=55,R[40]C[11]>=20),AND(R[40]C[11]>=20,R11C3="YES")), R[45]C[11],R[43]C[11])),0))'
  excpected = 'IF\n(\n\tR[39]C[11]> 65,\n\tR[25]C[42],\n\tROUND\n\t(\n\t\t( R[11]C[11]*\n\t\t\tIF\n\t\t\t(\n\t\t\t\tOR\n\t\t\t\t(\n\t\t\t\t\tAND\n\t\t\t\t\t(\n\t\t\t\t\t\tR[39]C[11]>= 55,\n\t\t\t\t\t\tR[40]C[11]>= 20\n\t\t\t\t\t),\n\t\t\t\t\tAND\n\t\t\t\t\t(\n\t\t\t\t\t\tR[40]C[11]>= 20,\n\t\t\t\t\t\tR11C3= "YES"\n\t\t\t\t\t)\n\t\t\t\t),\n\t\t\t\tR[44]C[11],\n\t\t\t\tR[43]C[11]\n\t\t\t) )+ ( R[14]C[11]*\n\t\t\tIF\n\t\t\t(\n\t\t\t\tOR\n\t\t\t\t(\n\t\t\t\t\tAND\n\t\t\t\t\t(\n\t\t\t\t\t\tR[39]C[11]>= 55,\n\t\t\t\t\t\tR[40]C[11]>= 20\n\t\t\t\t\t),\n\t\t\t\t\tAND\n\t\t\t\t\t(\n\t\t\t\t\t\tR[40]C[11]>= 20,\n\t\t\t\t\t\tR11C3= "YES"\n\t\t\t\t\t)\n\t\t\t\t),\n\t\t\t\tR[45]C[11],\n\t\t\t\tR[43]C[11]\n\t\t\t) ),\n\t\t0\n\t)\n)';
  equals(excelFormulaUtilities.formatFormula(inputFormula), excpected, "advanced example.");
 
});

test("formatFormulaHTML", function() {
  var inputFormula = 'IF("foo" = "foo", "foo", "bar")';
  var excpected = '<span class="function">IF</span><br /><span class="function_start">(</span><br /><span class="tabs">&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="quote_mark">"</span><span class="text">foo</span><span class="quote_mark">"</span> =&nbsp;<span class="quote_mark">"</span><span class="text">foo</span><span class="quote_mark">"</span>,<br /><span class="tabs">&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="quote_mark">"</span><span class="text">foo</span><span class="quote_mark">"</span>,<br /><span class="tabs">&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="quote_mark">"</span><span class="text">bar</span><span class="quote_mark">"</span><br /><span class="function_stop">)</span>';
  
  equals(window.excelFormulaUtilities.formatFormulaHTML(inputFormula), excpected, "Simple formating example.");
  
  inputFormula = 'IF(R[39]C[11]>65,R[25]C[42],ROUND((R[11]C[11]*IF(OR(AND(R[39]C[11]>=55, R[40]C[11]>=20),AND(R[40]C[11]>=20,R11C3="YES")),R[44]C[11],R[43]C[11]))+(R[14]C[11] *IF(OR(AND(R[39]C[11]>=55,R[40]C[11]>=20),AND(R[40]C[11]>=20,R11C3="YES")), R[45]C[11],R[43]C[11])),0))'
  excpected = '<span class="function">IF</span><br /><span class="function_start">(</span><br /><span class="tabs">&nbsp;&nbsp;&nbsp;&nbsp;</span>R[39]C[11] >&nbsp;65,<br /><span class="tabs">&nbsp;&nbsp;&nbsp;&nbsp;</span>R[25]C[42],<br /><span class="tabs">&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="function">ROUND</span><br /><span class="tabs">&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="function_start">(</span><br /><span class="tabs">&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="tabs">&nbsp;&nbsp;&nbsp;&nbsp;</span>(&nbsp;R[11]C[11] *<br /><span class="tabs">&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="tabs">&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="tabs">&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="function">IF</span><br /><span class="tabs">&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="tabs">&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="tabs">&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="function_start">(</span><br /><span class="tabs">&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="tabs">&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="tabs">&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="tabs">&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="function">OR</span><br /><span class="tabs">&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="tabs">&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="tabs">&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="tabs">&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="function_start">(</span><br /><span class="tabs">&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="tabs">&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="tabs">&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="tabs">&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="tabs">&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="function">AND</span><br /><span class="tabs">&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="tabs">&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="tabs">&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="tabs">&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="tabs">&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="function_start">(</span><br /><span class="tabs">&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="tabs">&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="tabs">&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="tabs">&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="tabs">&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="tabs">&nbsp;&nbsp;&nbsp;&nbsp;</span>R[39]C[11] >=&nbsp;55,<br /><span class="tabs">&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="tabs">&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="tabs">&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="tabs">&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="tabs">&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="tabs">&nbsp;&nbsp;&nbsp;&nbsp;</span>R[40]C[11] >=&nbsp;20<br /><span class="tabs">&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="tabs">&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="tabs">&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="tabs">&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="tabs">&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="function_stop">)</span>,<br /><span class="tabs">&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="tabs">&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="tabs">&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="tabs">&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="tabs">&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="function">AND</span><br /><span class="tabs">&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="tabs">&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="tabs">&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="tabs">&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="tabs">&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="function_start">(</span><br /><span class="tabs">&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="tabs">&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="tabs">&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="tabs">&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="tabs">&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="tabs">&nbsp;&nbsp;&nbsp;&nbsp;</span>R[40]C[11] >=&nbsp;20,<br /><span class="tabs">&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="tabs">&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="tabs">&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="tabs">&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="tabs">&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="tabs">&nbsp;&nbsp;&nbsp;&nbsp;</span>R11C3 =&nbsp;<span class="quote_mark">"</span><span class="text">YES</span><span class="quote_mark">"</span><br /><span class="tabs">&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="tabs">&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="tabs">&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="tabs">&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="tabs">&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="function_stop">)</span><br /><span class="tabs">&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="tabs">&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="tabs">&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="tabs">&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="function_stop">)</span>,<br /><span class="tabs">&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="tabs">&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="tabs">&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="tabs">&nbsp;&nbsp;&nbsp;&nbsp;</span>R[44]C[11],<br /><span class="tabs">&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="tabs">&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="tabs">&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="tabs">&nbsp;&nbsp;&nbsp;&nbsp;</span>R[43]C[11]<br /><span class="tabs">&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="tabs">&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="tabs">&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="function_stop">)</span> ) +&nbsp;(&nbsp;R[14]C[11] *<br /><span class="tabs">&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="tabs">&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="tabs">&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="function">IF</span><br /><span class="tabs">&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="tabs">&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="tabs">&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="function_start">(</span><br /><span class="tabs">&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="tabs">&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="tabs">&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="tabs">&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="function">OR</span><br /><span class="tabs">&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="tabs">&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="tabs">&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="tabs">&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="function_start">(</span><br /><span class="tabs">&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="tabs">&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="tabs">&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="tabs">&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="tabs">&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="function">AND</span><br /><span class="tabs">&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="tabs">&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="tabs">&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="tabs">&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="tabs">&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="function_start">(</span><br /><span class="tabs">&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="tabs">&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="tabs">&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="tabs">&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="tabs">&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="tabs">&nbsp;&nbsp;&nbsp;&nbsp;</span>R[39]C[11] >=&nbsp;55,<br /><span class="tabs">&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="tabs">&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="tabs">&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="tabs">&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="tabs">&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="tabs">&nbsp;&nbsp;&nbsp;&nbsp;</span>R[40]C[11] >=&nbsp;20<br /><span class="tabs">&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="tabs">&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="tabs">&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="tabs">&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="tabs">&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="function_stop">)</span>,<br /><span class="tabs">&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="tabs">&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="tabs">&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="tabs">&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="tabs">&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="function">AND</span><br /><span class="tabs">&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="tabs">&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="tabs">&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="tabs">&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="tabs">&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="function_start">(</span><br /><span class="tabs">&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="tabs">&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="tabs">&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="tabs">&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="tabs">&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="tabs">&nbsp;&nbsp;&nbsp;&nbsp;</span>R[40]C[11] >=&nbsp;20,<br /><span class="tabs">&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="tabs">&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="tabs">&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="tabs">&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="tabs">&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="tabs">&nbsp;&nbsp;&nbsp;&nbsp;</span>R11C3 =&nbsp;<span class="quote_mark">"</span><span class="text">YES</span><span class="quote_mark">"</span><br /><span class="tabs">&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="tabs">&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="tabs">&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="tabs">&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="tabs">&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="function_stop">)</span><br /><span class="tabs">&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="tabs">&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="tabs">&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="tabs">&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="function_stop">)</span>,<br /><span class="tabs">&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="tabs">&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="tabs">&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="tabs">&nbsp;&nbsp;&nbsp;&nbsp;</span>R[45]C[11],<br /><span class="tabs">&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="tabs">&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="tabs">&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="tabs">&nbsp;&nbsp;&nbsp;&nbsp;</span>R[43]C[11]<br /><span class="tabs">&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="tabs">&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="tabs">&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="function_stop">)</span> ),<br /><span class="tabs">&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="tabs">&nbsp;&nbsp;&nbsp;&nbsp;</span>0<br /><span class="tabs">&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="function_stop">)</span><br /><span class="function_stop">)</span>';
  equals(excelFormulaUtilities.formatFormulaHTML(inputFormula), excpected, "advanced example.");
 
});

module("convert");

test("formula2CSharp", function() {
	var inputFormula = 'IF("foo" = "foo", "foo", "bar")',
		excpected = '("foo"=="foo"?"foo":"bar")';
	equals(excelFormulaUtilities.formula2CSharp(inputFormula), excpected, "Simple if example.");
  
	inputFormula = 'IF(IF(true, "foo", "bar") = "foo", "foo", "bar")';
	excpected = '((true?"foo":"bar")=="foo"?"foo":"bar")';
	equals(excelFormulaUtilities.formula2CSharp(inputFormula), excpected, "Nested If Test.");
	
	inputFormula = 'IF(IF(MAX(1, -10)>0, "foo", "bar") = "foo", "foo", "bar")';
	excpected = '((Math.Max(1,-10)>0?"foo":"bar")=="foo"?"foo":"bar")';
	equals(excelFormulaUtilities.formula2CSharp(inputFormula), excpected, "Nested If Test with a nested function.");
	
	inputFormula = 'SUM(1,1)';
	excpected = '(1+1)';
	equals(excelFormulaUtilities.formula2CSharp(inputFormula), excpected, "SUM(1,1)");
	
	inputFormula = 'SUM(1,1,1,1)';
	excpected = '(1+1+1+1)';
	equals(excelFormulaUtilities.formula2CSharp(inputFormula), excpected, "SUM(1,1,1,1)");
	
	inputFormula = 'IF(FOO_BAR = "foo bar", "THIS WORKED", "THIS ISN\'T WORKING")';
	excpected = '(FOO_BAR=="foobar"?"THIS WORKED":"THIS ISN\'T WORKING")';
	equals(excelFormulaUtilities.formula2JavaScript(inputFormula), excpected, "Test that strings keep correct spaces.");
});

test("formula2JavaScript", function() {
	var inputFormula = 'IF("foo" = "foo", "foo", "bar")',
		excpected = '("foo"=="foo"?"foo":"bar")';
	equals(excelFormulaUtilities.formula2JavaScript(inputFormula), excpected, "Simple if example.");
  
	inputFormula = 'IF(IF(true, "foo", "bar") = "foo", "foo", "bar")';
	excpected = '((true?"foo":"bar")=="foo"?"foo":"bar")';
	equals(excelFormulaUtilities.formula2JavaScript(inputFormula), excpected, "Nested If Test.");
	
	inputFormula = 'IF(IF(MAX(1, -10)>0, "foo", "bar") = "foo", "foo", "bar")';
	excpected = '((Math.Max(1,-10)>0?"foo":"bar")=="foo"?"foo":"bar")';
	equals(excelFormulaUtilities.formula2JavaScript(inputFormula), excpected, "Nested If Test with a nested function.");
	
	inputFormula = 'IF(FOO_BAR = "foo bar", "THIS WORKED", "THIS ISN\'T WORKING")';
	excpected = '(FOO_BAR=="foobar"?"THIS WORKED":"THIS ISN\'T WORKING")';
	equals(excelFormulaUtilities.formula2JavaScript(inputFormula), excpected, "Test that strings keep correct spaces.");
});