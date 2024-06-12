import height from "../assets/height.png";
import weight from "../assets/weight.png";
import temperature from "../assets/temperature.png";
import blood from "../assets/blood.png";
import respiration from "../assets/respiration.png";
import pressure from "../assets/pressure.png";
import sugar from "../assets/sugar.png";

const vitals = [
    {
        icon: height,
        title: 'Height',
        value: '170cm'
    },
    {
        icon: weight,
        title: 'Weight',
        value: '68Kg'
    },
    {
        icon: temperature,
        title: 'Temperature',
        value: '37°C'
    },
    {
        icon: blood,
        title: 'Blood Type',
        value: 'O+'
    },
    {
        icon: respiration,
        title: 'Respiration Rate',
        value: '16 breaths per minute'
    },
    {
        icon: pressure,
        title: 'Blood Pressure',
        value: '120/80 mmHg'
    },
    {
        icon: sugar,
        title: 'Blood Glucose',
        value: '90 mg/dL'
    }
]

export {vitals}