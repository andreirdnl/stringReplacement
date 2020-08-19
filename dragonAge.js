var string =
    "The Inquisitor must meet Varric on top of Skyhold's battlements to be introduced.";

  var patches = [
    // [start, end, patch]
    [5, 14, "Conquistador"],
    [26, 31, "King"],
    [43, 49, "Palace"],
  ];

  let finalString = string;
  for (let i = 0; i < patches.length; i++) {
    let findWord = string.slice(patches[i][0] - 1, patches[i][1]);
    finalString = finalString.replace(findWord, patches[i][2]);
  }
  console.log(finalString);
