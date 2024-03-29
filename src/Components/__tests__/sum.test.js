import { sum } from "../sum"

test('should calculate sum of two number', () => {
  
    const result=sum(3,4)

    //assertion
    expect(result).toBe(7);
})


