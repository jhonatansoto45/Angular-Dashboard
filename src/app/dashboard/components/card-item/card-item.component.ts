import { Component, AfterViewInit } from '@angular/core';
import { CardItemProfile } from 'src/app/interfaces/dashboard.interface';

@Component({
  selector: 'app-card-item',
  templateUrl: './card-item.component.html',
  styleUrls: ['./card-item.component.scss'],
})
export class CardItemComponent implements AfterViewInit {
  dataItem: CardItemProfile[] = [
    {
      image: 'cash',
      text: `Venta Semanal`,
      value: 100,
    },
    {
      image: 'users-minus',
      text: 'Nuevos Usuarios',
      value: 70,
    },
    {
      image: 'books',
      text: 'Pedidos',
      value: 50,
    },
    {
      image: 'bug',
      text: 'Pendientes',
      value: 20,
    },
  ];

  counter = 0;
  interval!: NodeJS.Timer;

  ngAfterViewInit(): void {
    this.setCounter();
  }

  setCounter(): void {
    const value = document.querySelectorAll('.status__value');
    this.setInterval(value[0], 0, 'k');
    this.setInterval(value[1], 1);
    this.setInterval(value[2], 2);
    this.setInterval(value[3], 3, '');
  }

  setInterval(value: Element, index: number, appendStr = 'm'): void {
    this.counter = 0;
    const inteval = setInterval(() => {
      this.counter += 1;
      value.innerHTML = `${this.counter}${appendStr}`;
      console.log(this.dataItem[index].value, 'value');
      if (this.counter === this.dataItem[index].value) clearInterval(inteval);
    }, 80);
  }
}
