"use client"

export default function DashboardChart() {
  const data = [
    { month: "Jan", revenue: 4000, sales: 240 },
    { month: "Feb", revenue: 3000, sales: 198 },
    { month: "Mar", revenue: 2000, sales: 120 },
    { month: "Apr", revenue: 2780, sales: 160 },
    { month: "May", revenue: 1890, sales: 115 },
    { month: "Jun", revenue: 2390, sales: 140 },
    { month: "Jul", revenue: 3490, sales: 220 },
    { month: "Aug", revenue: 4000, sales: 250 },
    { month: "Sep", revenue: 5000, sales: 310 },
    { month: "Oct", revenue: 4500, sales: 270 },
    { month: "Nov", revenue: 5200, sales: 325 },
    { month: "Dec", revenue: 6100, sales: 380 },
  ]

  return (
    <div className="w-full h-[300px] text-[#fdeff0]/80">
      <div className="flex justify-between mb-4">
        <div className="flex items-center">
          <div className="w-3 h-3 rounded-full bg-[#ff5a7e] mr-2"></div>
          <span className="text-xs">Revenue</span>
        </div>
        <div className="flex items-center">
          <div className="w-3 h-3 rounded-full bg-[#393459] mr-2"></div>
          <span className="text-xs">Sales Count</span>
        </div>
      </div>

      <div className="relative w-full h-[250px] border-b border-l border-[#fdeff0]/10">
        {/* Y-axis labels */}
        <div className="absolute -left-10 top-0 h-full flex flex-col justify-between text-xs text-[#fdeff0]/60">
          <span>6000</span>
          <span>4500</span>
          <span>3000</span>
          <span>1500</span>
          <span>0</span>
        </div>

        {/* X-axis labels */}
        <div className="absolute left-0 -bottom-6 w-full flex justify-between text-xs text-[#fdeff0]/60">
          {data.map((item, index) => (
            <span key={index} style={{ width: `${100 / 12}%`, textAlign: "center" }}>
              {item.month}
            </span>
          ))}
        </div>

        {/* Grid lines */}
        <div className="absolute inset-0">
          {[0, 1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className="absolute left-0 right-0 border-t border-[#fdeff0]/10"
              style={{ top: `${i * 25}%` }}
            ></div>
          ))}
        </div>

        {/* Chart visualization placeholder */}
        <div className="absolute inset-0 flex items-end">
          {data.map((item, index) => (
            <div key={index} className="h-full flex-1 flex flex-col justify-end items-center">
              {/* Bar for sales */}
              <div
                className="w-1/2 bg-[#393459] rounded-t-sm mx-px relative group"
                style={{ height: `${(item.sales / 380) * 100}%` }}
              >
                <div className="absolute opacity-0 group-hover:opacity-100 bottom-full mb-2 left-1/2 transform -translate-x-1/2 bg-[#2a2642] text-[#fdeff0] text-xs py-1 px-2 rounded pointer-events-none whitespace-nowrap transition-opacity">
                  {item.sales} sales
                </div>
              </div>

              {/* Line point for revenue */}
              <div
                className="absolute w-2 h-2 rounded-full bg-[#ff5a7e] group"
                style={{
                  bottom: `${(item.revenue / 6100) * 100}%`,
                  left: `${index * (100 / 12) + 100 / 24}%`,
                }}
              >
                <div className="absolute opacity-0 group-hover:opacity-100 bottom-full mb-2 left-1/2 transform -translate-x-1/2 bg-[#2a2642] text-[#fdeff0] text-xs py-1 px-2 rounded pointer-events-none whitespace-nowrap transition-opacity">
                  ${item.revenue}
                </div>
              </div>

              {/* Line connecting revenue points */}
              {index < data.length - 1 && (
                <div
                  className="absolute bg-[#ff5a7e] h-px"
                  style={{
                    bottom: `${(item.revenue / 6100) * 100}%`,
                    left: `${index * (100 / 12) + 100 / 24}%`,
                    width: `${100 / 12}%`,
                    transform: `rotate(${
                      Math.atan2(((data[index + 1].revenue - item.revenue) / 6100) * 100, 100 / 12) * (180 / Math.PI)
                    }deg)`,
                    transformOrigin: "0 50%",
                  }}
                ></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

