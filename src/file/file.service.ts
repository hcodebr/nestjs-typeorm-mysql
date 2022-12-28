import { Injectable } from '@nestjs/common';
import { PathLike } from 'fs';
import { writeFile } from 'fs/promises';
import { join } from 'path';

@Injectable()
export class FileService {
  getDestinationPath() {
    return join(__dirname, '..', '..', 'storage', 'photos');
  }

  async upload(file: Express.Multer.File, filename: string) {
    const path: PathLike = join(this.getDestinationPath(), filename);
    await writeFile(path, file.buffer);
    return path;
  }
}
