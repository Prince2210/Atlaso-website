export type Model = {
  name: string;
  task: 'Detection' | 'Segmentation' | 'Change' | 'Classification' | 'Regression';
  sensors: string;
  resolution: string;
  metric: string;
};

export const models: Model[] = [
  { name: 'Buildings v4', task: 'Segmentation', sensors: 'Optical', resolution: '0.3–1 m', metric: '95.1% F1' },
  { name: 'Vessels v3', task: 'Detection', sensors: 'Optical + SAR', resolution: '0.5–10 m', metric: '97.4% precision' },
  { name: 'Vehicles v4', task: 'Detection', sensors: 'Optical', resolution: '0.3–0.5 m', metric: '93.8% F1' },
  { name: 'Solar panels v3', task: 'Segmentation', sensors: 'Optical', resolution: '0.3–10 m', metric: '94.6% IoU' },
  { name: 'Land cover (12 classes)', task: 'Segmentation', sensors: 'Optical + SAR', resolution: '10 m', metric: '89.2% accuracy' },
  { name: 'Crop type v5', task: 'Classification', sensors: 'Optical + SAR time series', resolution: '10 m', metric: '92.0% accuracy' },
  { name: 'Forest loss v2', task: 'Change', sensors: 'Optical + SAR', resolution: '10 m', metric: '91.5% F1' },
  { name: 'Flood extent', task: 'Segmentation', sensors: 'SAR', resolution: '10 m', metric: '93.3% IoU' },
  { name: 'Damage assessment', task: 'Classification', sensors: 'Optical', resolution: '0.3–0.5 m', metric: '88.7% accuracy' },
  { name: 'Vegetation height', task: 'Regression', sensors: 'Optical + elevation', resolution: '1 m', metric: '±1.8 m MAE' },
];
