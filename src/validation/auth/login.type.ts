import { z } from 'zod'

export const loginSchema = z.object({
     email: z
          .string({
               required_error: 'Email is required',
               invalid_type_error:'Email Invalide'
          })
          .transform((val) => val.trim())
          .transform((val) => val.toLowerCase())
          //pipe is mean that we can add more validation to the same field
          .pipe(
               z
                    .string({
                         required_error: 'Email is required',
                         invalid_type_error: 'Email Invalide'
                         
                    })
                    .email({
                         message: 'Email is not valid'
                    })
          )
     ,
     password: z
          .string({
               required_error: 'Password is required',
               invalid_type_error: 'Password invalide'
          })
          .transform((val) => val.trim())
          .pipe(
               z
               .string({
                   required_error: 'Champ obligatoir',
                   invalid_type_error: 'Mot de passe Invalide',
               })
               .min(3, { message: 'Mot de passe Invalide' })
               .max(20, { message: 'Mot de passe Invalide' })
          ),
     
})

//export type is mean that we can use this type in other files
export type ILogin = z.infer<typeof loginSchema>