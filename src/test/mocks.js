import { readFileSync } from 'fs';
import { join } from 'path';

export const MOCK_500PX_PHOTOS_RESPONSE = readFileSync(join(__dirname, '500px_photos_response.json')).toString();