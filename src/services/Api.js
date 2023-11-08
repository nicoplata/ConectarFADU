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
        })
    })
})

export const { useGetCareersQuery, useGetClassesQuery } = Api;