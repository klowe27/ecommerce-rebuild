import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Resource } from '../resource.model';
import { ResourceService } from '../resource.service';

@Component({
  selector: 'app-resource-detail',
  templateUrl: './resource-detail.component.html',
  styleUrls: ['./resource-detail.component.css'],
  providers: [ResourceService]
})
export class ResourceDetailComponent implements OnInit {
  resourceSlug: string = null;

  constructor(private route: ActivatedRoute, private location: Location, private resourceService: ResourceService) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
    this.resourceSlug = urlParameters['slug'];
});
  }

}
