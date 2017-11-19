import 'kendo-ui/js/kendo.autocomplete';

export class autocomplete{
  private datasource: kendo.data.DataSource;

  constructor() {
    this.datasource = new kendo.data.DataSource({
      transport: {
        read: {
          dataType: 'jsonp',
          url: '//demos.telerik.com/kendo-ui/service/Customers'
        }
      }
    });
  }
}
