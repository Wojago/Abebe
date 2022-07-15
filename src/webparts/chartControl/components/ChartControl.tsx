import * as React from 'react';
import styles from './ChartControl.module.scss';
import { FunctionComponent } from 'react';
import { IChartControlProps } from './IChartControlProps';
import { escape } from '@microsoft/sp-lodash-subset';
import { Map, ICoordinates, MapType } from "@pnp/spfx-controls-react/lib/Map";
import { ChartControl, ChartType } from '@pnp/spfx-controls-react/lib/ChartControl';
import { Carousel } from "@pnp/spfx-controls-react/lib/Carousel";
//export default class ChartControl2 extends React.Component<IChartControlProps, {}> {
  //public render(): React.ReactElement<IChartControlProps> {
   // const ChartControl2: React.FunctionComponent<IChartControlProps> =(props) => {
    const ChartControl2: React.FC<IChartControlProps> =(props) => {
    return (
     <div className={ styles.chartControl }>
  <ChartControl 
  type={ChartType.Bar}
  data={{
    labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
    datasets: [{
        label: '# of Votes',
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)'
        ],
        borderColor: [
            'rgba(255,99,132,1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
        ],
        borderWidth: 1
    }]
  }}
  options={{
    scales: {
        yAxes: [{
          ticks: {
              beginAtZero:true
          }
      }]
    }
  }}
/>
<Map titleText="Washington DC"
     loadingMessage ='I am coming soon'
     coordinates={{ latitude: 38.9072, longitude: -77.050636 }}
     enableSearch={true} />
      </div>
    );
  }

