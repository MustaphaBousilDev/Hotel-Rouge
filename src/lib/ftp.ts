import type { AccessOptions } from 'basic-ftp';
import { Client } from 'basic-ftp';
import { env } from '@/env/server.mjs';

export const config: AccessOptions = {
  host: env.FTP_HOST,
  user: env.FTP_USER,
  password: env.FTP_PASSWORD,
  port: env.FTP_PORT ?? 21,
  secure: true,
  secureOptions: {
    rejectUnauthorized: false,
  },
};

/**
 * @class FTP
 * @description A wrapper around the basic-ftp library,
 * that connects automatically to the ftp server provided in the config with `secure` flag.
 * @see https://www.npmjs.com/package/basic-ftp
 */
export default class FTP {
  private static ftp: Client | null = null;

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  private constructor() {}
  /**
   * @description connects to the ftp client.
   * @returns Promise
   */
  static connect = async () => {
    await this.client().access(config);
  };
  /**
   * @description close the connection to the server after interaction.
   * @return void
   */
  static close = () => {
    this.client().close();
  };

  /**
   * @description instantiate the ftp client. To be called for custom interactions.
   * @returns Client
   * @example
   * await FTP.client().downloadTo(dest, from);
   */
  static client = () => {
    if (!this.ftp) {
      this.ftp = new Client();
      this.ftp.ftp.verbose = env.NODE_ENV === 'development';
    }
    return this.ftp;
  };
  /**
   *
   * @param source path to file to be uploaded
   * @param dest path to store file in ftp server
   * @returns
   * response - `FTPResponse`.
   *
   * url - `string` complete url to the file in ftp server
   */
  static upload = async (source: string, dest: string) => {
    const c = await this.client().uploadFrom(source, dest);
    return { response: c, url: `${env.FTP_FILEROOT}/${dest}` };
  };
  /**
   *
   * @param path - path to file to be removed from server.
   * @returns FTPResponse
   */
  static remove = (path: string) => {
    return this.client().remove(path);
  };
}
