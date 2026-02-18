import React from "react";

interface ModeData {
  mode: string;
  icon: string;
  emissions: string;
  value: number; // in grams per km
}

interface CarbonSavingsDiagramProps {
  traditional: ModeData;
  eco: ModeData;
  savings: number; // percentage
  distance: number; // in km
}

export default function CarbonSavingsDiagram({
  traditional,
  eco,
  savings,
  distance,
}: CarbonSavingsDiagramProps) {
  const maxValue = Math.max(traditional.value, eco.value);

  return (
    <div className="my-8 p-6 bg-muted/50 rounded-lg">
      <h3 className="text-lg font-semibold mb-6 text-center">
        Carbon Emissions Comparison
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
        {/* Traditional Route */}
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <span className="text-3xl">{traditional.icon}</span>
            <div>
              <div className="font-semibold">Traditional Route</div>
              <div className="text-sm text-muted-foreground">
                {traditional.mode}
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span>Emissions per km</span>
              <span className="font-mono font-semibold text-red-600 dark:text-red-400">
                {traditional.emissions}
              </span>
            </div>
            <div className="flex justify-between text-sm">
              <span>Total for {distance} km</span>
              <span className="font-mono font-bold text-red-600 dark:text-red-400">
                {(traditional.value * distance / 1000).toFixed(1)} kg CO₂
              </span>
            </div>
          </div>

          <div className="h-4 bg-red-100 dark:bg-red-950 rounded-full overflow-hidden">
            <div
              className="h-full bg-red-500"
              style={{ width: `${(traditional.value / maxValue) * 100}%` }}
            />
          </div>
        </div>

        {/* Eco Route */}
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <span className="text-3xl">{eco.icon}</span>
            <div>
              <div className="font-semibold">EcoRoute Recommendation</div>
              <div className="text-sm text-muted-foreground">{eco.mode}</div>
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span>Emissions per km</span>
              <span className="font-mono font-semibold text-green-600 dark:text-green-400">
                {eco.emissions}
              </span>
            </div>
            <div className="flex justify-between text-sm">
              <span>Total for {distance} km</span>
              <span className="font-mono font-bold text-green-600 dark:text-green-400">
                {(eco.value * distance / 1000).toFixed(1)} kg CO₂
              </span>
            </div>
          </div>

          <div className="h-4 bg-green-100 dark:bg-green-950 rounded-full overflow-hidden">
            <div
              className="h-full bg-green-500"
              style={{ width: `${(eco.value / maxValue) * 100}%` }}
            />
          </div>
        </div>
      </div>

      {/* Savings Summary */}
      <div className="border-t pt-4 mt-4">
        <div className="flex items-center justify-center gap-2 text-lg">
          <span className="text-green-600 dark:text-green-400 font-bold">
            ✓ {savings}% reduction
          </span>
          <span className="text-muted-foreground">
            Save {(traditional.value * distance / 1000 - eco.value * distance / 1000).toFixed(1)} kg CO₂
          </span>
        </div>
        <p className="text-center text-sm text-muted-foreground mt-2">
          That&apos;s equivalent to the carbon absorbed by{" "}
          {((traditional.value * distance / 1000 - eco.value * distance / 1000) / 0.025).toFixed(1)} trees in a month
        </p>
      </div>
    </div>
  );
}