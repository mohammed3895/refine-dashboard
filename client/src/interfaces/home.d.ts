export interface PieChartProps {
    title: string,
    value: number,
    series: Array<number>
    colors: Array<string>
}

export interface CourseCardProps {
    id?: BaseKey | undefined,
    title: string,
    category: string,
    level: string,
    photo: string
}