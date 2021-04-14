import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://api.unsplash.com/search/photos?page=1&query=',
})

const id="Hb2DDWjcgFqjPs5ZFnN5yibl5YDqOPZvwEF_A6_YsQU"

export const imagesAPI = {
    getPhotos(searchTxt:string) {
        const promise = instance.get<getPhotos>(`${searchTxt}&client_id=${id}`);
        return promise;
    }
}


export type getPhotos = {
    searchTxt:string
}
