import Link from '../../../shared/models/link.model';
import Image from '../../../shared/models/image.model';

export interface LinkCard {
    link: Link;
    image: Image;
    description?: string;
}
