import calcTileType from "../utils";

test('calcTileType test', () =>{
    const result = calcTileType(0, 8)
    console.log(result)

    expect(result).toBe('top-left');
})