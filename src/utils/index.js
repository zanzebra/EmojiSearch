export const filterByKeywords = (array, words) => {
  const keywordArray = words.split(" ");
  if (keywordArray.length === 0 || keywordArray[0] === "") {
    return [];
  } else {
    return array.filter((item) => {
      const { keywords } = item;
      return keywordArray.every((keyword) =>
        keywords.includes(keyword.toLowerCase())
      );
    });
  }
};
