
export type apiSingleData = {
    _id: string,
    content: string,
    author: string,
    tags: [
        string
    ],
    authorSlug: string,
    length: number,
    dateAdded: string,
    dateModified: string
}

export type apiPageData = {
count:number,
lastItemIndex:number,
page:number, 
results: apiSingleData[],
totalCount: number,
totalPages: number
}

// {
//     "_id": "CPhGOJeapNYZ",
//     "content": "To be tested is good. The challenged life may be the best therapist.",
//     "author": "Gail Sheehy",
//     "tags": [
//     "famous-quotes"
//     ],
//     "authorSlug": "gail-sheehy",
//     "length": 68,
//     "dateAdded": "2020-09-09",
//     "dateModified": "2020-09-09"
//     }


const fetchRandomQuote = async (): Promise<apiSingleData> => {
    return fetch(`https://api.quotable.io/random`)
        .then(response => {
            if (!response.ok) {
                throw new Error(response.status + " " + response.statusText)
            } else {
                return response.json()
            }
        })
}

const fetchFirstPage = async (): Promise<apiPageData> => {
    return fetch(`https://api.quotable.io/quotes?page=1`)
        .then(response => {
            if (!response.ok) {
                throw new Error(response.status + " " + response.statusText)
            } else {
                return response.json()
            }
        })
}

export { fetchRandomQuote, fetchFirstPage }