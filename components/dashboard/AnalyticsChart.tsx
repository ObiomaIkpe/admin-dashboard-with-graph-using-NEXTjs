'use client'

import {LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer} from 'recharts'
import { Card, CardContent, CardDescription, CardTitle, CardHeader} from '@/components/ui/card'

import data from '@/data/analyticsItems';
const AnalyticsChart = () => {
  return (
    <>
    <Card>
        <CardHeader>
            <CardTitle>Analytics For This year</CardTitle>
            <CardDescription>Views Per Month</CardDescription>
            <CardContent>
                <div style={{width: '100%', height:300}}>
                    <ResponsiveContainer>
                        <LineChart width={1100} height={300} data={data}>
                            <Line type='monotone' dataKey='uv' stroke='#888Ad8'/>
                            <CartesianGrid stroke='#ccc' />
                            <XAxis dataKey='name' />
                            <YAxis />
                        </LineChart>
                    </ResponsiveContainer>
                </div>
            </CardContent>
        </CardHeader>
    </Card>
    </>
  )
}

export default AnalyticsChart