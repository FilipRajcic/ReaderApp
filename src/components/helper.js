let localStorageNames = ["myBooks"];
if (JSON.parse(localStorage.getItem("BookList"))) {
  const myBooksLocalStorage = JSON.parse(localStorage.getItem("BookList"));
  localStorageNames = Object.getOwnPropertyNames(myBooksLocalStorage);
}

export const renderSelectOptions = () => {
  return localStorageNames.map((name) => (
    <option value={name} key={name}>
      {name}
    </option>
  ));
};
