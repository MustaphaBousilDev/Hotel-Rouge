import type { Fields, Files, Options } from 'formidable';
import type { NextApiRequest, NextApiResponse } from 'next';
import type { NextHandler } from 'next-connect';
import { parseForm } from '../multipart-parser';

export type NextApiRequestMultipart = NextApiRequest & {
  files: Files;
  fields: Fields;
};

export function multipart<T extends NextApiRequest>(config?: Options) {
  return async (req: T, res: NextApiResponse, next: NextHandler) => {
    const { files, fields } = await parseForm(req, config);
    (req as T & NextApiRequestMultipart).files = files;
    (req as T & NextApiRequestMultipart).fields = fields;
    return next();
  };
}
