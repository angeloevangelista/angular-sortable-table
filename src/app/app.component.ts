import { Component } from '@angular/core';

interface AlphaEntity {
  AField: string;
  BField: string;
  CField: string;
  DField: string;
  EField: Date;
}

enum AlphaEntityLabels {
  AField = 'Field - A',
  BField = 'Field - B',
  CField = 'Field - C',
  DField = 'Field - D',
  EField = 'Field - E',
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  data: AlphaEntity[];

  constructor() {
    this.data = [
      {
        AField: 'Angelo',
        BField: 'Edmundo',
        CField: 'André',
        DField: 'Yuri',
        EField: new Date(2020, 10, 4),
      },
      {
        AField: 'Martins',
        BField: 'Fernando',
        CField: 'Andrey',
        DField: 'Claudinei',
        EField: new Date(),
      },
      {
        AField: 'Louise',
        BField: 'Felde',
        CField: 'Bueno',
        DField: 'Ricardo',
        EField: new Date(),
      },
      {
        AField: 'Fábio',
        BField: 'Gilson',
        CField: 'Edilson',
        DField: 'Thiago',
        EField: new Date(),
      },
    ];
  }

  get labelPairs(): [string, AlphaEntityLabels][] {
    return Object.entries(AlphaEntityLabels);
  }

  handleSortByColumn(columnName: string) {
    let sortFunction: (a: AlphaEntity, b: AlphaEntity) => number;

    switch (columnName as keyof AlphaEntity) {
      case 'AField':
      case 'BField':
      case 'CField':
      case 'DField':
        sortFunction = (a: AlphaEntity, b: AlphaEntity) => {
          const valueA = (
            a[columnName as keyof AlphaEntity] as string
          ).toUpperCase();

          const valueB = (
            b[columnName as keyof AlphaEntity] as string
          ).toUpperCase();

          if (valueA < valueB) return -1;
          if (valueA > valueB) return 1;

          return 0;
        };
        break;

      case 'EField':
        sortFunction = (a: AlphaEntity, b: AlphaEntity) => {
          const valueA = a[columnName as keyof AlphaEntity] as Date;
          const valueB = b[columnName as keyof AlphaEntity] as Date;

          if (valueA < valueB) return -1;
          if (valueA > valueB) return 1;

          return 0;
        };
        break;
    }

    this.data = this.data.sort(sortFunction);
  }
}
