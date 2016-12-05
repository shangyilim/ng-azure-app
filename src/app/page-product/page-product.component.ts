import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../shared/services';
import { Product } from '../shared/interfaces';

@Component({
    selector: 'page-product',
    templateUrl: 'page-product.component.html',
    styleUrls: ['page-product.component.css']
})
export class PageProductComponent implements OnInit {
    product: Product;

    constructor(private route: ActivatedRoute, private router: Router,
        private productSvc: ProductService) { }

    ngOnInit() {
        this.route.params
            .flatMap((x: PageProductRouteParam) => {
                return this.productSvc.get(+x.id);
            })
            .subscribe(x => {
                this.product = x;
            });
    }
}

interface PageProductRouteParam {
    id: string
}