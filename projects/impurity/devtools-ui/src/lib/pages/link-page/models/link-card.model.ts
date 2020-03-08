import Link from '../../../shared/models/link';
import Image from '../../../shared/models/image';

export interface LinkCard {
    link: Link;
    image: Image;
    description?: string;
}
