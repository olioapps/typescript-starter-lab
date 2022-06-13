# Planning

find region length with highest score
assuming input array always five or more total values, number of possible sub regions is determined by:

numRegions = 1 + (inputArray.length - 5)

ex:
Input Array Length = 10 (index 0 - 9)

numRegions = 1 + (10 - 5) = 6 total

1. 0,1,2,3,4
2. 1,2,3,4,5
3. 2,3,4,5,6
4. 3,4,5,6,7
5. 4,5,6,7,8
6. 5,6,7,8,9


next, create an object with keys of 1, 2, 3, 4, 5 etc
each key will have following props
  - score
  - inputArray[] numbers get stored as [] ex: [3, 4, 5, 6, 7]


for each over each key
  nested for each to run through inputArray[] numbers as ex:[3, 4, 5, 6, 7]
    increase score of key.score based on value in inputArray

return object with keys, sorted by highest score
or possibly
return an array of highest scoring EventStream inputs


what to test for:
- should write a test that checks what happens when input array length is less than five
- that event type is equal to screenshot, newMessage or view
- expected winners
- what happens if two sets are same high score? - if different regions have same score, return first
