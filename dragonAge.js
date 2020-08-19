var string =
    "The Inquisitor must meet Varric on top of Skyhold's battlements to be introduced.";

  var patches = [
    // [start, end, patch]
    [5, 14, "Conquistador"],
    [26, 31, "King"],
    [43, 49, "Palace"],
  ];

  const searchAndReplace = (str, arr) => {
    let finalString = str;
    for (let i = 0; i < arr.length; i++) {
      let findWord = str.slice(arr[i][0] - 1, arr[i][1]);
      finalString = finalString.replace(findWord, arr[i][2]);
    }
    return finalString;
  };

  let res = searchAndReplace(string, patches);
  console.log(res);
