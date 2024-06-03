import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrl: './chart.component.css',
})
export class ChartComponent implements OnInit {
  basicData: any;

  basicOptions: any;
  data: any;

  options: any;
  ngOnInit() {
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--text-color');
    const textColorSecondary = documentStyle.getPropertyValue(
      '--text-color-secondary'
    );
    const surfaceBorder = documentStyle.getPropertyValue('--surface-border');

    this.basicData = {
      labels: ['Q1', 'Q2', 'Q3', 'Q4'],
      datasets: [
        {
          label: 'Sales',
          data: [540, 325, 702, 620],
          backgroundColor: [
            'rgba(255, 159, 64, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(153, 102, 255, 0.2)',
          ],
          borderColor: [
            'rgb(255, 159, 64)',
            'rgb(75, 192, 192)',
            'rgb(54, 162, 235)',
            'rgb(153, 102, 255)',
          ],
          borderWidth: 1,
        },
      ],
    };

    this.basicOptions = {
      plugins: {
        legend: {
          labels: {
            color: textColor,
          },
        },
      },
      scales: {
        y: {
          beginAtZero: true,
          ticks: {
            color: textColorSecondary,
          },
          grid: {
            color: surfaceBorder,
            drawBorder: false,
          },
        },
        x: {
          ticks: {
            color: textColorSecondary,
          },
          grid: {
            color: surfaceBorder,
            drawBorder: false,
          },
        },
      },
    };

    // 2nd chart
    // const documentStyle = getComputedStyle(document.documentElement);
    // const textColor = documentStyle.getPropertyValue('--text-color');
    // const textColorSecondary = documentStyle.getPropertyValue(
    //   '--text-color-secondary'
    // );
    // const surfaceBorder = documentStyle.getPropertyValue('--surface-border');

    // this.data = {
    //   labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    //   datasets: [
    //     {
    //       type: 'bar',
    //       label: 'Dataset 1',
    //       backgroundColor: documentStyle.getPropertyValue('--blue-500'),
    //       data: [50, 25, 12, 48, 90, 76, 42],
    //     },
    //     {
    //       type: 'bar',
    //       label: 'Dataset 2',
    //       // backgroundColor: documentStyle.getPropertyValue('--green-500'),
    //       data: [21, 84, 24, 75, 37, 65, 34],
    //     },
    //     {
    //       type: 'bar',
    //       label: 'Dataset 3',
    //       // backgroundColor: documentStyle.getPropertyValue('--yellow-500'),
    //       data: [41, 52, 24, 74, 23, 21, 32],
    //     },
    //   ],
    // };

    // this.options = {
    //   maintainAspectRatio: false,
    //   aspectRatio: 0.8,
    //   plugins: {
    //     tooltip: {
    //       mode: 'index',
    //       intersect: false,
    //     },
    //     legend: {
    //       labels: {
    //         color: textColor,
    //       },
    //     },
    //   },
    //   scales: {
    //     x: {
    //       stacked: true,
    //       ticks: {
    //         color: textColorSecondary,
    //       },
    //       grid: {
    //         color: surfaceBorder,
    //         drawBorder: false,
    //       },
    //     },
    //     y: {
    //       stacked: true,
    //       ticks: {
    //         color: textColorSecondary,
    //       },
    //       grid: {
    //         color: surfaceBorder,
    //         drawBorder: false,
    //       },
    //     },
    //   },
    // };
  }
}
