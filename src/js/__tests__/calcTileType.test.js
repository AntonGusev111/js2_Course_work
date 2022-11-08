import calcTileType from "../utils";

test('calcTileType test', () =>{
    const result = calcTileType(0,8)

    expect(result).toBe('top-left');
})