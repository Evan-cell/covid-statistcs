import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react'

export const covidApi = createApi({
    reducerPath: 'covidApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://covid-19-news.p.rapidapi.com',
        prepareHeaders: (Headers) => {
            Headers.set('X-RapidAPI-Key','71375eced9msh7c6b37227e6be82p17f352jsn2dd1978a502b')
            return Headers;
        },
    }),
    endpoints: (builder) => ({
        getNews: builder.query({ query : () => '/v1/covid'})
    })
})
export const {
    useGetNewsQuery
} = covidApi