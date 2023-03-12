
function Info() {

    const stats = [
        {
            title: "Companies",
            value: "10k+",
        },
        {
            title: "Templates",
            value: "314",
        },
        {
            title: "Queries",
            value: "12M+",
        }
    ]

    let res = stats.map( (stat, index) => {
       

        return (
            <div key={index} className="font-[Lexend Deca]">
                <h2 className="text-2xl font-bold">{stat.value}</h2>
                <span className="text-stat-heading uppercase text-[14px]">{stat.title}</span>
            </div>
        )
    })

    return (
        <div className="p-8 md:p-12 md:max-w-[500px] w-full ">
            <div className="w-fit pr-0 md:pr-8">
            <h1 className="text-3xl md:text-4xl font-bold text-center md:text-left">
                Get 
                <span className="text-accent"> insights </span>
                 that help your business grow.
             </h1>

            <p className="text-main-text mt-8 leading-6 text-center md:text-left">
                Discover the benefits of data analytics and make better decisions regarding revenue, customer 
                experience, and overall efficiency.
            </p>

            <div className="flex md:justify-between md:flex-row text-center gap-4 flex-col md:mt-16 mt-8 font-[Lexend Deca]">
                {res}
            </div>
            </div>
        </div>
    )
}

export default Info