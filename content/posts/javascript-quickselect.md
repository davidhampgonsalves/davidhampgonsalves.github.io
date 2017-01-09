+++
title = "Iterative Javascript QuickSelect"
date = "2012-06-08"
tags = ["Fedora", "Nodejs"]
+++
A couple weeks ago I entered my first AI related contest, hosted by [scribd](http\://www.scribd.com/jobs/botrace). The contest was great for beginners since it involved a very simple world and control scheme.

At some point in by bot creation process I needed to determine the n-th highest number in an Array. While for such a simple project I probably should have just thrown some loops together and moved on, but since the project was just I started researching the problem and Hoare's Selection Algorithm. I wasn't able to find a Javascript implementation so I ported a Java version() which in turn had been ported over from the book *"Numerical Recipes in C\: The Art of Scientific Computing"*. The best part about this implementation is that unlike most, it isn't recursive. This makes it more verbose but much more interesting and it avoids any stack depth restrictions that browser vendors may impose.

## The Code
```javascript
//javascript implementation of quickselect
function quickSelect( array, k ) {
    var left = 0, right = array.length - 1;

    while( true ) {
        if( right <= left + 1 ) {
         if( right === left + 1 && array[right] < array[left] )
         swap( array, left, right );
         return array[k];
        } else {
            //the unsigned bitshift has the effect of dividing by 2
            //and discarding any remainder
         var middle = ( left + right ) >>> 1;
         swap( array, middle, left + 1 );

         if( array[ left ] > array[ right ] )
         swap( array, left, right );

         if( array[ left + 1 ] > array[ right ] )
         swap( array, left + 1, right );

         if( array[ left ] > array[ left + 1 ] )
         swap( array, left, left + 1 );

         var i = left + 1, j = right;
         var pivot = array[ i ];
         while( true ) {
             i++;
         while( array[ i ] < pivot )
             i++;

             j--;
         while( array[ j ] > pivot )
             j--;

         if( j < i )
         break;
         swap(array, i, j);
         }
         array[left + 1] = array[j];
         array[j] = pivot;

         if( j >= k )
         right = j - 1;

         if( j <= k )
left = i;
}
    }
}

function swap( array, i, j ) {
    var temp = array[ i ];
    array[ i ] = array[ j ];
    array[ j ] = temp;
}
```
