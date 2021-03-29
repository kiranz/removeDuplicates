# removeDuplicates

removeDuplicates.js contains a function to remove duplicates from a list, and a test that proves it can handle 100,000 items in under 1 second.
  To run the script, place the script in a directory and run "node removeDuplicatesTest.js" in command line inside the directory. 

### Understanding Script Output:
Script prints "Removing duplicates took xx ms" if it takes less than a second. 

If script takes more than a second to run, It throws an error with execution time details.

#### Example output when it takes more than a second:
" throw new Error(`Removing duplicates took ${duration}ms`);
    	^
Error: Removing duplicates took 1020ms"

**Note**: This script was tested using node v12.18.3.
