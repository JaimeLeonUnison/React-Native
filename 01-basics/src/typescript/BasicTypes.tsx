export const BasicTypes = () => {
    const name: string = 'Jaime';
    const age: number = 26;
    const isActive: boolean = false;

    const powers = ['React', 'ReactNative'];	
    
    return (
    <>
        <h3>Basic Types</h3>
        {name}, {age}, {isActive ? 'Active' : 'Not Active'}
        <p>{powers.join(' - ')}</p>
    </>
  )
}
