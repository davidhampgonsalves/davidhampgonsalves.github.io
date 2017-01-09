+++
title = "PDF's using iText in 10 lines"
date = "2011-05-16"
tags = ["IText", "pdf"]
+++

There are some getting started tutorials for the iText library but I don't think they really capture how fast and easy it is to get working PDF's.

Your standard servlet hello world example is 10 super simple lines.

In your servlets doGet method\:

```java
	response.setContentType("application/pdf");
	Document document = new Document();
	try {
		PdfWriter.getInstance(document, response.getOutputStream());
		document.open();
		document.add(new Paragraph("Hello world"));
		document.close();
	} catch (DocumentException e) { //handle the error }
```

## to break that down\:
First you need to let the browser know via the http response headers that the content is a pdf.
```java
response.setContentType("application/pdf");
```

Next you need to creat the document object that will house your pdf.
```java
Document document = new Document();
```

Then get an instance of the PdfWriter to create the pdf using the contents of your document and output them to the response stream.
```java
PdfWriter.getInstance(document, response.getOutputStream());
```

Finally you need to open and populate your pdf with whatever you want.
```java
document.open(); document.add(new Paragraph("Hello world")); document.close();
```

If you want to create a PDF in a file its the same thing except easier because you don't have to worry about the content type you just replace the response.getOutputStream() with a valid FileOutputStream and your all set.

## Licenses
At the time of writing IText is at version 5.0.6 but starting with version 5 the license was changed to the Affero General Public License. If that is a problem you can still use 2.1.7 which from my experence is fairly compatable with version 5 except for the package names and is bound by the LGPL.
