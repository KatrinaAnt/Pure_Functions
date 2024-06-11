import { healthIndicator } from '../app';

test.each([
    [
        {
            name: 'Маг', health: 90
        }, 'healthy'
    ],
    [
        {
            name: 'Друид', health: 31
        }, 'wounded'
    ],
    [
        {
            name: 'Эльф', health: 10
        }, 'critical'
    ],
])('testing health indicator function with player %s', (player, expected) => {
    const result = healthIndicator(player);
    expect(result).toBe(expected);
});