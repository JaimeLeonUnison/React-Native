const addTwoNumbers = (a: number, b: number): string => {
        return `${a + b}`;
};   

export const BasicFunctions = () => {
  return (
    <>
    <h3>BasicFunctions</h3>
    <span>El resutlado de sumar 10+26 es: {addTwoNumbers(10, 26)}</span>
    </>
  )
}
