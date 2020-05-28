import { Component, ViewChild, OnInit } from "@angular/core";
import { TableService } from "./table.service";

import { MatPaginator } from "@angular/material/paginator";
import { MatSort } from "@angular/material/sort";
import { MatTableDataSource } from "@angular/material/table";

@Component({
  selector: "table-basic-flex-example",
  styleUrls: ["table-basic-flex-example.css"],
  templateUrl: "table-basic-flex-example.html"
})
export class TableBasicFlexExample {
  public displayedColumns: string[];
  public dataSource: any;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(public service: TableService) {
    this.service.getData().subscribe((data: any[]) => {
      this.displayedColumns = Object.keys(data[0]);
      // If you don't need all fields:
      // displayedColumns: string[] = ['name', 'weight'];
      this.dataSource = new MatTableDataSource(data);
    });
  }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
}
