import { Component, OnInit } from '@angular/core';
import { Resource } from '../resource.model'
import { Router } from '@angular/router';
import { ResourceService } from '../resource.service';


@Component({
  selector: 'app-resources',
  templateUrl: './resources.component.html',
  styleUrls: ['./resources.component.css'],
  providers: [ResourceService]
})

export class ResourcesComponent implements OnInit {
  resources: Resource[];

  constructor(private router: Router, private resourceService: ResourceService) { }

  ngOnInit(){
    this.resources = this.resourceService.getResources();
  }

  goToDetailPage(clickedResource: Resource){
    this.router.navigate(['resources', clickedResource.slug]);
  }
}
