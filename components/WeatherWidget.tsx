import { Cloud, Sun, CloudRain, Thermometer } from 'lucide-react'
import { useEffect, useState } from 'react'

interface WeatherData {
  temperature: number
  condition: 'sunny' | 'cloudy' | 'rainy'
  location: string
}

export default function WeatherWidget() {
  const [weather, setWeather] = useState<WeatherData>({
    temperature: 72,
    condition: 'sunny',
    location: 'San Francisco, CA'
  })

  const getWeatherIcon = (condition: string) => {
    switch (condition) {
      case 'sunny':
        return <Sun className="w-8 h-8 text-yellow-400" />
      case 'cloudy':
        return <Cloud className="w-8 h-8 text-gray-400" />
      case 'rainy':
        return <CloudRain className="w-8 h-8 text-blue-400" />
      default:
        return <Sun className="w-8 h-8 text-yellow-400" />
    }
  }

  return (
    <section className="py-12 bg-gradient-to-b from-indigo-600/10 to-transparent">
      <div className="container mx-auto">
        <div className="max-w-md mx-auto bg-white/10 backdrop-blur-lg rounded-xl shadow-lg p-6 border border-white/20">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              {getWeatherIcon(weather.condition)}
              <div>
                <h3 className="text-2xl font-bold text-white">{weather.temperature}°F</h3>
                <p className="text-gray-200">{weather.location}</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Thermometer className="w-5 h-5 text-white/60" />
              <span className="text-white/60">Feels like {weather.temperature - 2}°F</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 