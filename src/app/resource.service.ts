import { Injectable } from '@angular/core';
import { Resource } from './resource.model';
import { RESOURCES } from './mock-resources';

@Injectable()
export class ResourceService {

  constructor() { }

  getResources() {
    return RESOURCES;
  }
}
