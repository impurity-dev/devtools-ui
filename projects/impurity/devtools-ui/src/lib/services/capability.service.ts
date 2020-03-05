import { Capability } from './../types/capability.type';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class CapabilityService {
    private readonly capabilities: Capability[] = [];

    public hasCapability(capability: Capability): boolean {
        return this.capabilities.includes(capability);
    }

    public setCapability(capabilities: Capability[]): void {
        this.capabilities.values = capabilities.values;
    }
}
