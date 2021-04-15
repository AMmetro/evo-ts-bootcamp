
const id="Hb2DDWjcgFqjPs5ZFnN5yibl5YDqOPZvwEF_A6_YsQU"

  const baseURL= `https://api.unsplash.com/search/photos?client_id=${id}&per_page=20`

export const imagesAPI = {
    getPhotos(searchTxt:string) {
       const promise =  fetch(`${baseURL}&query=${searchTxt}}`)
           .then((res) => {return res.json() })
           .then((data) => { return data.results})
       return promise;
    }
}
