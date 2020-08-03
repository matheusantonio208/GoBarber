import multer from 'multer';
import { resolve, extname } from 'path';
import crypto from 'crypto';

export default {
  storage: multer.diskStorage({
    destination: resolve(__dirname, '..', '..', 'tmp', 'uploads'),
    filename: (req, file, callback) => {
      crypto.randomBytes(16, (error, res) => {
        if (error) return callback(error);

        return callback(null, res.toString('hex') + extname(file.originalname));
      });
    },
  }),
};
