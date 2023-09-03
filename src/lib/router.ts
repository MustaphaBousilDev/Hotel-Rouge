import type { NextApiRequest, NextApiResponse } from 'next';
import nextConnect from 'next-connect';
import type { TypeOf, ZodType, ZodTypeDef } from 'zod';
import { ZodError } from 'zod';

export class InvalidQuery extends Error {
  constructor(message: string, options?: ErrorOptions) {
    super(message, options);
    this.name = 'InvalidQuery';
    this.cause = options?.cause;
  }
}

export const parseQuery = <
  O,
  D extends ZodTypeDef,
  I,
  U extends object,
  T extends ZodType<any, any, any> = ZodType<O, D, I>
>(
  schema: T,
  inputs: U
): TypeOf<T> => {
  const res = schema.safeParse(inputs);
  if (!res.success)
    throw new InvalidQuery('Requête invalide.', {
      cause: JSON.stringify(res.error),
    });
  return res.data;
};

export function router() {
  return nextConnect<NextApiRequest, NextApiResponse>({
    onError: (err, _req, res) => {
      console.log(err);
      if (err instanceof ZodError)
        res.status(400).json({
          message: 'Champs invalides! Veuillez vérifier les données saisies.',
          error: err.flatten(),
        });
      else
        res
          .status(500)
          .json({ message: "Une erreur c'est produite.", error: err });
    },
    onNoMatch: (req, res) => {
      // console.error({req, res})
      res.status(405).json({
        message: `Méthode ${req.method} non autorisée.`,
        error: 'Non autorisé.',
      });
    },
  });
}
