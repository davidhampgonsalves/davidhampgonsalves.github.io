+++
title = "Postgresql Range Basics"
date = "2014-03-18"
tags = ["Postgresql"]
+++

In postgres 9.2 a new family of data types were added called [Ranges](http\://www.postgresql.org/docs/9.2/static/rangetypes.html). This is a quick overview of how to use them.

###  Range Types
There are a handful of built in range types that cover the expected number and date types and you can also define your own if you need something outside of that.

## Basic Operations

* __Defining Range__ - CREATE TABLE ranges (range int4range)
* __Inserting Range__ - INSERT INTO ranges VALUES('[1, 4]')
* __Infinate Ranges__ - INSERT INTO ranges VALUES('[4, infinity]')
* __Check Range Membership__ - SELECT * FROM ranges where range @> 2
* __Get Range Bounds__ - SELECT lower(range), upper(range) FROM ranges

## Defining Ranges Values
You can define _inclusive_ ranges using [2,3] and _exclusive_ ranges using (1,4). You can also _mix_ them [2,4). You can create _infinate ranges_ like [4, infinaty] or [-infinity, 4] and you can test for infinity using _lower_inf_ and _upper_inf_. Keep in mind that creating a range like [NULL, 4] will create a unbound lower range. This will act like [infinity, 4] but you wont be able to test for infinity since NULL is still distinct from infinity.

## Non-Overlapping Ranges
I find that when using ranges you often need to create non-overlapping ranges. You can add such a condition using like\:
```sql
CREATE TABLE ranges (
  range int4range,
  EXCLUDE USING gist (range WITH &&)
);
 ```
