import {ResponsiveContainer} from "recharts";
import {PieChart} from "@mantine/charts";

const data = [
    {name: 'USA', value: 400, color: 'indigo.6'},
    {name: 'India', value: 300, color: 'yellow.6'},
    {name: 'Japan', value: 300, color: 'teal.6'},
    {name: 'Other', value: 200, color: 'gray.6'},
];



const PieChartDiag = () => {
    return (
        <ResponsiveContainer width={"100%"} height={"80%"}>
            <PieChart data={data} withTooltip tooltipDataSource="segment"  labelsType="name"/>
</ResponsiveContainer>
)
}

export default PieChartDiag;