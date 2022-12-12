const Search = (value) => {
  console.log(value);
  fetch(`https://api.mangadex.org/manga?title=${value}`)
    .then((response) => response.json())
    .then((data) => {
      data.data;
    });
};

export default Search;
