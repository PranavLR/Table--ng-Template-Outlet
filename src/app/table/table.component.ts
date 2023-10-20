import { Component, ContentChild, Directive, Input, TemplateRef } from '@angular/core';


interface TableHeaderTemplateContext<TItem extends object> {
  $implicit: TItem[];
}

@Directive({
  selector: 'ng-template[appTableHeader]',
})
export class TableHeaderTemplateDirective<TItem extends object> {
  @Input('appTableHeader') data!: TItem[] | '';

  static ngTemplateContextGuard<TContextItem extends object>(
    dir: TableHeaderTemplateDirective<TContextItem>,
    ctx: unknown
  ): ctx is TableHeaderTemplateContext<TContextItem> {
    return true;
  }
}

interface TableRowTemplateContext<TItem extends object> {
  $implicit: TItem;
}

@Directive({
  selector: 'ng-template[appTableRow]',
})
export class TableRowTemplateDirective<TItem extends object> {
  @Input('appTableRow') data!: TItem[];

  static ngTemplateContextGuard<TContextItem extends object>(
    dir: TableRowTemplateDirective<TContextItem>,
    ctx: unknown
  ): ctx is TableRowTemplateContext<TContextItem> {
    return true;
  }
}

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})

export class TableComponent<TItem extends object> {

  @Input() data!: TItem[];

  @ContentChild(TableHeaderTemplateDirective, { read: TemplateRef })
  headers?: TemplateRef<any>;

  @ContentChild(TableRowTemplateDirective, { read: TemplateRef })
  rows?: TemplateRef<any>;

}
