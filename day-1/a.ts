import { runSolution } from '../utils.ts';

/** provide your solution as the return of this function */
export async function day1a(data: string[]): Promise<number> {
  const leftList: number[] = [];
  const rightList: number[] = [];

  for (const line of data) {
    if (!line.trim()) {
      console.warn('Empty line is found.');
      continue;
    }

    const parts = line.split(/\s+/).map(Number);
    if (parts.length !== 2 || parts.some(isNaN)) {
      throw new Error(`Invalid line: "${line}"`);
    }

    const [left, right] = parts;
    leftList.push(left);
    rightList.push(right);
  }

  leftList.sort((a, b) => a - b);
  rightList.sort((a, b) => a - b);

  let totalDistance = 0;
  for (let i = 0; i < leftList.length; i++) {
    totalDistance += Math.abs(leftList[i] - rightList[i]);
  }

  return totalDistance;
}

await runSolution(day1a);
