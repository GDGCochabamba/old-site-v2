import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { PartnerService } from './partner.service';
import { Partner } from '../../shared/models/partner.model';

@Component({
  selector: 'gdg-partners',
  templateUrl: './partners.component.html',
  styleUrls: ['./partners.component.scss']
})
export class PartnersComponent implements OnInit {
  partners$: Observable<Partner[]>;

  constructor(private partnerService: PartnerService) {}

  ngOnInit(): void {
    this.partners$ = this.partnerService
      .getAll()
      .pipe(
        map(partners =>
          partners.sort((partnerA, partnerB) => partnerA.order - partnerB.order)
        )
      );
  }
}
