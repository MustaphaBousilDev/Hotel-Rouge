import { randomUUID } from 'crypto';

const extentions = ['jpg', 'png', 'gif', 'jpeg', 'webp'] as const;

type Extension = (typeof extentions)[number];

export const randomFilename = (ext?: Extension) =>
  randomUUID() + '-' + Date.now() + (ext ? '.' + ext : '');
