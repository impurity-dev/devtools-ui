import Image from '../../../shared/models/image.model';
import Link from '../../../shared/models/link.model';

export interface LinkCard {
    link: Link;
    image: Image;
    description?: string;
}
