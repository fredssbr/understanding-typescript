export const PI = 3.14;

export function calculateCircumference(diameter: number): number {
    return diameter * PI;
}

export function calculateArea(diameter: number): number {
    const radius: number = diameter / 2;
    return PI * (radius * radius);
}