import formidable from 'formidable';
import type { NextApiRequest } from 'next';
import type { Options, Fields, Files } from 'formidable';

export const parseForm = async (
  req: NextApiRequest,
  config?: Options
): Promise<{ fields: Fields; files: Files }> => {
  return await new Promise((resolve, reject) => {
    const form = formidable(config);
    form.parse(req, (err, fields, files) => {
      if (err) return reject(err);
      resolve({ fields, files });
    });
  });
};
