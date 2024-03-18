import Chart from 'chart.js/auto';
import { Doughnut } from 'react-chartjs-2';

// console.log(Chart);

export const PierChart = () => {
    const cantInv: number = 85;
    const cantInvFin: number = 24;
    const labels: string[] = ['Finalizados', 'En Curso'];

    const data = {
        labels,
        datasets: [
            {
                label: '',
                data: [cantInv, cantInvFin],
                backgroundColor: ['#6366F1', 'rgb(14 165 233)'],
                borderColor: ['#6366F1', 'rgb(14 165 233)'],
                color: 'red',
                borderWidth: 1,
            },
        ],
    };

    return (
        <div className="dark:bg-gray-900 rounded-xl p-3">
            <Doughnut
                data={data}
                height={385}
                width={100} // 313
                options={{
                    maintainAspectRatio: false,
                    plugins: {
                        legend: {
                            position: 'left',
                            display: true,
                            labels: {
                                color: '#000000',
                                font: {
                                    size: 15,
                                    weight: 'bold',
                                },
                                boxWidth: 20,
                                padding: 20,
                            },
                        },
                    },
                }}
            />
        </div>
    );
};
