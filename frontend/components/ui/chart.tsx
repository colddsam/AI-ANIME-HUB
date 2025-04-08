"use client"

import type * as React from "react"

const Chart = ({ children, data }: { children: React.ReactNode; data: any[] }) => {
  return <>{children}</>
}

const ChartContainer = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  return <div className={className}>{children}</div>
}

const ChartTooltip = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>
}

const ChartTooltipContent = () => {
  return <div>Tooltip Content</div>
}

const ChartLegend = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>
}

const ChartLegendContent = () => {
  return <div>Legend Content</div>
}

const ChartGrid = () => {
  return <></>
}

const ChartXAxis = ({ dataKey }: { dataKey: string }) => {
  return <></>
}

const ChartYAxis = () => {
  return <></>
}

const ChartArea = ({ dataKey, fill }: { dataKey: string; fill: string }) => {
  return <></>
}

const ChartLine = ({
  dataKey,
  stroke,
  strokeWidth,
  name,
}: { dataKey: string; stroke: string; strokeWidth: number; name: string }) => {
  return <></>
}

const ChartBar = ({
  dataKey,
  fill,
  radius,
  name,
}: { dataKey: string; fill: string; radius: number[]; name: string }) => {
  return <></>
}

export {
  Chart,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,
  ChartLegendContent,
  ChartGrid,
  ChartXAxis,
  ChartYAxis,
  ChartArea,
  ChartLine,
  ChartBar,
}
