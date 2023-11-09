import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { base_url } from "../firebase/database"

export const Api = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({
        baseUrl: base_url,
    }),

    endpoints: (builder) => ({
        getCareers: builder.query({
            query: () => "careers.json",
        }),

        getClasses: builder.query({
            query: () => "classes.json"
        }),
        getImage: builder.query({
            query: () => "image.json"
        }),
        putImage: builder.mutation({
            query: (image) => ({
                url: "image.json",
                method: "PUT",
                body: image,
            })
        })
    })
})

export const { 
    useGetCareersQuery, 
    useGetClassesQuery,
    useGetImageQuery,
    usePutImageMutation,
 } = Api;