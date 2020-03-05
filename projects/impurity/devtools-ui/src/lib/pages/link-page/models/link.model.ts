import { Icon } from './icon.model';

export interface Link {
    label: string;
    url: string;
    icon: Icon;
    description?: string;
}
