export function fetchImages(searchQuery) {

  const baseUrl = "https://pixabay.com/api";
  const key = "29859369-1fbaee8b518c313527d0ab1d2"
  const options = "image_type=photo&orientation=horizontal&safesearch=true&per_page=40";

  return fetch(`${baseUrl}/?key=${key}&q=${searchQuery}&${options}`)
    .then(response => {
      console.log(response);
      if (!response.ok) {
        z
        throw new Error();
      }
      return response.json();
    });
}


// key - твій унікальний ключ доступу до API.
// q - термін для пошуку.Те, що буде вводити користувач.
// image_type - тип зображення.На потрібні тільки фотографії, тому постав значення photo.
// orientation - орієнтація фотографії.Постав значення horizontal.
// safesearch - фільтр за віком.Постав значення true.

// У відповіді буде масив зображень, що задовольнили критерії па

// https://pixabay.com/api/?key=29859369-1fbaee8b518c313527d0ab1d2&q=yellow+flowers&image_type=photo
// https://pixabay.com/api/?key=29859369-1fbaee8b518c313527d0ab1d2catimage_type=photo&orientation=horizontal&safesearch=true"
// https://pixabay.com/api/?key=29859369-1fbaee8b518c313527d0ab1d2&image_type=photo&orientation=horizontal&safesearch=true