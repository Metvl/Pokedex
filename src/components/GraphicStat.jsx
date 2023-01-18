import '../index.css'
import {
    Chart as ChartJS,
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
    Tooltip,
    Legend,
} from 'chart.js';
import { Radar } from 'react-chartjs-2';

ChartJS.register(
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
    Tooltip,
    Legend
);

function GraficStats({ name, hp, att, spDef, spd, spAtt, def }) {
    const data = {
        labels: ['Vida', 'Ataque', 'Defensa Esp.', 'Velocidad', 'Ataque Esp.', 'Defensa'],
        datasets: [
            {
                label: `Estadistica base de ${name}`,
                data: [hp, att, spAtt, spd, spDef, def],
                backgroundColor: 'rgba(143, 154, 161, 0.2)',
                borderColor: 'rgba(143, 154, 161, 1)',
                borderWidth: 1,
                hoverBackgroundColor: "rgba(232,105,90,0.8)",
                hoverBorderColor: "red",
            }
        ]
    };

    return (
        <div className='container-graphic-data'>
            <Radar data={data} />
        </div>
    )
}

export default GraficStats