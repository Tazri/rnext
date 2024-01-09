function Counter(){
    const [count,setCount] = React.useState(0);

    const onClickHandler = ()=>{
        setCount(count+1)
    }

    return (
        <div className="
    counter 
    p-4
    bg-blue-950
    hover:cursor-pointer
    shadow-md
    flex 
    items-center 
    justify-center 
    flex-col gap-3
    w-screen
    my-2
    ">
        <h1 className="text-gray-100 text-4xl">Counter</h1>
        <span id="display" className="text-3xl">{count}</span>
        <button id="button" 
        className="
            px-4 
            py-2 
            bg-gray-100 
            text-lg
            shadow-md
            border-2
            hover:border-2
            hover:bg-blue-950
            hover:text-gray-100"
            onClick={onClickHandler}>Click</button>
    </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<>
    <Counter />
    <Counter />
</>);