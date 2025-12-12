document.getElementById('replaceBtn').addEventListener('click', function() {
  let sentence = document.getElementById('sentence').value.trim();
  let findWord = document.getElementById('findWord').value.trim();
  let newWord = document.getElementById('newWord').value.trim();

  if (sentence.includes(findWord)) {
    let result = sentence.replace(findWord, newWord);
    document.getElementById('replaceOut').textContent =
      "Original: " + sentence + "\n\nResult: " + result;
  } else {
    document.getElementById('replaceOut').textContent =
      "Original: " + sentence + "\n\nCANNOT FIND '" + findWord + "' IN QUERY.";
  }
});

document.getElementById('countBtn').addEventListener('click', function() {
  let text = document.getElementById('countInput').value;
  let cleaned = text.replace(/\s+/g, '');
  let count = cleaned.length;
  document.getElementById('countOut').textContent = count;
});
