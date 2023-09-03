import type { AxiosError } from 'axios'


export type BackendError<T = Record<string, unknown>> = AxiosError<{
     // represents the structure of the error response, where the message property is expected to be of type string.
     message: string
},
      
     //T represents the data payload returned with the error response
     T>