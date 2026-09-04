export const FPS = 32;

export const EASE_MOVE = [
  0, 0.014, 0.044, 0.193, 0.317, 0.545, 0.621, 0.735, 0.777, 0.838, 0.868,
  0.908, 0.924, 0.95, 0.962, 0.979, 0.985, 0.994, 0.996, 1,
];

export const EASE_RETURN = [
  0.0, 0.0115, 0.023, 0.0475, 0.072, 0.1835, 0.295, 0.3645, 0.434, 0.534,
  0.634, 0.667, 0.7, 0.7495, 0.799, 0.8175, 0.836, 0.862, 0.888, 0.8995,
  0.911, 0.9275, 0.944, 0.949, 0.954, 0.9685, 0.983, 0.985, 0.987, 0.9915,
  0.996, 0.998, 1.0,
];

export const RED = "#f5333f";
export const WHITE = "#fdfefd";

export const CAP_H = 56 / 304;

export const FONT_VAR = "--font-silkscreen";
export const FONT_WEIGHT = 400;

export const BASELINE_1 = 140 / 304;
export const LINE_PITCH = 67.5 / 304;

export const JITTER_CELLS = 1;

export const JITTER_S = 5.2;

export const JITTER_GATE = 0.975;

export const JITTER_EASE_TICKS = 6;

export const BOND_CELL_SCALE = 0.5;

export const CAP_PIXELS = 9;

export const BOND_AIR_CELLS = 2;

export const BOND_MIN_CELLS = 1;

export const BOND_WEIGHT_CELLS = 2;

export const BOND_BOW_CELLS = 1;

export const BOND_BOW_S = 7;

export const BOND_ON_TICK = 3;

export const BOND_OFF_BEFORE_HOME = 2;

export const LINES = ["Prashant", "Koirala"] as const;

export interface Pose {
  gaps: number[][];
  shift: number[];
  dy: number[][];
}

export const POSES: Pose[] = [
  {
    gaps: [
      [52.0, 57.5, 60.7, 54.4, 52.8, 59.5, 59.4].map((v) => v / 304),
      [57.5, 64.6, 65.7, 58.3, 59.1, 66.3].map((v) => v / 304),
    ],
    shift: [4.5 / 304, -10.2 / 304],
    dy: [
      [-33.0, -21.7, -12.7, -7.7, -7.7, -12.7, -21.7, -33.0].map((v) => v / 304),
      [8.0, 15.3, 22.7, 30.0, 37.3, 44.7, 52.0].map((v) => v / 304),
    ],
  },

  {
    gaps: [
      [64.9, 58.4, 56.1, 63.2, 63.7, 56.4, 57.8].map((v) => v / 304),
      [70.4, 62.5, 62.7, 70.5, 68.3, 61.0].map((v) => v / 304),
    ],
    shift: [-3.8 / 304, 12.7 / 304],
    dy: [
      [-2.0, -15.9, -27.0, -33.2, -33.2, -27.0, -15.9, -2.0].map((v) => v / 304),
      [49.5, 51.0, 44.9, 34.0, 23.1, 17.0, 18.5].map((v) => v / 304),
    ],
  },

  {
    gaps: [
      [50.6, 56.9, 58.0, 51.4, 52.1, 58.5, 56.1].map((v) => v / 304),
      [56.5, 63.7, 62.3, 55.5, 58.6, 64.6].map((v) => v / 304),
    ],
    shift: [-13.1 / 304, 6.6 / 304],
    dy: [
      [-6.0, -12.9, -19.7, -26.6, -33.4, -40.3, -47.1, -54.0].map((v) => v / 304),
      [4.0, 4.0, 4.0, 4.0, 48.0, 48.0, 48.0].map((v) => v / 304),
    ],
  },

  {
    gaps: [
      [66.2, 58.8, 58.9, 66.3, 64.3, 57.4, 61.2].map((v) => v / 304),
      [71.2, 63.3, 66.3, 73.5, 68.6, 62.7].map((v) => v / 304),
    ],
    shift: [-4.6 / 304, -2.9 / 304],
    dy: [
      [-47.9, -50.0, -45.5, -35.8, -24.2, -14.5, -10.0, -12.1].map((v) => v / 304),
      [28.0, 40.0, 48.8, 52.0, 48.8, 40.0, 28.0].map((v) => v / 304),
    ],
  },

  {
    gaps: [
      [55.1, 62.1, 60.7, 54.1, 57.1, 63.0, 58.4].map((v) => v / 304),
      [61.9, 68.9, 64.9, 58.9, 64.4, 69.0].map((v) => v / 304),
    ],
    shift: [4.9 / 304, -11.4 / 304],
    dy: [
      [-14.0, -14.0, -14.0, -14.0, -14.0, -54.0, -54.0, -54.0].map((v) => v / 304),
      [54.0, 32.0, 15.9, 10.0, 15.9, 32.0, 54.0].map((v) => v / 304),
    ],
  },

  {
    gaps: [
      [59.1, 52.5, 54.9, 60.9, 56.9, 52.0, 57.2].map((v) => v / 304),
      [63.2, 57.0, 62.0, 66.9, 60.7, 57.4].map((v) => v / 304),
    ],
    shift: [-1.3 / 304, 8.4 / 304],
    dy: [
      [-8.0, -20.1, -29.9, -35.3, -35.3, -29.9, -20.1, -8.0].map((v) => v / 304),
      [12.0, 12.0, 12.0, 12.0, 48.0, 48.0, 48.0].map((v) => v / 304),
    ],
  },
];

export const SCATTERS_MIN = 2;
export const SCATTERS_MAX = 4;

export const MOVE_TICKS = 20;
export const RETURN_TICKS = 17;

export const HOLD_TICKS = 8;

export const ARRIVE_SPREAD = 0.08;
