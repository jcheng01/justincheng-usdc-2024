/**
 * RECOMMENDATION
 *
 * To test your code, you should open "tester.html" in a web browser.
 * You can then use the "Developer Tools" to see the JavaScript console.
 * There, you will see the results unit test execution. You are welcome
 * to run the code any way you like, but this is similar to how we will
 * run your code submission.
 *
 * The Developer Tools in Chrome are available under the "..." menu,
 * futher hidden under the option "More Tools." In Firefox, they are
 * under the hamburger (three horizontal lines), also hidden under "More Tools."
 */

/**
 * Searches for matches in scanned text.
 * @param {string} searchTerm - The word or term we're searching for.
 * @param {JSON} scannedTextObj - A JSON object representing the scanned text.
 * @returns {JSON} - Search results.
 * */

function findSearchTermInBooks(searchTerm, scannedTextObj) {
  if (scannedTextObj.length === 0)
    return { SearchTerm: searchTerm, Results: [] }; //checks for zero books

  const Results = []; //initialize empty array to push selected fields

  let result = {
    SearchTerm: searchTerm,
    Results,
  };

  //double forEach method to loop through first the array of books, then second the array of text in "Content" field. Lastly the selected fields are pushed into empty obj
  scannedTextObj.forEach((book) => {
    book.Content.forEach((content) => {
      if (content.Text.includes(searchTerm)) {
        //includes method checks for case sensitivity
        Results.push({
          ISBN: book.ISBN,
          Page: content.Page,
          Line: content.Line,
        });
      } else {
        return Results;
      }
    });
  });
  return result; // returns js object instead of json object for the sake of unit testing.
}

/** Example input object. */
const twentyLeaguesIn = [
  // example test case with one book
  {
    Title: "Twenty Thousand Leagues Under the Sea",
    ISBN: "9780000528531",
    Content: [
      {
        Page: 31,
        Line: 8,
        Text: "now simply went on by her own momentum.  The dark-",
      },
      {
        Page: 31,
        Line: 9,
        Text: "ness was then profound; and however good the Canadian's",
      },
      {
        Page: 31,
        Line: 10,
        Text: "eyes were, I asked myself how he had managed to see, and",
      },
    ],
  },
];
const twentyLeaguesIn2 = [
  // exampple test case with more than one book and matches "The"
  {
    Title: "Twenty Thousand Leagues Under the Sea",
    ISBN: "9780000528531",
    Content: [
      {
        Page: 31,
        Line: 8,
        Text: "now simply went on by her own momentum.  The dark-",
      },
      {
        Page: 31,
        Line: 9,
        Text: "ness wasTen profound; and however good ] Canadian's",
      },
    ],
  },
  {
    Title: "Sea twilight gap US",
    ISBN: "9780000528532",
    Content: [
      {
        Page: 66,
        Line: 4,
        Text: " was the profound; and however good ] Canadian's",
      },
      {
        Page: 41,
        Line: 10,
        Text: "eyes were, I asked myself how he had managed to see, and",
      },
    ],
  },
  {
    Title: "US digital corps",
    ISBN: "9780000528533",
    Content: [
      {
        Page: 22,
        Line: 4,
        Text: "ness was profound; and however good ] Canadian's",
      },
      {
        Page: 39,
        Line: 11,
        Text: "eyes were, I asked myself how The he had managed to see, and",
      },
    ],
  },
];
const twentyLeaguesIn3 = []; //example neg test case with no book/no content

/** Example output objects */
const twentyLeaguesOut = {
  SearchTerm: "the",
  Results: [{ ISBN: "9780000528531", Page: 31, Line: 9 }],
};
const twentyLeaguesOut2 = {
  SearchTerm: "The",
  Results: [
    { ISBN: "9780000528531", Page: 31, Line: 8 },
    { ISBN: "9780000528533", Page: 39, Line: 11 },
  ],
};
const twentyLeaguesOut3 = {
  SearchTerm: "the",
  Results: [],
};

/*
 _   _ _   _ ___ _____   _____ _____ ____ _____ ____  
| | | | \ | |_ _|_   _| |_   _| ____/ ___|_   _/ ___| 
| | | |  \| || |  | |     | | |  _| \___ \ | | \___ \ 
| |_| | |\  || |  | |     | | | |___ ___) || |  ___) |
 \___/|_| \_|___| |_|     |_| |_____|____/ |_| |____/ 
                                                      
 */

/* We have provided two unit tests. They're really just `if` statements that
 * output to the console. We've provided two tests as examples, and
 * they should pass with a correct implementation of `findSearchTermInBooks`.
 *
 * Please add your unit tests below.
 * */

/** We can check that, given a known input, we get a known output. */
//Checked for all three different test cases
const test1result = findSearchTermInBooks("the", twentyLeaguesIn);
if (JSON.stringify(twentyLeaguesOut) === JSON.stringify(test1result)) {
  console.log("PASS: Test 1", "Output of twentyLeaguesIn matches correclty");
} else {
  console.log("FAIL: Test 1");
  console.log("Expected:", twentyLeaguesOut);
  console.log("Received:", test1result);
}
const test2result = findSearchTermInBooks("The", twentyLeaguesIn2);
if (JSON.stringify(twentyLeaguesOut2) === JSON.stringify(test2result)) {
  console.log("PASS: Test 2", "Output of twentyLeaguesIn2 matches correclty");
} else {
  console.log("FAIL: Test 2");
  console.log("Expected:", twentyLeaguesOut2);
  console.log("Received:", test2result);
}
const test3result = findSearchTermInBooks("the", twentyLeaguesIn3);
if (JSON.stringify(twentyLeaguesOut3) === JSON.stringify(test3result)) {
  console.log("PASS: Test 3", "Output of twentyLeaguesIn3 matches correclty");
} else {
  console.log("FAIL: Test 3");
  console.log("Expected:", twentyLeaguesOut3);
  console.log("Received:", test3result);
}

/** We could choose to check that we get the right number of results. */
// const test2result = findSearchTermInBooks("the", twentyLeaguesIn);
// if (test2result.Results.length == 1) {
//   console.log("PASS: Test 2", "");
// } else {
//   console.log("FAIL: Test 2");
//   console.log("Expected:", twentyLeaguesOut.Results.length);
//   console.log("Received:", test2result.Results.length);
// }

// const test1result = findSearchTermInBooks("the", twentyLeaguesIn);
// const test2result = findSearchTermInBooks("the", twentyLeaguesIn2);
// const test3result = findSearchTermInBooks("the", twentyLeaguesIn3);
