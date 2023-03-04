import { ApexOptions } from 'apexcharts';

export const TotalRevenueSeries = [
  {
    name: 'DevOps',
    data: [13, 24, 11, 5, 13, 13, 26],
  },
  {
    name: 'Web',
    data: [15, 4, 12, 14, 10, 13, 7],
  },
  {
    name: 'Android',
    data: [35, 14, 12, 24, 18, 22, 17],
  },
];

export const TotalRevenueOptions: ApexOptions = {
  chart: {
    type: 'bar',
    stacked: true,
    toolbar: {
      show: false,
    },
  },
  colors: ['#FF808B', '#5E81F4', '#4D4CAC'],
  plotOptions: {
    bar: {
      horizontal: false,
      columnWidth: '30%',
    },
  },
  dataLabels: {
    enabled: false,
  },
  grid: {
    show: false,
  },
  stroke: {
    colors: ['transparent'],
    width: 4,
  },
  xaxis: {
    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
    labels: {
      style: {
        fontSize: '16px',
        fontWeight: 400,
        colors: ['#A2A2C2', '#A2A2C2', '#A2A2C2', '#A2A2C2', '#A2A2C2', '#A2A2C2', '#A2A2C2']
      }
    }
  },
  fill: {
    opacity: 1,
  },
  legend: {
    position: 'bottom',
    horizontalAlign: 'left',
    fontSize: '14px',
    fontWeight: 400,
    offsetX: 12,
    offsetY: 12,
    labels: {
      colors: '#A2A2C2'
    },
    itemMargin: {
      horizontal: 12,
      vertical: 7,
    },
    markers: {
      width: 12,
      height: 12,
      radius: 12
    }
  },
  tooltip: {
    y: {
      formatter(val: number) {
        return `${val} hours`;
      },
    },
  },
};
