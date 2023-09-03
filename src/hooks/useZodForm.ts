import { zodResolver } from '@hookform/resolvers/zod';
import type { UseFormProps } from 'react-hook-form';
import { useForm } from 'react-hook-form'
import type { TypeOf, ZodType } from 'zod'



type UseZodFormOptions<T extends ZodType> = Omit<UseFormProps<TypeOf<T>>, 'resolver'>


const useZodForm = <T extends ZodType>(
     schema: T,
     options?: UseZodFormOptions<T>
) => {
     return useForm<TypeOf<T>>({
          resolver: zodResolver(schema),
          ...options
     })
}

export default useZodForm