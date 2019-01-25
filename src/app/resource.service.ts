import { Injectable } from '@angular/core';
import { Resource } from './resource.model';
import { RESOURCES } from './mock-resources';

@Injectable()
export class ResourceService {

  constructor() { }

  getResources() {
    return RESOURCES;
  }

  getResourceBySlug(resourceSlug: string){
    for (var i = 0; i <= RESOURCES.length - 1; i++) {
      if (RESOURCES[i].slug === resourceSlug) {
        return RESOURCES[i];
      }
    }
  }
}
